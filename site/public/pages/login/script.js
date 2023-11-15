function logar() {
  var email = input_email.value;
  var senha = input_senha.value;

  if (email == "" || senha == "") {
    alert("Erro 06 - Preencha todos os campos para prosseguir!");
  }

  console.log("FORM LOGIN: ", email);
  console.log("FORM SENHA: ", senha);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: email,
      senhaServer: senha,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        console.log("RESPOSTAAAAA " + resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log("nha " + JSON.stringify(json));
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.idUsuario;
          sessionStorage.FKRACA = json.fkRaca;

          setTimeout(function () {
            window.location = "../Quiz/quiz.html";
          }, 1000); // apenas para exibir o loading
        });
      } else {
        alert("Erro 07 - Email ou Senha inválidos");
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}
