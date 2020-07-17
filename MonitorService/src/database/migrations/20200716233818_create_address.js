/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
exports.up = function(knex) {
    return knex.schema.createTable('TARGET_ADDRESS', function (table) {
      table.bigIncrements('ID_TARGET_ADDRESS');
      table.string('DE_TARGET_URL');
      table.integer('ID_CLIENT');
  
      table.foreign('ID_CLIENT').references('ID_CLIENT').inTable('CLIENT');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('TARGET_ADDRESS');
  };
  