
function cadastrar() {
  var nome = input_nome.value;
  var email = input_email.value;
  var senha = input_senha.value;
  var fkRaca = select_raca.value;

  if (nome == "" || email == "" || senha == "") {
    alert("Erro 04 - Preencha todos os campos para prosseguir!")
    finalizarAguardar();
    return false;
  }

  if (nome.length < 5 || nome.length > 15) {
    alert(
      "Erro 01 - Nome de usuário inválido! Por favor insira um nome de 5 a 15 caracteres para prosseguir."
    );
  } else if (email.includes("@") === false) {
    alert("Erro 02 - Email inválido! Insira um Email válido para prosseguir.");
  } else if (senha.length < 8) {
    alert(
      "Erro 03 - Senha muito curta! insira uma senha maior que oito caracteres para prosseguir."
    );
  } else {
    alert("Cadastro concluído com sucesso! Redirecionando para página de Login");
  }

  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nome,
      emailServer: email,
      senhaServer: senha,
      fkRacaServer: fkRaca
    }),
  })
    .then(function (resposta) {

      console.log("resposta: ", resposta);
      if (resposta.ok) {
        console.log("Passou pelo Script do front")

        setTimeout(() => {
          window.location = "../login/login.html";
        }, "2000");
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
  return false;
}
