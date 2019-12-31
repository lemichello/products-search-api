var mongoose = require('mongoose');
var options = require('../config/index');

module.exports = connect = function(url = options.dbUrl, opts = {}) {
  mongoose.connect(url, { ...opts, useNewUrlParser: true, useUnifiedTopology: true });
};
