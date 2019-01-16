exports.up = function(knex, Promise) {
    return knex.schema.raw('ALTER TABLE `movie_db`.`theatres` ADD COLUMN `image` VARCHAR(255) NULL AFTER `pin`;');
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.raw('ALTER TABLE `movie_db`.`theatres` DROP COLUMN `image`;');
  };