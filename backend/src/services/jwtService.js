const jwt = require('jsonwebtoken');

function generateJwt(id, name, email) {
  const jwtSecret = process.env.JWT_SECRET;
  const token = jwt.sign(
    {
      id: id,
      name,
      email: email,
    },
    jwtSecret,
    {
      expiresIn: '365d',
    }
  );
  return token;
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: 'Erro ao validar token' });
    }
    req.user_id = data.id;
    next();
  });
}

module.exports = { generateJwt, authenticateToken };
