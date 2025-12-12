const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('Authorization')?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Acceso denegado. Token requerido." });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified; // guarda info del token
    next();
  } catch (error) {
    res.status(400).json({ message: "Token inválido o expirado" });
  }
};
