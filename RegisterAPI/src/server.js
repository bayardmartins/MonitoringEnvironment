const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const config = require('../config.json');

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(config.PORT, config.HOST);
