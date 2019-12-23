// require query oracle
const quotations = require('../db_apis/quote_detail.js');

function getQuoteDetailFromRec(req) {
    const paramQuote = {
      status: req.body.STATUS,
      remarks_quo: req.body.REMARKS_QUO
  };

  return paramQuote;
}

async function get(req, res, next) {
  try {
    const context = {};
    // call parameter
    context.flowout_book = req.params.flowout_book;
    context.flowout_no   = req.params.flowout_no;

    const rows = await quotations.find(context);

    // check parameter for send status code
    if (req.params.flowout_book && req.params.flowout_no) {
      if (rows.length === 1) {
        res.status(200).json( rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;


async function put(req, res, next) {
  try {
    let context = getQuoteDetailFromRec(req);

    context.flowout_book   = req.params.flowout_book;
    context.flowout_no   = req.params.flowout_no;

    resData = await quotations.update(context);
    if (resData !== null) {
      res.status(200).json(resData);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

module.exports.put = put;