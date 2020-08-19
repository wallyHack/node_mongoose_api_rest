
require('./../database/database'); // conection
import Cliente from './../models/Cliente'; //model
import { ObjectID } from 'mongodb';

// funciones útiles para administrar los clientes

export async function getClients(req, res){
   try {
        const clients = await Cliente.find();
        res.json({
            data: clients
        });
   } catch (error) {
       console.log(error);
       res.status(500).json({
            message: "Something goes wrong",
            data: {}
       });
   }
}

export async function getOneClient(req, res){
   try {
        const { id } = req.params; // ID de la URL        
        const client = await Cliente.findOne({
            "_id": ObjectID(id)
        });

        res.json({
            data: client
        });
   } catch (error) {
        console.log(error);
        res.status(500).json({  
            message: "Something goes wrong",
            data: {}
        });
   }
}

export async function createClient(req, res){
    try {
        const { nombre, ap_paterno, sexo, edad, domicilio, familiares } = req.body; // datos que envia el cliente
        console.log(req.body);
        console.log(familiares);

        const clientCreated = await Cliente.insertMany([{
            "nombre": nombre,
            "ap_paterno": ap_paterno,
            "sexo": sexo,
            "edad": edad,
            "domicilio": {
                "calle": domicilio.calle,
                "numero": domicilio.numero,
                "cp": domicilio.cp
            }
        }]);

        // respuesta al cliente
        res.json({
            "message": "Client created",
            "data": clientCreated
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function deleteOneClient(req, res){
    try {
        const { id } = req.params; // ID de la URL
        const clientDeleted = await Cliente.deleteOne({
            "_id": ObjectID(id)
        });
    
        res.json({
            "message": "Client deleted",
            "data": clientDeleted
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export async function updateClient(req, res){   
    try {
        const { id } = req.params; // ID de la URL
        const { nombre, ap_paterno, sexo, edad, domicilio } = req.body; // datos a actualizar
        
        const clientUpdated = await Cliente.updateOne({"_id": ObjectID(id)}, {$set: 
            {"nombre": nombre,
            "ap_paterno": ap_paterno,
            "sexo": sexo,
            "edad": edad,
            "domicilio": {
                "calle": domicilio.calle,
                "numero": domicilio.numero,
                "cp": domicilio.cp
            }
            }
        });
    
        // respuesta al cliente
        res.json({
            "message": "Client updated",
            "data": clientUpdated
            }   
        );
    } catch (error) {
        console.log(error); 
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });  
    }
}

