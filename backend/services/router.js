const express = require('express');
const router = new express.Router();
const customers = require('../controllers/customers.js');
const quote_header_list = require('../controllers/quote_header_list.js');
const quote_detail = require('../controllers/quote_detail.js');
const quote_detail_desc = require('../controllers/quote_detail_desc.js');
const modules_app = require('../controllers/modules_app.js');

// demo
router.route('/customer/:id?')
  .get(customers.get);

//modules approval list
router.route('/modules_app')
.get(modules_app.get);

//quotation list
router.route('/quote_header_list')
  .get(quote_header_list.get);

//quotation detail 
router.route('/quote_detail/:quote_book/:quote_no')
  .get(quote_detail.get)
  .put(quote_detail.put);

//quotation detail description
router.route('/quote_detail_desc/:quote_book/:quote_no')
  .get(quote_detail_desc.get);

module.exports = router;
