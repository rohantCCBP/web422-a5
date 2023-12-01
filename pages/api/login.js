import jwt from 'jsonwebtoken'

export default function handler(req, res) {
  if (!req.body) {
    res.status(400).json({ error: 'Request body not found' });
    return;
  }

  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username, admin: true }, 'let-mot-tres-timide', { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
}
