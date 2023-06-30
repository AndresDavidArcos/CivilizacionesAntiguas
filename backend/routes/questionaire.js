const {addQuestionaire, updateQuestionaire} = require("../controllers/questionaire");

const express = require("express");
const app = express();

app.post("/addQuestionaire", addQuestionaire);
app.post("/modifyQuestionaire", updateQuestionaire);

module.exports = app;