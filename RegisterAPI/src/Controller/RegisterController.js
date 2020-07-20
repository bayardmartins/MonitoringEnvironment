const url = require('url');
const connection = require('../database/connection');

module.exports = {
  async postClient(req, res) {
    const urlParts = url.parse(req.url, true);
    const { nmClient, deEmail } = urlParts.query;
    if (!nmClient || !deEmail) {
      return res.sendstatus(400).send('parâmetros inválidos');
    }
    const client = await connection('CLIENT')
      .insert([
        {
          NM_CLIENT: nmClient,
          DE_EMAIL: deEmail,
        }]);
    if (!client) {
      return res.send.status(400).json({ error: 'could not insert client' });
    }
    return res.send(client);
  },
  async postAddress(req, res) {
    const { idClient } = req.body;
    const urlParts = url.parse(req.url, true);
    const { urlAddress } = urlParts.query;
    if (!urlAddress && !idClient) {
      return res.sendStatus(400).send('parâmetros inválidos');
    }
    try {
      const targetAddress = await connection('TARGET_ADDRESS')
        .insert([
          {
            DE_TARGET_URL: urlAddress,
            ID_CLIENT: idClient,
          }]);
      if (!targetAddress) {
        return res.status(400).json({ error: 'could not insert client' });
      }
      return res.json(targetAddress);
    } catch (error) {
      return res.json(error);
    }
  },
  async getClient(req, res) {
    const urlParts = url.parse(req.url, true);
    const idClient = urlParts.query;
    if (!idClient) {
      return res.sendStatus(400).send('parâmetros inválidos');
    }
    try {
      const client = await connection('CLIENT')
        .where({ ID_CLIENT: idClient });
      if (!client) {
        return res.send().status(400).json({ error: 'could not find client.' });
      }
      return client;
    } catch (error) {
      return res.send().json(error);
    }
  },
  async getAddress(req, res) {
    const urlParts = url.parse(req.url, true);
    const idAddress = urlParts.query;
    if (!idAddress) {
      return res.sendStatus(400).send('parâmetros inválidos');
    }
    try {
      const address = await connection('ADDRESS')
        .where({ ID_ADDRESS: idAddress });
      if (!address) {
        return res.send().status(400).json({ error: 'could not find client.' });
      }
      return address;
    } catch (error) {
      return res.send().json(error);
    }
  },
  async getAddressList(req, res) {
    const addressList = await connection('ADDRESS');
    return res.json().send(addressList);
  },
  async getClientList(req, res) {
    const clientList = await connection('CLIENT');
    return res.json().send(clientList);
  },
};
