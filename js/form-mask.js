const applyMasks = {
    nome_completo(value) {
        capitalizePattern = /(\b[a-z](?!\s))/g
        lowerPattern = /(?!^)[\s\S]/g
        return value
            .replace(/d/g, '')
            .replace(lowerPattern, function (notFirstLetter) { return notFirstLetter.toLowerCase(); })
            .replace(capitalizePattern, function (firstLetter) { return firstLetter.toUpperCase(); })
    },
    data_nascimento(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{4})\d+?$/, '$1')
    },
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    },
    enderecoText(value) {
        capitalizePattern = /(\b[a-z](?!\s))/g
        lowerPattern = /(?!^)[\s\S]/g
        return value
            .replace(lowerPattern, function (notFirstLetter) { return notFirstLetter.toLowerCase(); })
            .replace(capitalizePattern, function (firstLetter) { return firstLetter.toUpperCase(); })
    },
    numero(value) {
        return value
            .replace(/\D/g, '')
    },
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },
    estadoPais(value) {
        capitalizePattern = /(\b[a-z](?!\s))/g
        lowerPattern = /(?!^)[\s\S]/g
        return value
            .replace(/[^A-Za-z\s]/g, '')
            .replace(lowerPattern, function (notFirstLetter) { return notFirstLetter.toLowerCase(); })
            .replace(capitalizePattern, function (firstLetter) { return firstLetter.toUpperCase(); })
    },
    telefone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/^0(\s+.*)?$/g, '')
            .replace(/(\d{0})(\d)/, '$1($2')
            .replace(/(\d{2})(\d)/, '$1)$2')
            .replace(/(\d{11})\d+?$/, '$1')
    }
}



document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = applyMasks[field](e.target.value)
    }, false)
})


