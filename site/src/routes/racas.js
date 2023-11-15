var express = require("express");
var router = express.Router();

var racaController = require("../controllers/racaController");

router.get("/qtd-racas", function (req, res) {
  racaController.BuscarQtdRacas(req, res);
});

module.exports = router;