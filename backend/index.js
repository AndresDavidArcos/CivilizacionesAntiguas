const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database")

//middlewares
app.use(cors());

  
app.use(express.json());

//configuraciones
app.set("port","4000");

//rutas
app.use("/api",require("./routes/login"));
app.use("/api/questionaire",require("./routes/questionaire"));

//manejador de errores
app.use((err,req,res,next)=>{
    console.log(err)
    res.json({message: err});
})

app.listen(app.get("port"), ()=>{
    console.log("backend escuchando en el puerto "+app.get("port"));
})
