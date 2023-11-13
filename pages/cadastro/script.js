function validar_cadastro () {
    var nome = input_nome.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var raca = select_raca.value

    if (nome.length < 5 || nome.length > 15) {
        alert("Erro 01 - Nome de usuário inválido! Por favor insira um nome de 5 a 15 caracteres para prosseguir.")
    } else if (email.includes("@") === false) {
        alert("Erro 02 - Email inválido! Insira um Email válido para prosseguir.")
    } else if (senha.length < 8) {
        alert("Erro 03 - Senha muito curta! insira uma senha maior que oito caracteres para prosseguir.")
    } else {
        alert("Tudo certo!")
    }
}