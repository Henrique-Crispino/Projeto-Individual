var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar/tentativa", function (req, res) {
    quizController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    quizController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  quizController.buscarPorId(req, res);
});

router.get("/pontuacao-facil/:fkUsuario", function (req, res) {
  quizController.puxarDadosFacil(req, res);
});

router.get("/pontuacao-medio/:fkUsuario", function (req, res) {
  quizController.puxarDadosMedio(req, res);
});

router.get("/pontuacao-dificil/:fkUsuario", function (req, res) {
  quizController.puxarDadosDificil(req, res);
});

router.get("/pontuacao-geral/:fkUsuario", function (req, res) {
  quizController.puxarDadosGeral(req, res);
});

module.exports = router;