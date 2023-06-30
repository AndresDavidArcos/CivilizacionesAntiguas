const Tema = require("../models/questionaire");

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

  async updateQuestionaire(req, res, next) {
    try {
      const { nombre, preguntasRespuestas } = req.body;

      const temaExistente = await Tema.findById(nombre);
      if (!temaExistente) {
        return res.status(404).json({ message: "Tema no encontrado" });
      }

      temaExistente.nombre = nombre;
      temaExistente.preguntasRespuestas = preguntasRespuestas;

      await temaExistente.save();

      res.status(200).json({ message: "Cuestionario actualizado exitosamente" });
    } catch (error) {
      next(error);
    }
  },
};
