const {addQuestionaire, getAll, updateEvaluation} = require("../controllers/questionaire");

const express = require("express");
const app = express();

app.post("/add", addQuestionaire);
app.get("/getAll", getAll);
app.put("/update/:usuarioNombre/:evaluacionNombre/:isAcierto", updateEvaluation);

module.exports = app;