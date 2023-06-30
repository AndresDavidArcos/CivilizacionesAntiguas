const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const Tema = require('./preguntas.js')

const Temas = new Schema({
  nombre: {
    type: String,
    require: "El tema necesita un nombre",
  },
  aciertos: {
    type: Number,
    default: 0
  },
  fallos: {
  type: Number,
  default: 0
  }
})

const Usuario = new Schema({
    nombre: {
        type: String,
        require: "Se requiere el usuario de un nombre",
        unique: true
    },
    clave: {
        type: String,
        required: "Se requiere que el usuario de una contraseña"
    },
    evaluaciones: {
      type: [Temas],
      default: []
    }
});

Usuario.pre('save', async function(next) {
  if (!this.isModified('clave')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.clave, salt);
    this.clave = hash;
    next();
  } catch (error) {
    next(error);
  }
});


Usuario.pre('save', async function(next) {
  if (this.isNew) {
    try {
      const temas = await Tema.find().select('nombre').lean();
      this.evaluaciones = temas.map(tema => ({
        nombre: tema.nombre,
        aciertos: 0,
        fallos: 0
      }));
    } catch (err) {
      return next(err);
    }
  }
  next();
});

  const User = mongoose.model("usuario", Usuario);
module.exports = User;