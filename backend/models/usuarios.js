const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const Usuario = new Schema({
    nombre: {
        type: String,
        require: "Se requiere el usuario de un nombre",
        unique: true
    },
    clave: {
        type: String,
        required: "Se requiere que el usuario de una contraseña"
    }
});

Usuario.pre('save', function(next) {
    let user = this;
    if (!user.isModified('clave')) return next();
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.clave, salt, null, (err, hash) => {
        if (err) return next(err);
        user.clave = hash;
        next();
      });
    });
  });
  



const User = mongoose.model("usuario", Usuario);
module.exports = User;