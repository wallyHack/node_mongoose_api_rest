
import { Router } from 'express';
const router = Router();

import { getEmployees, getOneEmployee, createEmployee, deleteEmployee, updateEmployee } from './../controllers/employee.controller';

router.get('/', getEmployees);
router.get('/:id', getOneEmployee);
router.post('/', createEmployee);
router.delete('/:id', deleteEmployee);
router.put('/:id', updateEmployee);

export default router;