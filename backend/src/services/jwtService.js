const jwt = require("jsonwebtoken");

function generateJwt(id, name, email) {
  const jwtSecret = process.env.JWT_SECRET;
  const token = jwt.sign(
    {
      id: id,
      name,
      email: email,
    },
    jwtSecret
  );
  return token;
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    req.user_id = data.id;
    next();
  });
}

module.exports = { generateJwt, authenticateToken };
