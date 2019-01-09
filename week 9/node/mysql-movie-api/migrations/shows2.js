exports.up = function (knex) {
    return knex.schema
        .createTable('shows', function (table) {
            table.increments('id').primary();
            table.string('movie').notNullable();
            table.string('theatre').notNullable();
            table.integer('price').unsigned();
            table.string('date').notNullable();
            table.string('time').notNullable();
            table.integer('tickets_total').unsigned().notNullable();
            table.integer('tickets_available').unsigned().notNullable();
        });
};
exports.down = function (knex) {
    return knex.schema
        .dropTable('shows');
};