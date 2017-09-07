
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('locations', table => {
      table.increments('id').primary();
      table.string('name');
      table.float('lat', 14, 10);
      table.float('long', 14, 10);
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('locations')
  ]);
};
