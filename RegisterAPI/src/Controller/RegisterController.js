const url = require('url');
const connection = require('../database/connection');

function persistClient(name) {
  console.log('RegisterController - persistClient_start');
  console.log('RegisterController - persistClient - InsertIntoSQL');
  console.log(`RegisterController - persistClient: ${name}`);
  console.log('RegisterController - persistClient - returning idClient');
  console.log('RegisterController - persistClient_finish');
  return (200);
}

function persistAddress(urlAddress, idClient) {
  console.log('RegisterController - persistAddress_start');
  console.log('RegisterController - persistAddress - InsertIntoSQL');
  console.log(`RegisterController - persistAddress ${urlAddress}, ${idClient}`);
  console.log('RegisterController - persistAddress - returning idAddress');
  console.log('RegisterController - persistAddress_finish');
  return (200);
}

module.exports = {
  postClient(req, res) {
    console.log('RegisterController - postClient() start');
    const urlParts = url.parse(req.url, true);
    const { nameClient } = urlParts.query;
    if (!nameClient) {
      return res.sendstatus(400).send('parâmetros inválidos');
    }
    try {
      return res.sendStatus(persistClient(nameClient));
    } catch (err) {
      return res.sendStatus(err);
    }
  },
  postAddress(req, res) {
    console.log('RegisterController - postAddress() start');
    const urlParts = url.parse(req.url, true);
    const { urlAddress, idClient } = urlParts.query;
    if (!urlAddress && !idClient) {
      return res.sendStatus(400).send('parâmetros inválidos');
    }
    try {
      return res.sendStatus(persistAddress(urlAddress, idClient));
    } catch (err) {
      return err;
    }
  },
};
