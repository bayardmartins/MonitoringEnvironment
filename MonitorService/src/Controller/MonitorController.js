const util = require('util');
const request = require('request');
const AddressController = require('./AddressController');
const connection = require('../database/connection');

const requestPromise = util.promisify(request);

async function getAddressData(pAddress) {
  await requestPromise(pAddress.url, { time: true })
    .then((response) => {
      console.log('MonitorController - getAddressData - persistAddressStatus_start');
      console.log('MonitorController - getAddressData - InsertIntoSQL');
      console.log(insertAddressIntoSQL(pAddress));
      console.log(`elapsedTime: ${response.elapsedTime}, statusResponse: ${response.statusCode}`);
      if (response) {
        console.log(`MonitorController - getAddressData - Success. Status: ${response.statusCode}`);
        return true;
      }
      return Promise.reject(response.statusCode);
    }).catch((err) => err);
}

async function insertAddressIntoSQL(idAddress) {
//  return { idAddress, idClient, url } = getfromsql
}

module.exports = {
  getAddressStatus(idAddress) {
    console.log('MonitorController - get() start');
    console.log(`MonitorController - get() idAddres: ${idAddress}`);
    console.log('MonitorController - get() before buildAddress');
    const address = AddressController.buildAddress(idAddress);
    console.log('MonitorController - get() after buildAddress');
    console.log('MonitorController - get() before response');
    return (getAddressData(address));
  },
};
