const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

//COMIENZO MODELO USUARIO
const Topico = new Schema({
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
      type: [Topico],
      default: []
    }
});

Usuario.pre('save', function(next) {
    let user = this;
    if (!user.isModified('clave')) return next();
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.clave, salt, null, (err, hash) => {
        if (err) return next(err);
        user.clave = hash;
        next();
      });
    });
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

//FIN DE EL MODELO DE USUARIO

//COMIENZO DE EL MODELO DE PREGUNTAS
const preguntaRespuestaSchema = new Schema({
    pregunta: {
      type: String,
      required: true
    },
    respuestas: {
      type: [String],
      required: true
    },
    respuestaCorrecta: {
        type: String,
        required: true
      }
  },{_id: false});
  
  const Temas = new Schema({
    nombre: {
      type: String,
      required: true,
      unique: true
    },
    preguntasRespuestas: {
      type: [preguntaRespuestaSchema],
      required: true
    }
  });
  
  Temas.post('save', async function (doc, next) {
    try {
      const temaActualizado = doc.toObject();
      await User.updateMany({}, { $push: { evaluaciones: { nombre: temaActualizado.nombre, aciertos: 0, fallos: 0 } } });
    } catch (error) {
       next(error)
    }
  });

  const Tema = mongoose.model("tema", Temas);
// FIN DEL MODELO DE PREGUNTAS




module.exports = {User, Tema};