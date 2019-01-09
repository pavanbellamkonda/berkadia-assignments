var bookshelf = require('../bookshelf');

var Shows = bookshelf.Model.extend({
  tableName: 'shows',
});

module.exports = Shows;