var bookshelf = require('../bookshelf');

var Bookings = bookshelf.Model.extend({
  tableName: 'bookings',
});

module.exports = Bookings;