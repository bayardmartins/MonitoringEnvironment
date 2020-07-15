const sleep = require('system-sleep');
const monitor = require('./Controller/MonitorController');
const address = require('./Controller/AddressController');
const config = require('../config.json');

const addressList = address.getAddressList();

do {
  addressList.forEach((element) => {
    try {
      console.log('Server getAddressStatus_start');
      monitor.getAddressStatus(element);
      console.log(`Server getAddressStatus_finish: ${element}\n`);
      sleep(5000);
    } catch (err) {
      console.log(`Insert into SQL: exception: ${err}`);
    }
  });
  sleep(config.qtMSecMustWait);
} while (true);
