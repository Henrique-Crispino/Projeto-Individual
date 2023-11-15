var racaModel = require("../models/racaModel");

function BuscarQtdRacas(req, res) {

  racaModel.BuscarQtdRacas().then((resultado) => {
    if (resultado.length > 0) {
      console.log("RESULTADO: " + JSON.stringify(resultado))
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as racas: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  BuscarQtdRacas
}