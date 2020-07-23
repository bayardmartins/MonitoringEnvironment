/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
exports.up = function(knex) {
    return knex.schema.createTable('LOG_ERROR', function (table) {
      table.increments('ID_LOG_ERROR');
      table.string('DE_ERROR').notNullable();
      table.string('DE_ORIGIN').notNullable();
      table.datetime('DT_REGISTER').notNullable();
    });
  };
  
  
  exports.down = function (knex) {
    return knex.schema.dropTable('LOG_ERROR');
  };