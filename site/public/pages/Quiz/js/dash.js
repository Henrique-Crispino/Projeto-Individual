fetch("/racas/qtd-racas", {
  method: "GET",
})
  .then(function (resposta) {
    resposta.json().then((racas) => {
      criar_g_raca(racas);
    });
  })
  .catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

function criar_g_raca(racas) {
  var qtd = [];
  var nome = [];

  for (var i = 0; i < racas.length; i++) {
    qtd.push(racas[i].quantidade);
    nome.push(racas[i].nome);
  }

  const g_preferido = document.getElementById("indice_raças");

  var raca_grafico = new Chart(g_preferido, {
    type: "bar",
    data: {
      labels: nome,
      datasets: [
        {
          label: "Usuários",
          data: qtd,
          backgroundColor: ["white"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "white", // Cor do texto da legenda
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "white", // Cor da fonte para o eixo x
          },
        },
        y: {
          ticks: {
            color: "white", // Cor da fonte para o eixo y
          },
        },
      },
    },
  });
  console.log("Quantidade: " + qtd);
}

function grafico_facil(fkUsuario) {
  fetch(`/quiz/pontuacao-facil/${fkUsuario}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((pontuacaoFacil) => {
        criar_g_facil(pontuacaoFacil);
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function criar_g_facil(pontuacaoFacil) {
  
  var qtd = [];
  var total_facil = Number(pontuacaoFacil[0].acertosFaceis) + Number(pontuacaoFacil[0].errosFaceis);

  span_facil.innerHTML = total_facil;
  qtd.push(pontuacaoFacil[0].acertosFaceis);
  qtd.push(pontuacaoFacil[0].errosFaceis);

  const g_facil = document.getElementById("indice_facil");

  new Chart(g_facil, {
    type: "doughnut",
    data: {
      labels: ["Acertos", "Erros"],
      datasets: [
        {
          label: "Respostas",
          data: qtd,
          backgroundColor: ["green", "red"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    },
  });
}

function grafico_medio(fkUsuario) {
  fetch(`/quiz/pontuacao-medio/${fkUsuario}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((pontuacaoMedio) => {
        criar_g_medio(pontuacaoMedio);
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function criar_g_medio(pontuacaoMedio) {
  var qtd = [];
  var total_medio = Number(pontuacaoMedio[0].acertosMedios) + Number(pontuacaoMedio[0].errosMedios) 

  span_medio.innerHTML = total_medio
  qtd.push(pontuacaoMedio[0].acertosMedios);
  qtd.push(pontuacaoMedio[0].errosMedios);

  const g_medio = document.getElementById("indice_medio");

  new Chart(g_medio, {
    type: "doughnut",
    data: {
      labels: ["Acertos", "Erros"],
      datasets: [
        {
          label: "Respostas",
          data: qtd,
          backgroundColor: ["green", "red"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    },
  });
}

function grafico_dificil(fkUsuario) {
  fetch(`/quiz/pontuacao-dificil/${fkUsuario}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((pontuacaoDificil) => {
        criar_g_dificil(pontuacaoDificil);
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function criar_g_dificil(pontuacaoDificil) {
  var qtd = [];
  var total_dificil = Number(pontuacaoDificil[0].acertosDificeis) + Number(pontuacaoDificil[0].errosDificeis);

  span_dificil.innerHTML = total_dificil
  qtd.push(pontuacaoDificil[0].acertosDificeis);
  qtd.push(pontuacaoDificil[0].errosDificeis);

  const g_dificil = document.getElementById("indice_dificil");

  new Chart(g_dificil, {
    type: "doughnut",
    data: {
      labels: ["Acertos", "Erros"],
      datasets: [
        {
          label: "Respostas",
          data: qtd,
          backgroundColor: ["green", "red"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    },
  });
}

function grafico_geral(fkUsuario) {
  fetch(`/quiz/pontuacao-geral/${fkUsuario}`, {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((pontuacaoGeral) => {
        criar_g_geral(pontuacaoGeral);
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function criar_g_geral(pontuacaoGeral) {
  var qtd = [];
  var total_geral = Number(pontuacaoGeral[0].totalAcertos) + Number(pontuacaoGeral[0].totalErros)

  span_geral.innerHTML = total_geral;
  qtd.push(pontuacaoGeral[0].totalAcertos);
  qtd.push(pontuacaoGeral[0].totalErros);

  span_total_partidas.innerHTML = (Number(qtd[0]) + Number(qtd[1])) / 10;

  const g_geral = document.getElementById("indice_geral");

  new Chart(g_geral, {
    type: "doughnut",
    data: {
      labels: ["Acertos", "Erros"],
      datasets: [
        {
          label: "Respostas",
          data: qtd,
          backgroundColor: ["green", "red"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
    },
  });
}