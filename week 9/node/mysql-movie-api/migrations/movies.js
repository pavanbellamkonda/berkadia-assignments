exports.up = function (knex) {
    return knex.schema
        .createTable('movies', function (table) {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('image');
            table.string('cast');
            table.integer('rating').unsigned();
        });
};
exports.down = function (knex) {
    return knex.schema
        .dropTable('movies');
};