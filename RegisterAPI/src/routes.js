const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const RegisterController = require('./Controller/RegisterController');

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.post('/client/', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    nameClient: Joi.string(),
  }),
}), RegisterController.postClient);

routes.post('/address/', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    urlAddress: Joi.string(),
    idClient: Joi.number(),
  }),
}), RegisterController.postAddress);

module.exports = routes;
