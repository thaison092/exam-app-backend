
const config = require('../config');

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (username === config.admin.username && password === config.admin.password) {
    return res.status(200).json({ token: 'valid-admin-token' });
  }
  return res.status(401).json({ error: 'Unauthorized' });
};
