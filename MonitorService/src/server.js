const sleep = require('system-sleep');
const monitor = require('./Controller/MonitorController');
const address = require('./Controller/AddressController');
const config = require('../config.json');
const logger = require('./Helper/LogHelper.js');

async function loop () {
    do {
        const addressList = await address.getAddressList();
        console.log(addressList);
        if(addressList){
            for(let i = 0; i < addressList.length; i++)
            {
                try {
                    monitor.monitorAddress(addressList[i].ID_TARGET_ADDRESS);
                } catch (err) {
                    logger.insertError(err, 'server -> loop()');
                } 
            };
        } else {
            sleep(5000);
        }
        sleep(config.qtSecMustWait);
    } while (true);
}

loop();
