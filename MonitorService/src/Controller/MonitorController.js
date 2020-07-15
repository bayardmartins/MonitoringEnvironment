const util = require('util');
const request = require('request');
const AddressController = require('./AddressController');

const requestPromise = util.promisify(request);

async function getAddressData(pAddress) {
  await requestPromise(pAddress.url, { time: true })
    .then((response) => {
      console.log('MonitorController - getAddressData - persistAddressStatus_start');
      console.log('MonitorController - getAddressData - InsertIntoSQL');
      console.log(`idClient: ${pAddress.idClient}, url: ${pAddress.url}`);
      console.log(`elapsedTime: ${response.elapsedTime}, statusRequest: ${response.statusCode}`);
      if (response) {
        console.log(`MonitorController - getAddressData - Success. Status: ${response.statusCode}`);
        return true;
      }
      return Promise.reject(response.statusCode);
    }).catch((err) => err);
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
