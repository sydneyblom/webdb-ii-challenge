
exports.up = function(knex) {
    return knex.schema.createTable('cars', function (table) {
        table.increments();
//needs to be unique
        table.string('VIN', 128).unique().notNullable();
        table.string('make', 64).notNullable(); //req
        table.string('model', 64).notNullable();
        table.integer('milage', 7).notNullable();

        table.string('transmission type', 128);
        table.string('title status', 128);

        table.timestamps(true, true);

      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  
};
