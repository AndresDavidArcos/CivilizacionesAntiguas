const {User, Tema} = require("../models/usuariospreguntas.js")
const bcrypt = require('bcrypt-nodejs');

module.exports = {
   async register(req, res, next){
      try {      
         const user = req.body;
         await User.create(user);

         res.status(200).send({ message: "Usuario registrado exitosamente"});
      } catch (err) {
         if(err.code === 11000){
            let newErr = {};
            newErr.detail = 'El usuario de nombre '+err.keyValue.nombre+' ya existe';
            newErr.status = 400;
            next(newErr)
         }else{
            next(err)
         }

      }
   },

   async loginVerification(req, res, next){
      try {
         const user = req.body;
         const userCoincidences = await User.find({"nombre": user.nombre});

         if(userCoincidences == false){
            return res.status(404).send({message: {detail:"Usuario no encontrado"}});
         }
         const realUserPassword = userCoincidences[0].clave;
         bcrypt.compare(user.clave, realUserPassword, (err, isMatch) => {
            if (err) {
              return next(err);
            }
      
            if (!isMatch) {
              return res.status(404).send({ message: {detail:"Contraseña incorrecta"} });
            }
            res.status(200).send({ data: userCoincidences[0]});

         });

      } catch (err) {
         next(err)
      }
   }

}