/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
exports.up = function(knex) {
    return knex.schema.createTable('MONITORING', function (table) {
      table.bigIncrements('ID_MONITORING');
      table.datetime('DT_REGISTER');
      table.integer('ID_CLIENT');
      table.bigInteger('ID_TARGET_ADDRESS');
      table.integer('NU_ELAPSED_TIME');
      table.string('ID_STATUS_RESPONSE');
  
      table.foreign('ID_CLIENT').references('ID_CLIENT').inTable('CLIENT');
      table.foreign('ID_TARGET_ADDRESS').references('ID_TARGET_ADDRESS').inTable('TARGET_ADDRESS');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('MONITORING');
  };
  