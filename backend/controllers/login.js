const User = require("../models/usuarios")
module.exports = {
   async register(req, res, next){
      try {         
         const user = req.body;
         await User.create(user);
         res.status(200).send({ message: "Usuario registrado exitosamente"});
      } catch (err) {
         next(err)
      }
   },

   async loginVerification(req, res, next){
      try {
         const user = req.body;
         const userCoincidences = await User.find({"nombre": user.nombre});
         if(!userCoincidences){
            return res.status(404).send({message: "Usuario no encontrado"});
         }
         const realUserPassword = userCoincidences[0].clave;
         if(realUserPassword != user.clave){
            return res.status(404).send({message: "Contraseña incorrecta"});
         }

         res.status(200).send({ data: userCoincidences[0]});
      } catch (err) {
         next(err)
      }
   }

}