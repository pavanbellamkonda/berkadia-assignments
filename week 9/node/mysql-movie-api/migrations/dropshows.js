exports.up = function (knex) {
    return knex.schema
        .dropTable('shows');
};
exports.down = function (knex) {
    return knex.schema
        .dropTable('shows');
};