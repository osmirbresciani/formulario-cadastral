var cpf = document.getElementById("cpf")
var senha = document.getElementById("senha");
var confirmacao_senha = document.getElementById("confirmacao_senha");


function validateSenha() {
    if (senha.value != confirmacao_senha.value) {
        confirmacao_senha.setCustomValidity("Senhas diferentes!");
    } else {
        confirmacao_senha.setCustomValidity('');
    }
}

senha.onchange = validateSenha;
confirmacao_senha.onkeyup = validateSenha;


function validateCPF() {
    var strCPF = cpf.value.replace(/\D/g, "");
    var soma;
    var resto;
    soma = 0;
    if (strCPF == "00000000000") {
        cpf.setCustomValidity("CPF inválido");
    }
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(strCPF.substring(9, 10))) {
        cpf.setCustomValidity("CPF inválido");
    }
    soma = 0;
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(strCPF.substring(10, 11))) {
        cpf.setCustomValidity("CPF inválido");
    }
}

cpf.onchange = validateCPF;

function successValidation() {
    alert('Cadastro Realizado com sucesso');
}