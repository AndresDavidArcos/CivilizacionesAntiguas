const {addQuestionaire, getAll} = require("../controllers/questionaire");

const express = require("express");
const app = express();

app.post("/add", addQuestionaire);
app.get("/getAll", getAll);

module.exports = app;