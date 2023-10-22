/*CARROSEL*/

document.addEventListener("DOMContentLoaded", function () {
  var contador_carrossel = 1;
  const radioIDs = ["radio_1", "radio_2", "radio_3", "radio_4"];
  document.getElementById(radioIDs[0]).checked = true;

  setInterval(function () {
    proxima_img_carrossel();
  }, 10000);

  function proxima_img_carrossel() {
    contador_carrossel++;
    if (contador_carrossel > radioIDs.length) {
      contador_carrossel = 1;
    }
    document.getElementById(radioIDs[contador_carrossel - 1]).checked = true;
  }
});

/*FIM CARROSSEL*/