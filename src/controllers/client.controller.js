
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
    const { nombre, ap_paterno, sexo, edad, domicilio, familiares } = req.body; // datos que envia el cliente
    console.log(req.body);

    const clientCreated = await Cliente.insertMany({
        "nombre": nombre,
        "ap_paterno": ap_paterno,
        "sexo": sexo,
        "edad": edad,
        "domicilio": {
            "calle": domicilio.calle,
            "numero": domicilio.numero,
            "cp": domicilio.cp
        },
        "familiares": [
            familiares[0],
            familiares[1]
        ]
    });

    // respuesta al cliente
    res.json({
        "message": "Client created"
    });
}