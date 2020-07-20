const connection = require('../database/connection');
const logger = require('../Helper/LogHelper');

module.exports = {
  async buildAddress(pIdAddress) {
    try {
      const targetAddress = await connection('TARGET_ADDRESS')
        .where( { ID_TARGET_ADDRESS : pIdAddress } )
      if (!targetAddress) {
        return res.status(400).json({ error: 'could not find address.' });
      }
      return targetAddress;
    } catch (error) {
      return res.json(error);
    }
  },
  async getAddressList() {
    try {
      const addressList = await connection('TARGET_ADDRESS')
        .where({ IS_ACTIVE : 1 })
        .select('ID_TARGET_ADDRESS');
      console.log(addressList.Count());
      if (!addressList || addressList.Count() === 0) {
        console.log('deu ruim');
        return res.status(400).json({ error: 'could not find any address.' });
      }
      return addressList;
    } catch (error) {
      logger.insertError(error,'AddressController -> getAddressList()')
    }
  },
};
