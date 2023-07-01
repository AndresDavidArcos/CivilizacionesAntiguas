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
  }
};
