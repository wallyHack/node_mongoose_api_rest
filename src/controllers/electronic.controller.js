
require('./../database/database'); // conection
import Electronico from './../models/Electronico'; //model
import { ObjectID } from 'mongodb';

// funciones útiles para administrar los electronicos

export async function getElectronics(req, res){
    try {        
        const electronics = await Electronico.find();

        // respuesta al cliente
        res.json(electronics);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function getOneElectronic(req, res){
    try {
        const { id } = req.params; // ID de la URL
        const electronic = await Electronico.findById({
            "_id": ObjectID(id)
        });
    
        // respuesta al cliente
        res.json(electronic);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {} 
        });
    }
}

export async function createElectronic(req, res){
   try {
        const { nombre, marca, precio } = req.body; // datos que envia el cliente
        console.log(req.body);

        const electronicCreated = await Electronico.insertMany({
            nombre,
            marca,
            precio
        });

        // respuesta al cliente
        res.json({
            "message": "Electronic created successfully",
            "data": electronicCreated
        });   
   } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {} 
        });
   }
}

export async function deleteElectronic(req, res){
  try {
    const { id } = req.params; // ID de la URL
    const electronicDeleted = await Electronico.deleteOne({
        "_id": ObjectID(id)
    });

    // respuesta al cliente
    res.json({
        "message": "Electronic deleted successfully",
        "data": electronicDeleted
    });   
  } catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Something goes wrong",
        data: {}
    });
  }
}

export async function updateElectronic(req, res){
    try {
        const { id } = req.params; // ID de la URL
        const { nombre, marca, precio} = req.body; // datos que envia el cliente
        console.log(req.body);

        const electronicUpdated = await Electronico.updateOne({"_id": ObjectID(id)}, {$set:{
            nombre,
            marca,
            precio
        }});

        // respuest al cliente
        res.json({
            "message": "Electronic updated successfullly",
            "data": electronicUpdated
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}