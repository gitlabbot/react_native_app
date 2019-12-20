const database = require('../services/database.js');

const baseQuery =
 `select cardcode "code", 
         cardname "name", 
         debpayacctname "debpay"
    from ocrd where cardcode between '040735' and '040900'`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.cardcode = context.id;

    query += `\nwhere cardcode = :cardcode`;
  }

  const result = await database.executeData(query, binds);

  return result.rows;
}

module.exports.find = find;
