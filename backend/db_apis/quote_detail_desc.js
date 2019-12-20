const database = require('../services/database.js');

// query Oracle Sql
const baseQuery =
 `select seq, 
         brand_name, 
         --get_product_name(product_code) product_name, 
         product_code product_name, 
         model_no, 
         qty, 
         unit,
         to_char(rate,'FM9,999,999,999,999.00') rate,
         to_char(sub_total,'FM9,999,999,999,999.00') sub_total,
         currency
    from tkk_quo_d`;

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
                  and status = 'N'
                order by seq`;
  }
  const result = await database.executeData(query, binds);
  return result.rows;
}

module.exports.find = find;
