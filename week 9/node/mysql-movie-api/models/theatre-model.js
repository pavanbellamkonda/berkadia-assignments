var bookshelf = require('../bookshelf');

var Theat = bookshelf.Model.extend({
  tableName: 'theatres',
});

module.exports = Theat;