const g_preferido = document.getElementById("indice_raças");

new Chart(g_preferido, {
  type: "bar",
  data: {
    labels: [
      "Frísio",
      "Puro-Sangue Inglês",
      "Quarto de Milha",
      "Andaluz",
      "Warmblood Holandês",
      "Percheron",
      "Puro-Sangue Árabe",
      "Paint Horse",
      "Appaloosa",
      "Belga",
    ],
    datasets: [
      {
        label: "Votos",
        data: [5, 1, 3, 4, 5, 8, 7, 8, 6, 10, 2],
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

const g_facil = document.getElementById("indice_facil");

new Chart(g_facil, {
  type: "doughnut",
  data: {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        label: "Respostas",
        data: [4, 1],
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

const g_medio = document.getElementById("indice_medio");

new Chart(g_medio, {
  type: "doughnut",
  data: {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        label: "Respostas",
        data: [4, 0, 0],
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

const g_dificil = document.getElementById("indice_dificil");

new Chart(indice_dificil, {
  type: "doughnut",
  data: {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        label: "Respostas",
        data: [1, 4],
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

const g_geral = document.getElementById("indice_geral");

new Chart(indice_geral, {
  type: "doughnut",
  data: {
    labels: ["Acertos", "Erros"],
    datasets: [
      {
        label: "Respostas",
        data: [30, 8],
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
