const {addQuestionaire} = require("../controllers/questionaire");

const express = require("express");
const app = express();

app.post("/add", addQuestionaire);

module.exports = app;