const sleep = require('system-sleep');
const monitor = require('./Controller/MonitorController');
const address = require('./Controller/AddressController');
const config = require('../config.json');
const logger = require('./Helper/LogHelper.js');

async function loop () {
    do {
        const addressList = await address.getAddressList();
        if(addressList){
            addressList.forEach(address => {
                try {
                    monitor.monitorAddress(address);
                } catch (err) {
                    logger.insertError(err, 'server -> loop()');
                }        
            })
        } else {
            sleep(5000);
        }
    } while (true);
}

loop();