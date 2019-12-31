var mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  stocked: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('product', productSchema);
