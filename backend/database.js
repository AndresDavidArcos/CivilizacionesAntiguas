const mongoose = require("mongoose")

const MONGO_URI = "secreto";

module.exports = mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("Se ha conectado a una bd de mongo");
},
    err => {
        console.log("Se produjo el error: "+err);
    }
    );