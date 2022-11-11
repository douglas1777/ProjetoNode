const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Lucimary</h1>");
  }
  if (req.url === "/users") {
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
    res.writeHead(200, { "Content-Type": "aplication/json" });
    res.end(JSON.stringify(users));
  }
});
server.listen(port, () => console.log(`Rodando na porta ${port}`));
