/*CARROSEL*/

document.addEventListener("DOMContentLoaded", function () {
  var contador_carrossel = 1;
  var intervalo_carrossel;

  const radio_ids = ["radio_1", "radio_2", "radio_3", "radio_4"];
  document.getElementById(radio_ids[0]).checked = true;

  function iniciar_carrossel() {
    intervalo_carrossel = setInterval(function () {
      proxima_img_carrossel();
    }, 10000);
  }

  iniciar_carrossel();

  function selecionar_imagem(indice) {
    clearInterval(intervalo_carrossel);
    contador_carrossel = indice;
    document.getElementById(radio_ids[indice - 1]).checked = true;
    iniciar_carrossel();
  }

  radio_ids.forEach(function (radio_id, indice) {
    document.getElementById(radio_id).addEventListener("click", function () {
      selecionar_imagem(indice + 1);
    });
  });

  function proxima_img_carrossel() {
    contador_carrossel++;
    if (contador_carrossel > radio_ids.length) {
      contador_carrossel = 1;
    }
    document.getElementById(radio_ids[contador_carrossel - 1]).checked = true;
  }
});

/*FIM CARROSSEL*/

/*CITAÇÕES*/

function esconder_citacoes(image) {
  var citacoes = image.parentNode.querySelector(".citacoes");
  citacoes.style.display = "none";
}

function mostrar_citacoes(image) {
  var citacoes = image.parentNode.querySelector(".citacoes");
  citacoes.style.display = "block";
}

/*FIM CITAÇÕES*/
