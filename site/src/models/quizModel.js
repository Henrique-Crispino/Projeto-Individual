var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from tentativas where id = '${id}'`;

  return database.executar(query);
}

function puxarDadosFacil(fkUsuario) {
  var query = `
  select sum(t.acertos_facil) as acertosFaceis, sum(t.erros_facil) as errosFaceis 
  from tentativas t
  join usuario u on t.fkUsuario = u.idUsuario
  where u.idUsuario = ${fkUsuario};`;

  return database.executar(query);
}

function puxarDadosMedio(fkUsuario) {
  var query = `
  select sum(t.acertos_medio) as acertosMedios, sum(t.erros_medio) as errosMedios 
  from tentativas t
  join usuario u on t.fkUsuario = u.idUsuario
  where u.idUsuario = ${fkUsuario};`;

  return database.executar(query);
}

function puxarDadosDificil(fkUsuario) {
  var query = `
  select sum(t.acertos_dificil) as acertosDificeis, sum(t.erros_dificil) as errosDificeis 
  from tentativas t
  join usuario u on t.fkUsuario = u.idUsuario
  where u.idUsuario = ${fkUsuario};`;

  return database.executar(query);
}

function puxarDadosGeral(fkUsuario) {
  var query = `
  select sum(t.acertos_geral) as totalAcertos, sum(t.erros_geral) as totalErros
  from tentativas t
  join usuario u on t.fkUsuario = u.idUsuario
  where u.idUsuario = ${fkUsuario};`;

  return database.executar(query);
}

function cadastrar(acertos_faceis, erros_faceis, acertos_medios, erros_medios, acertos_dificeis, erros_dificeis, respostas_corretas, respostas_incorretas, fkUsuario) {
  var query = `insert into tentativas (acertos_facil, erros_facil, acertos_medio, erros_medio, acertos_dificil, erros_dificil, acertos_geral, erros_geral, fkUsuario, fkQuiz) values ('${acertos_faceis}', '${erros_faceis}', '${acertos_medios}', '${erros_medios}', '${acertos_dificeis}', '${erros_dificeis}', '${respostas_corretas}', '${respostas_incorretas}', '${fkUsuario}', 1)`;

  return database.executar(query);
}

module.exports = {buscarPorId, cadastrar, puxarDadosFacil, puxarDadosMedio, puxarDadosDificil, puxarDadosGeral};
