const {User, Tema} = require("../models/usuariospreguntas.js")

module.exports = {
  async addQuestionaire(req, res, next) {
    try {
      const { nombre, preguntasRespuestas } = req.body;
      const temaExistente = await Tema.findOne({ nombre });
      if (temaExistente) {
        return res.status(400).json({ message: "El tema ya existe" });
      }

      const nuevoTema = new Tema({
        nombre,
        preguntasRespuestas,
      });

      await nuevoTema.save();

      res.status(201).json({ message: "Cuestionario agregado exitosamente" });
    } catch (error) {
      next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const cuestionarios = await Tema.find();
      res.status(200).json(cuestionarios);
    } catch (error) {
      next(error);
    }
  },

  async updateEvaluation(req, res, next) {
    try {
      console.log("entro")
      const { usuarioNombre, evaluacionNombre, isAcierto } = req.params;
  
      const usuario = await User.findOne({ nombre: usuarioNombre });
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      const evaluacion = usuario.evaluaciones.find((evaluacion) => evaluacion.nombre === evaluacionNombre);
      if (!evaluacion) {
        return res.status(404).json({ message: "Evaluación no encontrada" });
      }
  
      if (isAcierto === "true") {
        evaluacion.aciertos += 1;
      } else if (isAcierto === "false") {
        evaluacion.fallos += 1;
      } else {
        return res.status(400).json({ message: "Valor inválido para isAcierto: ", isAcierto });
      }
  
      await usuario.save();
  
      res.status(200).json({ message: "Evaluación actualizada exitosamente" });
    } catch (error) {
      next(error);
    }
  }
  
};
