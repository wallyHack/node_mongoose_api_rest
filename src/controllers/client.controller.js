
require('./../database/database'); // conection
import Cliente from './../models/Cliente'; //model
import { ObjectID } from 'mongodb';

// funciones útiles para administrar cliente

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