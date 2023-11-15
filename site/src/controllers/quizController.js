var quizModel = require("../models/quizModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  quizModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function puxarDadosFacil(req, res) {
  var fkUsuario = req.params.fkUsuario;
  quizModel.puxarDadosFacil(fkUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function puxarDadosMedio(req, res) {
  var fkUsuario = req.params.fkUsuario;
  quizModel.puxarDadosMedio(fkUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function puxarDadosDificil(req, res) {
  var fkUsuario = req.params.fkUsuario;
  quizModel.puxarDadosDificil(fkUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function puxarDadosGeral(req, res) {
  var fkUsuario = req.params.fkUsuario;
  quizModel.puxarDadosGeral(fkUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  quizModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var acertos_faceis = req.body.acertos_faceisServer;
  var erros_faceis = req.body.erros_faceisServer;
  var acertos_medios = req.body.acertos_mediosServer;
  var erros_medios = req.body.erros_mediosServer;
  var acertos_dificeis = req.body.acertos_dificeisServer;
  var erros_dificeis = req.body.erros_dificeisServer;
  var respostas_corretas = req.body.respostas_corretasServer;
  var respostas_incorretas = req.body.respostas_incorretasServer;
  var fkUsuario = req.body.fkUsuarioServer;

  quizModel
    .cadastrar(
      acertos_faceis,
      erros_faceis,
      acertos_medios,
      erros_medios,
      acertos_dificeis,
      erros_dificeis,
      respostas_corretas,
      respostas_incorretas,
      fkUsuario
    )
    .then((resultado) => {
      res.status(201).json(resultado);
    });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  puxarDadosFacil,
  puxarDadosMedio,
  puxarDadosDificil,
  puxarDadosGeral,
};
