import express, { request } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();


// INDEX::ITEMS
routes.get('/items', itemsController.index);

// CREATE::POINTS
routes.post('/points', pointsController.create);

// INDEX::POINTS
routes.get('/points/', pointsController.index);

// SHOW(ID)::POINTS
routes.get('/points/:id', pointsController.show);

export default routes;