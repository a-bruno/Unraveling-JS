/*
  Um objeto é uma coleção dinâmica de chaves e valores de qualquer tipo de dado.
  É possível adicionar ou remover propriedades a qualquer momento.
*/

/* Criando um objeto literal */
var pessoa = {};

/* Outra forma de criar objeto */
// Usado em funções construtoras;
var pessoa = new Object();

/* Outra forma de criar objeto */
// Usado em Herança, ou melhor falando, prototypes;
var pessoa = Object.create();

/* Adicionando propriedades ao objeto */
var pessoa = {
    nome: 'João',
    idade: 20,
    telefone: null,
    endereco: {
        logradouro: 'Av. Brasil',
        numero: 70,
        bairro: 'Centro'
    }
};

/* Atribuindo propriedade a um objeto */
pessoa.nome = 'João';

// Descobrir dinâmicamente o valor; Mais utilizado para acessar por for in e passar por parâmentro;
// Utilizado quando uma propriedade quebra a estrutura sintática dos indentificadores;

//Exemplo de quebra de identificador:
pessoa['cor dos olhos'];

// Se ler PESSOA NA NOME;
pessoa['nome'] = 'João';

pessoa.endereco.bairro = 'Centro';
pessoa['endereco']['bairro'] = 'Centro';

pessoa.endereco['bairro'] = 'Centro';

pessoa.telefone = null;
pessoa.peso = undefined;

// Acessor propriedade por for in;
// Ou introspecção no objeto pessoas;
for(var propriedade in pessoa) {
    console.log(propriedade + ' ' + pessoa[propriedade]);
}

/* Apagando propriedades de um objeto */
// Retorna true;
delete pessoa.telefone;

