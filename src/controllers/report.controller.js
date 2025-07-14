
const db = require('../db/pool');

exports.getAll = async (req, res) => {
  const result = await db.query('SELECT * FROM exam_results ORDER BY date_taken DESC');
  res.json(result.rows);
};

exports.getOne = async (req, res) => {
  const result = await db.query('SELECT * FROM exam_results WHERE id = $1', [req.params.id]);
  res.json(result.rows[0]);
};
