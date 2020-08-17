
require('./../database/database'); // conection
import Empleado from './../models/Empleado'; // model
import { ObjectId } from 'mongodb';

// funciones útiles para administrar los empleados

export async function getEmployees(req, res){
    try {                
        const employees = await Empleado.find();        

        // respuesta al cliente
        res.json(employees);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function getOneEmployee(req, res){
    try {
        const { id } = req.params; // ID de la URL
        const employee = await Empleado.findOne({
            "_id": ObjectId(id)
        });

        // respuesta al cliente
        res.json(employee);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function createEmployee(req, res){
    try {
        const { nombre, ap_paterno, salario  } = req.body; // datos que envia el cliente
        const employeeCreated = await Empleado.insertMany({
            "nombre": nombre,
            "ap_paterno": ap_paterno,
            "salario": salario
        });

        // respuesta al cliente
        res.json({
            "message": "Employee created successfully",
            "data": employeeCreated
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function deleteEmployee(req, res){
    try {
        const { id } = req.params; // ID de la URL
        const employeeDeleted = await Empleado.deleteOne({
            "_id": ObjectId(id)
        });
    
        // respuesta al cliente
        res.json({
            "message": "Employee deleted",
            "data": employeeDeleted
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function updateEmployee(req, res){
    try {
        const { id } = req.params; // ID de la URL
        console.log(id);
        const { nombre, ap_paterno, salario } = req.body; // datos a actualizar    
        const employeeUpdated = await Empleado.updateOne(
            {"_id": ObjectId(id)},
            {$set: {"nombre": nombre, "ap_paterno": ap_paterno, "salario": salario}}
        );

        // respuesta al cliente
        res.json({
            "message": "Employee updated",
            "data": employeeUpdated
        });       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}