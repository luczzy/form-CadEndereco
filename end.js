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

// verifica se o cep é válido

const eNumero = (numero)=> /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.lenght == 8 && eNumero(cep);

// função para preencher formulários
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

// Função para consumo de API ViaCep
const pesquisarCep = async() =>{
    
}