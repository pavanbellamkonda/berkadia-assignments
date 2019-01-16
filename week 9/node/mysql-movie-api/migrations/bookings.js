exports.up = function (knex) {
    return knex.schema
        .createTable('bookings', function (table) {
            table.increments('id').primary();
            table.string('user_name');
            table.string('movie').notNullable();
            table.string('theatre').notNullable();
            table.string('date').notNullable();
            table.string('time').notNullable();
            table.integer('count').unsigned().notNullable();
        });
};
exports.down = function (knex) {
    return knex.schema
        .dropTable('bookings');
};