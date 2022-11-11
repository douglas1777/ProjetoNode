const express = require("express");
const { appendFile } = require("fs");
const app = express();
app.get("/home", (req, res) => {
  res.contentType("aplication/html");
  res.status(200).send("<h1>Hello World</h1>");
});
app.get("/users", (req, res) => {
  const users = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];
  res.status(200).json(users);
});
const port = 8080;
app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));
