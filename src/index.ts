import express, { Express } from 'express';
import createDeliveryRouter from './routes/createDeliveryRouter';
import getDeliveriesRouter from './routes/getDeliveriesRouter';
import dotenv from 'dotenv';
import cors from 'cors'; 
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));
app.use(bodyParser.json());
app.use('/api/delivery', createDeliveryRouter)
app.use('/api/delivery', getDeliveriesRouter)


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});