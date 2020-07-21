const connection = require('../database/connection');
const logger = require('../Helper/LogHelper');

module.exports = {
  // async buildAddress(pIdAddress) {
  //   try {
  //     const targetAddress = await connection('TARGET_ADDRESS')
  //       .where( { ID_TARGET_ADDRESS : pIdAddress } )
  //       .select(['ID_CLIENT','ID_TARGET_ADDRESS']);
  //     if (!targetAddress) {
  //       return ('could not find addres');
  //     }
  //     return targetAddress;
  //   } catch (error) {
  //     logger.insertError(error, 'AddressController -> buildAddress')
  //   }
  // },
  async getAddressList() {
    try {
      const addressList = await connection('TARGET_ADDRESS')
        .join('CLIENT','CLIENT.ID_CLIENT','=','TARGET_ADDRESS.ID_CLIENT')
        .where({ 'CLIENT.IS_ACTIVE' : 1, 'TARGET_ADDRESS.IS_ACTIVE' : 1 })
        .select('ID_TARGET_ADDRESS');
      if (!addressList) {
        return ('could not find any address.');
      }
      return addressList;
    } catch (error) {
      logger.insertError(error,'AddressController -> getAddressList()')
    }
  },
};
