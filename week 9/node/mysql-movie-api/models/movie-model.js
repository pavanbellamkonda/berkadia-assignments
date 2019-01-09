var bookshelf = require('../bookshelf');

var Movies = bookshelf.Model.extend({
  tableName: 'movies',
});

module.exports = Movies;