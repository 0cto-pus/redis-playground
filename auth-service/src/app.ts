import express from 'express';
import loginRoutes from './routes/login-routes';

const app = express();

app.use(express.json());

app.use(loginRoutes);

export default app;
