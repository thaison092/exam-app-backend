
const db = require('../db/pool');

exports.submit = async (req, res) => {
  const { student_name, answers, score } = req.body;
  await db.query(
    'INSERT INTO exam_results (student_name, score, answers) VALUES ($1, $2, $3)',
    [student_name, score, answers]
  );
  res.status(201).send('Exam submitted');
};
