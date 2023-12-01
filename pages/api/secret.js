const jwt = require('jsonwebtoken');

const KEY = 'let-mot-tres-timide';

export default function handler(req, res) {
  const { token } = req.body;

  try {
    const { admin } = jwt.verify(token, KEY);

    if (admin) {
      res.json({ secretAdminCode: 12345 });
    } else {
      res.status(403).json({ error: 'Access Denied: Not an Admin' });
    }
  } catch (error) {
    res.status(401).json({ error: 'Invalid Token' });
  }
}
