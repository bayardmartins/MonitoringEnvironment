/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
exports.up = function(knex) {
    return knex.schema.createTable('CLIENT', function (table) {
      table.increments('ID_CLIENT');
      table.string('NM_CLIENT').notNullable();
      table.string('DE_EMAIL').notNullable();
      table.boolean('IS_ACTIVE');
    });
  };
  
  
  exports.down = function (knex) {
    return knex.schema.dropTable('CLIENT');
  };
  