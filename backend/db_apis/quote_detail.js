const database = require('../services/database.js');

// query Oracle Sql
const baseQuery =
 `select flowout_book||'-'||flowout_no quote_doc,
         flowout_book,
         flowout_no,
         to_char(flowout_date,'dd/mm/yyyy') flowout_date, 
         cust_name, 
         disc_amt, 
         disc_per, 
         to_char(total,'FM9,999,999,999,999.00') total, 
         currency,
         decode(status,'Y','Approve','N','Unapprove', 'Cancel') status_desc, 
         status,
         remarks_quo 
    from tkk_quo_h`;

async function find(quotations) {
  let query = baseQuery;
  const binds = {};

// check parameter for add condition
  if (quotations.quote_book && quotations.quote_no) {
    // mapping parameter
    binds.quote_book = quotations.quote_book;
    binds.quote_no   = quotations.quote_no;

    query += `\nWhere flowout_book = :quote_book 
                  and flowout_no   = :quote_no
                  and status = 'N'`;
  }
  const result = await database.executeData(query, binds);
  return result.rows;
}

module.exports.find = find;

// update status statement
const updateSql =
 `update tkk_quo_h
     set status       = :status,
         remarks_quo  = :remarks_quo
   where flowout_book = :quote_book
     and flowout_no   = :quote_no`;

async function update(quotation) {
  const updateStatus = Object.assign({}, quotation);
  const result = await database.executeData(updateSql, updateStatus);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return updateStatus;
  } else {
    return null;
  }
}

module.exports.update = update;