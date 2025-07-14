
const db = require('../db/pool');

exports.getAll = async (req, res) => {
  const result = await db.query('SELECT * FROM questions');
  res.json(result.rows);
};

exports.create = async (req, res) => {
  const { text, options, correct_answers } = req.body;
  await db.query(
    'INSERT INTO questions (text, options, correct_answers) VALUES ($1, $2, $3)',
    [text, options, correct_answers]
  );
  res.status(201).send('Question added');
};
