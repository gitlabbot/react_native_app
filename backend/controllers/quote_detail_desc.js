// require query oracle
const quotations = require('../db_apis/quote_detail_desc.js');

async function get(req, res, next) {
  try {
    const context = {};
    // call parameter
    context.quote_book = req.params.quote_book;
    context.quote_no   = req.params.quote_no;

    const rows = await quotations.find(context);
    // check parameter for send status code
    if (req.params.quote_book && req.params.quote_no) {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;