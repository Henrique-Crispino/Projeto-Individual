/*CARROSEL*/

document.addEventListener("DOMContentLoaded", function () {
  var contador_carrossel = 1;
  const radio_ids = ["radio_1", "radio_2", "radio_3", "radio_4"];
  document.getElementById(radio_ids[0]).checked = true;

  setInterval(function () {
    proxima_img_carrossel();
  }, 10000);

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

function hideCitacoes(image) {
  var citacoes = image.parentNode.querySelector('.citacoes');
  citacoes.style.display = 'none';
}

function showCitacoes(image) {
  var citacoes = image.parentNode.querySelector('.citacoes');
  citacoes.style.display = 'block';
}