const connection = require('../database/connection');

module.exports = {
  async insertError(error, origin) {
    try{
      await connection('LOG_ERROR')
      .insert([
        {
          DE_ERROR: error,
          DE_ORIGIN: origin,
          DT_REGISTER: Date.getDate(),
        }]);
    }catch (error){
      return (error);
    }
  }    
}