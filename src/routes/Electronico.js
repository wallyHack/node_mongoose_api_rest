
import { Router } from 'express';
const router = Router();

import { getElectronics, getOneElectronic, createElectronic, deleteElectronic, updateElectronic } from './../controllers/electronic.controller';

router.get('/', getElectronics);
router.get('/:id', getOneElectronic);
router.post('/', createElectronic);
router.delete('/:id', deleteElectronic);
router.put('/:id', updateElectronic);

export default router;