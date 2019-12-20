const modules = require('../db_apis/modules_app.js');

async function get(req, res, next) {
  try {
    const rows = await modules.find();
      res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;
