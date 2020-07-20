const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const RegisterController = require('./Controller/RegisterController');

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.post('/client/', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    nmClient: Joi.string(),
    deEmail: Joi.string(),
  }),
}), RegisterController.postClient);

routes.post('/address/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    idClient: Joi.required(),
  }),
  [Segments.QUERY]: Joi.object().keys({
    urlAddress: Joi.string(),
  }),
}), RegisterController.postAddress);

routes.get('/client/', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    idClient: Joi.number(),
  }),
}), RegisterController.getClient);

routes.get('/address/', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    idAddress: Joi.number(),
  }),
}), RegisterController.getAddress);

routes.get('/address/', RegisterController.getAddressList);
routes.get('/client/', RegisterController.getClientList);

module.exports = routes;
