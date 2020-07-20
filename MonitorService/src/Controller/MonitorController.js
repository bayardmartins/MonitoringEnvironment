const util = require('util');
const request = require('request');
const AddressController = require('./AddressController');
const connection = require('../database/connection');
const logger = require('../Helper/LogHelper.js');

const requestPromise = util.promisify(request);

async function getAddressData(pAddress) {
  try{
    await requestPromise(pAddress.DE_TARGET_URL, { time: true })
      .then((response) => {
          addressData = {
          "idClient" : pAddress.ID_CLIENT,
          "idTargetAddress" : pAddress.ID_TARGET_ADDRESS,
          "elapsedTime" : response.elapsedTime,
          "idStatus" : response.statusCode,
        }
        if (response) {
          return addressData;
        }
        return Promise.reject(response.statusCode);
      })
  } catch (err) {
      logger.insertError(err, 'MonitorController -> getAddressData()');
  };
}

async function persistData(requestAddress){
  await connection('MONITORING')
    .insert([
      {
        DT_REGISTER: Date().getDate(),
        ID_CLIENT: requestAddress.idClient,
        ID_TARGET_ADDRESS: requestAddress.idTargetAddress,
        NU_ELAPSED_TIME: requestAddress.elapsedTime,
        ID_STATUS_RESPONSE: requestAddress.idStatus,
      }]);
  if (!client) {
    return res.send.status(400).json({ error: 'could not insert client' });
  }
  return res.send(monitoring);
}

module.exports = {
  async monitorAddress(idAddress) {
    if (!nmClient || !deEmail) {
      return res.sendstatus(400).send('parâmetros inválidos');
    }
    const address = await AddressController.buildAddress(idAddress);
    const requestAddress = await getAddressData(address);
    const monitoring = await persistData(requestAddress);
    return monitoring;    
  },
};
