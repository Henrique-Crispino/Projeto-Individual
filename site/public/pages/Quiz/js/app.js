var num_questao = document.querySelector(".num_questao");
var texto_questao = document.querySelector(".texto_questao");
var container_opcoes = document.querySelector(".container_opcoes");
var container_indicador_respostas = document.querySelector(
  ".indicador_respostas"
);
var container_casa = document.querySelector(".container_casa");
var container_quiz = document.querySelector(".container_quiz");
var container_resultado = document.querySelector(".container_resultado");
var container_dash = document.querySelector(".container_dash");
var container_racas = document.querySelector(".container_racas")

var limite_de_questoes = 10;
var contador_questoes = 0;
var questao_atual;
var dificuldade;
var questoes_disponiveis = [];
var opcoes_disponiveis = [];
var respostas_corretas = 0;
var respostas_incorretas = 0;
var tentativa = 0;

//Variáveis Globais de acertos e erros por dificuldade e geral
var acertos_faceis = 0;
var acertos_medios = 0;
var acertos_dificeis = 0;
var erros_faceis = 0;
var erros_medios = 0;
var erros_dificeis = 0;

function set_questoes_disponiveis() {
  var total_questoes = quiz.length;

  for (var i = 0; i < total_questoes; i++) {
    questoes_disponiveis.push(quiz[i]);
  }
}

function nova_questao() {
  var indice_questoes =
    questoes_disponiveis[
      Math.floor(Math.random() * questoes_disponiveis.length)
    ];
  questao_atual = indice_questoes;
  texto_questao.innerHTML = questao_atual.q;
  dificuldade = questao_atual.dificuldade;

  num_questao.innerHTML = `Questão ${
    contador_questoes + 1
  } de ${limite_de_questoes}<br>Dificuldade: ${dificuldade}`;

  var index1 = questoes_disponiveis.indexOf(indice_questoes);
  questoes_disponiveis.splice(index1, 1);

  var opcao_len = questao_atual.opcoes.length;

  for (var i = 0; i < opcao_len; i++) {
    opcoes_disponiveis.push(i);
  }

  container_opcoes.innerHTML = "";
  var animation_delay = 0.2;

  for (var i = 0; i < opcao_len; i++) {
    var optonIndex =
      opcoes_disponiveis[Math.floor(Math.random() * opcoes_disponiveis.length)];

    var index2 = opcoes_disponiveis.indexOf(optonIndex);
    opcoes_disponiveis.splice(index2, 1);

    var opcao = document.createElement("div");
    opcao.innerHTML = questao_atual.opcoes[optonIndex];
    opcao.id = optonIndex;
    opcao.style.animation_delay = animation_delay + "s";
    animation_delay = animation_delay + 0.2;
    opcao.className = "opcao";
    container_opcoes.appendChild(opcao);
    opcao.setAttribute("onclick", "pegar_resultado(this)");
  }
  contador_questoes++;
}

function pegar_resultado(element) {
  var id = Number(element.id);

  if (id === questao_atual.resposta) {
    element.classList.add("correto");
    atualizar_indicador_resposta("correto");
    respostas_corretas++;
    if (dificuldade === "Fácil") {
      acertos_faceis++;
    } else if (dificuldade === "Média") {
      acertos_medios++;
    } else if (dificuldade === "Díficil") {
      acertos_dificeis++;
    }
  } else {
    element.classList.add("incorreto");
    atualizar_indicador_resposta("incorreto");
    respostas_incorretas++;
    if (dificuldade === "Fácil") {
      erros_faceis++;
    } else if (dificuldade === "Média") {
      erros_medios++;
    } else if (dificuldade === "Díficil") {
      erros_dificeis++;
    }
  }

  var opcao_len = container_opcoes.children.length;
  for (let i = 0; i < opcao_len; i++) {
    if (Number(container_opcoes.children[i].id) === questao_atual.resposta) {
      container_opcoes.children[i].classList.add("correto");
    }
  }
  opcoes_nao_clicaveis();
}

function opcoes_nao_clicaveis() {
  var opcao_len = container_opcoes.children.length;

  for (var i = 0; i < opcao_len; i++) {
    container_opcoes.children[i].classList.add("ja_respondido");
  }
}

function indicador_respostas() {
  container_indicador_respostas.innerHTML = "";
  var total_questoes = limite_de_questoes;

  for (var i = 0; i < total_questoes; i++) {
    var indicator = document.createElement("div");
    container_indicador_respostas.appendChild(indicator);
  }
}

function atualizar_indicador_resposta(markType) {
  container_indicador_respostas.children[contador_questoes - 1].classList.add(
    markType
  );
}

function proxima() {
  var opcoesRespondidas = document.querySelectorAll(".opcao.ja_respondido");
  if (opcoesRespondidas.length === container_opcoes.children.length) {
    if (contador_questoes === limite_de_questoes) {
      fim_quiz();
    } else {
      nova_questao();
    }
  } else {
    alert("Por favor, responda à questão antes de passar para a próxima.");
  }
}

function fim_quiz() {
  tentativa++;
  container_quiz.classList.add("hide");
  container_resultado.classList.remove("hide");
  resultado_quiz();
  fetch("/quiz/cadastrar/tentativa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      acertos_faceisServer: acertos_faceis,
      erros_faceisServer: erros_faceis,
      acertos_mediosServer: acertos_medios,
      erros_mediosServer: erros_medios,
      acertos_dificeisServer: acertos_dificeis,
      erros_dificeisServer: erros_dificeis,
      respostas_corretasServer: respostas_corretas,
      respostas_incorretasServer: respostas_incorretas,
      fkUsuarioServer: sessionStorage.ID_USUARIO 
    }),
  })
    .then(function (resposta) {

      console.log("resposta: ", resposta);
      if (resposta.ok) {
        console.log("Passou pelo Script do front")
      } else {
        throw "Houve um erro ao gravar a pontuação da partida no banco!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
  return false;
}

function resultado_quiz() {
  var porcentagem = (respostas_corretas / limite_de_questoes) * 100;
  container_resultado.querySelector(".total_questoes").innerHTML =
    limite_de_questoes;
  container_resultado.querySelector(".total_corretas").innerHTML =
    respostas_corretas;
  container_resultado.querySelector(".total_erradas").innerHTML =
    respostas_incorretas;
  container_resultado.querySelector(".porcentagem").innerHTML =
    porcentagem.toFixed(2) + "%";
  container_resultado.querySelector(".total_score").innerHTML =
    respostas_corretas + " / " + limite_de_questoes;
}

function resetar_quiz() {
  contador_questoes = 0;
  respostas_corretas = 0;
  respostas_incorretas = 0;
  tentativa = 0;
  acertos_faceis = 0;
  acertos_medios = 0;
  acertos_dificeis = 0;
  erros_faceis = 0;
  erros_medios = 0;
  erros_dificeis = 0;
  questoes_disponiveis = [];
}

function tentar_novamente() {
  container_resultado.classList.add("hide");
  container_quiz.classList.remove("hide");
  resetar_quiz();
  iniciar_quiz();
}

function volte_inicio() {
  container_resultado.classList.add("hide");
  container_dash.classList.add("hide");
  container_casa.classList.remove("hide");
  resetar_quiz();
}

function iniciar_quiz() {
  container_casa.classList.add("hide");
  container_quiz.classList.remove("hide");
  set_questoes_disponiveis();
  nova_questao();
  indicador_respostas();
}

function ver_dash() {
  container_casa.classList.add("hide");
  container_resultado.classList.add("hide");
  container_dash.classList.remove("hide");
  grafico_facil(sessionStorage.ID_USUARIO);
  grafico_medio(sessionStorage.ID_USUARIO);
  grafico_dificil(sessionStorage.ID_USUARIO);
  grafico_geral(sessionStorage.ID_USUARIO);
}

function desaparecer_pref () {
  container_racas.classList.add("hide");
  container_casa.classList.remove("hide");
}

window.onload = function () {
  container_casa.querySelector(".total_questoes").innerHTML =
    limite_de_questoes;
    setTimeout(desaparecer_pref, 5000)
};
