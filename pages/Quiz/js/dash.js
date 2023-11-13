const g_facil = document.getElementById("indice_facil");

new Chart(g_facil, {
  type: "doughnut",
  data: {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        label: "# of Votes",
        data: [4, 1],
        backgroundColor: ["green", "red"],
        borderWidth: 1,
      },
    ],
  },
});

const g_medio = document.getElementById("indice_medio");

new Chart(g_medio, {
  type: "doughnut",
  data: {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        label: "# of Votes",
        data: [4, 0, 0],
        backgroundColor: ["green", "red"],
        borderWidth: 1,
      },
    ],
  },
});

const g_dificil = document.getElementById("indice_dificil");

new Chart(indice_dificil, {
  type: "doughnut",
  data: {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        label: "# of Votes",
        data: [1, 4, 1],
        backgroundColor: ["green", "red"],
        borderWidth: 1,
      },
    ],
  },
});

const g_geral = document.getElementById("indice_geral");

new Chart(indice_geral, {
  type: "doughnut",
  data: {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 8],
        backgroundColor: ["green", "red"],
        borderWidth: 1,
      },
    ],
  },
});
