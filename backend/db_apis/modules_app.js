const database = require('../services/database.js');

const baseQuery =
 `select a.module_id, 
         a.module_name, 
         get_number_req(a.transaction_type) qty_book
    from tkk_module_app_setup a`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

//   if (context.id) {
//     binds.cardcode = context.id;

//     query += `\nwhere cardcode = :cardcode`;
//   }

  const result = await database.executeData(query, binds);

  return result.rows;
}

module.exports.find = find;
