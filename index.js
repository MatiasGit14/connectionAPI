const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const controller = require("./controller/controller");
const { server } = require("./ports/port");

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  controller.getSession;
});

app.listen(server.port, () =>
  console.log("Servidor corriendo en el puerto: " + server.port)
);
