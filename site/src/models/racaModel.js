var database = require("../database/config");

function BuscarQtdRacas() {

  instrucaoSql = `SELECT r.nome, COUNT(u.idUsuario) as quantidade
  FROM usuario u
  JOIN raca r ON u.fkRaca = r.idRaca
  GROUP BY r.nome, u.fkRaca
  order by quantidade desc;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  BuscarQtdRacas
}
