const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const MonitorController = require('./Controller/MonitorController');

const routes = express.Router();

routes.get(('/monitor/'), celebrate({
  [Segments.QUERY]: Joi.object().keys({
    idAddress: Joi.number().required(),
  }),
}), MonitorController.get);

module.exports = routes;
