'use strict'; // ativa o modo restrito
// Este modo faz com o javascript opera de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação.
/* consumo de API - https://viacep.com.br/ */


// função para limpar campos preenchidos

const limparFormulario = () => {
    document.getElementById ('cep').value = '';
    document.getElementById ('logradouro').value = '';
    document.getElementById ('bairro').value = '';
    document.getElementById ('complemento').value = '';
    document.getElementById ('localidade').value = '';
    document.getElementById ('uf').value = '';
}
