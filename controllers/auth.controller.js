const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nombre, email, password, isAdmin } = req.body;

    const user = new User({ nombre, email, password, isAdmin });
    await user.save();

    res.status(201).json({
      message: "Usuario registrado con éxito",
      user
    });
  } catch (error) {
    res.status(400).json({ message: "Error al registrar", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar usuario
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

    // Verificar contraseña
    const validPassword = await user.comparePassword(password);
    if (!validPassword)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    // Crear TOKEN
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login exitoso",
      token
    });

  } catch (error) {
    res.status(500).json({ message: "Error en login", error: error.message });
  }
};
