const quotations = require('../db_apis/quote_header_list.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);

    const rows = await quotations.find(context);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;
