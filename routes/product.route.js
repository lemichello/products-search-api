var express = require('express');
var controller = require('../controllers/product.controller');
var router = express.Router();

router
  .route('/')
  .get(controller.getMany)
  .post(controller.createOne);

router
  .route('/:id')
  .get(controller.getOne)
  .delete(controller.removeOne);

module.exports = router;
