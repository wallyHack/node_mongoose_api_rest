
import { Router } from 'express';
const router = Router();

import { getClients, getOneClient } from './../controllers/client.controller';

// ruta que agrega el registro de un cliente con POST
router.get('/', getClients);

// ruta para obtener todos los clientes con GET
router.get('/:id', getOneClient);

// // ruta que extrae un cliente especifico
// router.post('/', createClient);

// // ruta que elimina un cliente
// router.delete(':id', deleteOneClient);

// // ruta que actualiza un cliente
// router.put('::id', updateClient);

export default router;