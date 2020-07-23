const url = require('url');
const connection = require('../database/connection');

module.exports = {
  async postClient(req, res) {
    const urlParts = url.parse(req.url, true);
    console.log(req.url);
    const { nmClient, deEmail } = urlParts.query;
    console.log(`name ${nmClient} email ${deEmail}`);
    if (!nmClient || !deEmail) {
      return res.status(400).send('parâmetros inválidos');
    }
    const client = await connection('CLIENT')
      .insert([
        {
          NM_CLIENT: nmClient,
          DE_EMAIL: deEmail,
          IS_ACTIVE: true,
        }]);
    if (!client) {
      return res.send.status(400).json({ error: 'could not insert client' });
    }
    return res.send(client);
  },
  async postAddress(req, res) {
    const { idClient } = req.body;
    const urlParts = url.parse(req.url, true);
    let { urlAddress } = urlParts.query;
    if (!urlAddress && !idClient) {
      return res.sendStatus(400).send('parâmetros inválidos');
    }
    try {
      urlAddress = `http://${urlAddress}`;

      const targetAddress = await connection('TARGET_ADDRESS')
        .insert([
          {
            DE_TARGET_URL: urlAddress,
            ID_CLIENT: idClient,
            IS_ACTIVE: true,
          }]);
      if (!targetAddress) {
        return res.status(400).json({ error: 'could not insert client' });
      }
      return res.send(targetAddress);
    } catch (error) {
      return res.json(error);
    }
  },
  async getClient(req, res) {
    const urlParts = url.parse(req.url, true);
    const { idClient } = urlParts.query;
    if (!idClient) {
      return res.status(400).send('parâmetros inválidos');
    }
    try {
      const client = await connection('CLIENT')
        .where({ ID_CLIENT: idClient })
        .select(['NM_CLIENT', 'DE_EMAIL', 'IS_ACTIVE']);
      return res.send(client[0]);
    } catch (error) {
      return res.status(500).send('error');
    }
  },
  async getAddress(req, res) {
    const urlParts = url.parse(req.url, true);
    const { idAddress } = urlParts.query;
    console.log(idAddress);
    if (!idAddress) {
      return res.sendStatus(400).send('parâmetros inválidos');
    }
    try {
      console.log('aqui');
      const address = await connection('TARGET_ADDRESS')
        .where({ ID_TARGET_ADDRESS: idAddress })
        .select(['DE_TARGET_URL', 'ID_CLIENT']);
      console.log(address);
      return res.send(address[0]);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async getAddressList(req, res) {
    const addressList = await connection('TARGET_ADDRESS')
      .select('*');
    if (!addressList) {
      return res.send('Nenhum endereço encontrado');
    }
    return res.send(addressList);
  },
  async getClientList(req, res) {
    const clientList = await connection('CLIENT')
      .select('*');
    return res.send(clientList);
  },
  async getMonitoring(req, res) {
    const logList = await connection('MONITORING')
      .select('*');
    return res.send(logList);
  },
};
