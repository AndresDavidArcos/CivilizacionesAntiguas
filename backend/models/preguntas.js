const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Usuario = require('./usuarios.js'); 

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
  
  const Tema = new Schema({
    nombre: {
      type: String,
      required: true,
      unique: true
    },
    preguntasRespuestas: {
      type: [preguntaRespuestaSchema],
      required: true
    }
  }, {_id: false});

  Tema.post('save', async function (doc, next) {
    try {
      const temaActualizado = doc.toObject();
      await Usuario.updateMany({}, { $push: { evaluaciones: { nombre: temaActualizado.nombre, aciertos: 0, fallos: 0 } } });
    } catch (error) {
       next(error)
    }
  });
  
  Tema.post('findOneAndUpdate', async function (doc, next) {
    try {
      if (doc.isModified('nombre')) {
        const temaActualizado = doc.toObject();    
        await Usuario.updateMany({ 'evaluaciones.nombre': doc.nombre }, { $set: { 'evaluaciones.$.nombre': temaActualizado.nombre } });
      }
    } catch (error) {
        next(error)
    }
  });
  
  module.exports = Tema;