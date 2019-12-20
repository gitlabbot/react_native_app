const database = require('../services/database.js');

const baseQuery =
 `select * from (
    select flowout_book||'-'||flowout_no quote_doc, 
          'Manager' app_pos, 
          status,
          flowout_book,
          flowout_no
      from tkk_quo_h
    where status = 'N' 
      and to_char(flowout_date,'mm/yyyy') = to_char(sysdate,'mm/yyyy')
      and total > 300000 and total < 500000
    union all   
    select flowout_book||'-'||flowout_no quote_doc, 
          'Director' app_pos, 
          status,
          flowout_book,
          flowout_no
      from tkk_quo_h
    where status = 'N' 
      and to_char(flowout_date,'mm/yyyy') = to_char(sysdate,'mm/yyyy')
      and total > 500000)
     order by flowout_book, flowout_no`;

async function find(context) {
  let query = baseQuery;
  const binds = {};
  const result = await database.executeData(query, binds);

  return result.rows;
}

module.exports.find = find;
