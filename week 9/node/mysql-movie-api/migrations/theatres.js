exports.up = function (knex) {
    return knex.schema
        .createTable('theatres', function (table) {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('location');
            table.integer('pin').unsigned();
        });
};
exports.down = function (knex) {
    return knex.schema
        .dropTable('theatres');
};