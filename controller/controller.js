const connection = require("../db/dbConecttion");

const controller = {
  getHola: (req, res) => {
    res.json("Hola desde el server");
  },
};

module.exports = controller;
