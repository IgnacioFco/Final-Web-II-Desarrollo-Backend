module.exports = function(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "No tienes permisos de administrador" });
  }

  next();
};
