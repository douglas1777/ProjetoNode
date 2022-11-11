const fs = require("fs");
const path = require("path");

//criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("erro: ", error);
  }
  console.log("Pasta criada com sucesso!");
});
//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");
    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "Olá mundo!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo modificado com sucesso!");
      }
    );
    //ler um arquivo
    fs.readFile(
      path.join(__dirname, "/test", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
//modificar um arquivo
