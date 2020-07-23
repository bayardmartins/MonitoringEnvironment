const util = require('util');
const request = require('request');
const AddressController = require('./AddressController');
const connection = require('../database/connection');
const logger = require('../Helper/LogHelper.js');

const requestPromise = util.promisify(request);

async function getAddressData(pIdAddress) {
  try{
    const targetAddress = await connection('TARGET_ADDRESS')
      .where( { ID_TARGET_ADDRESS : pIdAddress } )
      .select('ID_CLIENT','DE_TARGET_URL','ID_TARGET_ADDRESS')
      .first();
    await requestPromise(targetAddress.DE_TARGET_URL, { time: true })
      .then((response) => {
          addressData = {
          "idClient" : targetAddress.ID_CLIENT,
          "idTargetAddress" : targetAddress.ID_TARGET_ADDRESS,
          "elapsedTime" : response.elapsedTime,
          "idStatus" : response.statusCode,
        }
        if (response) {
          return persistData(addressData);
        }
        return Promise.reject(response.statusCode);
      })
  } catch (err) {
      logger.insertError(err, 'MonitorController -> getCAddressData()');
  };
}

async function persistData(pAddressData){
  const date = new Date().toJSON();
  await connection('MONITORING')
    .insert([
      {
        DT_REGISTER: date,
        ID_CLIENT: pAddressData.idClient,
        ID_TARGET_ADDRESS: pAddressData.idTargetAddress,
        NU_ELAPSED_TIME: pAddressData.elapsedTime,
        ID_STATUS_RESPONSE: pAddressData.idStatus,
      }]);
  return;
}

module.exports = {
  async monitorAddress(idAddress) {
    const address = await getAddressData(idAddress);
    return address;    
  },
};
