const connection = require('../database/connection');

module.exports = {
  buildAddress(pIdAddress) {
    console.log('AddressController - buildAddress_start');
    console.log('AddressController - buildAddress: getAddressById');
    console.log('AddressController - buildAddress: getFromSQL');
    const Address = {};
    Address.url = 'http://www.nodejs.org';
    Address.IdAddress = pIdAddress;
    Address.idClient = pIdAddress * 2;
    console.log(Address);
    console.log('AddressController - buildAddress: returning Address');
    console.log('AddressController - buildAddress_finish');
    return Address;
  },
  //  retorna a lista de IdAddress a serem consultados
  getAddressList() {
    console.log('AddresController - getAddressList_start');
    console.log('AddresController - getAddressList - getFromSQL');
    console.log('AddresController - getAddressList after getFromSQL');
    console.log('AddresController - getAddressList finish');
    return [1, 2, 3];
  },
};
