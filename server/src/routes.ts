import express, { request } from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();


// INDEX::ITEMS
routes.get('/items', itemsController.index);

// CREATE::POINTS
routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required()
    })
  }, {
    abortEarly: false
  }),
  pointsController.create);

// INDEX::POINTS
routes.get('/points/', pointsController.index);

// SHOW(ID)::POINTS
routes.get('/points/:id', pointsController.show);

// DELETEALL::POINTS
routes.delete('/points', pointsController.deleteAll);

// DELETE(ID)::POINTS
routes.delete('/points/:id', pointsController.delete);

export default routes;