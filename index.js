const { Person } = require("./person");
const dotenv = require("dotenv");
dotenv.config();
const connecToDatabase = require("./src/database/connect");
connecToDatabase();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
//require("./modules/express");
//const person = new Person("Douglas");
