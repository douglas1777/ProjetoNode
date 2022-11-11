const mongoose = require("mongoose");

const connecToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USARNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicadev.50csdfx.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao conectar com o banco de dados.",
          error
        );
      }
      return console.log("Conexão ao banco de dados realizada com sucesso");
    }
  );
};
module.exports = connecToDatabase;
