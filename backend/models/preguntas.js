const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./usuarios")

const preguntaRespuestaSchema = new Schema({
    pregunta: {
      type: String,
      required: true
    },
    respuestas: {
      type: [String],
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
      console.log("ALO POLICIAAAAAA")
      await User.updateMany({}, { $push: { evaluaciones: { nombre: temaActualizado.nombre, aciertos: 0, fallos: 0 } } });
    } catch (error) {
       next(error)
    }
  });
  
  const Tema = mongoose.model("tema", Temas);
  module.exports = Tema;