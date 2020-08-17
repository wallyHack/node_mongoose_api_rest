
// configuración del servidor

import express, { json } from 'express';
import morgan from 'morgan';
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// importing the routes
import Cliente from './routes/Cliente';
import Empleado from './routes/Empleado';

// routes 
app.use('/api/clientes', Cliente);
app.use('/api/empleados', Empleado);

export default app;
