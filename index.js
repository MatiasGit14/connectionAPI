const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const controller = require("./controller/controller");
const { server } = require("./ports/port");
const { home } = require("./router/route");

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

app.get(home, controller.getHola);

app.listen(server.ports, () =>
  console.log("Servidor corriendo en el puerto: " + server.port)
);
