/* 
A linguagem JavaScript não tem: 
    1 - Classe
    2 - Construtor
    3 - Método
    4 - Módulo

Mas tem FUNÇÃO!
As funcções são responsáveis pelo pode da linguagem JavaScript.
Por meio dass funções da para silumar Classes, Métodos, Construtores e Módulos.

Uma função é um objeto que contém um bloco de código executável. Esse bloco é ISOLADO,
não sendo possível acessá-lo externamente. Função é o tipo de estrutura que vai conferir encapsulamento 
a línguagem JavaScript. 

Na linguagem JavaScript, as funções são de PRIMEIRA CLASSE. A função de PRIMEIRA CLASSE é aquela que pode 
ser ATRUÍDA A UMA VARIÁVEL, PASSADO COMO PARÂMETRO ou ser RETORNADA DE UMA OUTRA FUNÇÃO. 

CRIANDO FUNÇÕES...

1) FUNCTION DECLARATION */
    function soma(a, b) {
        return a + b; 
    }
/*

2) FUNCTION EXPRESSION */
    var soma = function(a, b) {
        return a + b;
    }
    
/*    
    
3) NAMED FUNCTION EXPRESSION */
    var soma = function soma(a, b) {
        return a + b;
        }
        
/*    
    
Obs: O nome da função pode ser útil pois aparece no stack trace, listas de breakpoints e demais ferramentas 
de debbuging. 

Qual é a diferença entre function declaration e expression?

Function declaration: A função é carregada antes do código ser interpretado;
Function Expression: A função é carregada durante a interpretação do código;

...

Invocando funções

Uma função pode ser invocada de 4 formas. 

* Invocando uma função diretamente no escopo global:
* Por meio de Objeto;
* Por call() e Apply();
* Por meio do operador New();

Passando uma função como parâmetro. Quando se passa função por parâmetro, chama-se lambda.
Isso confere um poder incrível de reuso; 
*/      
    
var produto = {nome: 'Sapato', preco: 150};

var formulaImpostoA = function(preco) {
    return preco * 0.1;
}

var formulaImpostoB = function(preco) {
    return preco * 0.2;
}

var calcularPreco = function(produto, formulaImposto) {
    return produto.preco + formulaImposto(produto.preco);
}

calcularPreco(produto, formulaImpostoA);
calcularPreco(produto, formulaImpostoB);
        
/*
Retornando uma função 
*/

var helloWord = function() {
    return function() {
        return 'Hello word!';
    }  
};
    
console.log(helloWord); // retorna uma função
console.log(helloWord()); // retorna uma função
console.log(helloWord()()); // retorna a string 'Hello word'

/* 
Invocando uma função por meio de um Objeto
    
...

Existem métodos em JavaScript?
Não, mas pode-se simular a existência deles. 

* Método é um objeto, sendo uma coleção dinâmica de chaves e valores. Nada mais que isso. 
Se esse valor for uma função, pode ser invocada, dando a impressão que eu tenho um método. 

Usando uma função como método declarado, declarado dentro do objeto

Obs sobre o recuros THIS.
- A função passa a ter this se estiver sendo executada por meio de um objeto;
- O this depende de como a função vai ser chamada;
- O this depende do contexto;
*/

var pessoa = {
    nome: 'João',
    idade: 20,
    getIdade: function() {
        return this.idade;
    }
};

pessoa.getIdade();

/* Externalizando... */
var getIdade =  function() {
    return this.idade;
};

var pessoa = {
    nome: 'João',
    idade: 20,
    // Não coloca o parêntese, pois vai incovar a função, retornando undefined.
    // getIdade é uma referência para um objeto que é uma função.
    getIdade: getIdade
};
    
/* 
Invocando uma função com Call() e Apply() 

Toda função possui os métodos call() e apply(). Eles são utilizados para indicar em qual escopo
uma função deve ser executada. 

A diferença é basicamente a forma como é utilizado:

função.call(escopo, parametro1, parametro2);
função.apply(escopo, parametros);

Invocando a função com o call e apply

Obs: obrigatoriamente, o parametro de apply é um array
*/

var getIdade =  function(extra) {
    // toda função tem seus argumentos acessíveis. 
    // ARGUMENTS É UMA VARIÁVEL IMPLICITA DA FUNÇÃO.
    console.log(arguments);
    
    return this.idade + extra;
};

var pessoa = {
    nome: 'João',
    idade: 20,
    // Não coloca o parêntese, pois vai incovar a função, retornando undefined.
    // getIdade é uma referência para um objeto que é uma função.
    getIdade: getIdade
};

getIdade(); // undefined


console.log(pessoa.getIdade(2)); 

// Quando se passa parametros a mais, os mesmos são ignorados. Mas pode-se acessa-los por meio do
// ARGUMENTS.
console.log(getIdade.call(pessoa, 2, 1, 3));
console.log(getIdade.apply(pessoa, [2, 1, 3]));


/* 
    Invocando função por meio do operador NEW. O operador new serve para instânciar classes, no caso, funções.
    
    Criando objetos indiretamente 
*/

var pedro = {nome: 'Pedro', idade: 20};


/* Funções construtoras vs. Funções Fábricas */

// Função Fábrica: 
var criarPessoa = function(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

console.log(criarPessoa('Pedro', 20));

// Funções Construtoras:
// Obs: As funções construtoras devem começar com letra maiúsculas, para lembrar de usar o operador new.


var Pessoa = function(nome, idade) {
    // This referência ao objeto que está sendo criado.
    this.nome = nome;
    this.idade = idade;
};

// Conceito fundamental: 
// O Operador new cria o objeto, passa os parâmetros 
console.log(new Pessoa('Pedro', 20));
console.log(new Pessoa('Maria', 30));

// Decompor a operação de new, para saber o que acontece por trás dos panos.

// Objeto vázio
// Quando se invoca uma função por meio do operador new, no fundo ela está executando a operação a baixo.
var pedro = {};
Pessoa.call(pedro, 'Pedro', 20);
console.log(pedro);

var maria = {};
Pessoa.call(maria, 'Pedro', 20);
console.log(maria);

// Conselho!!!
// Nunca esquecer de utilizar o operador new quando utilizar funções construtoras.

// Aviso: quando você esquecer de utilizar o operador new quando invocar, você vai estar chamando uma função diretamente
// e sobre-escrevendo ou definindo uma unidade no escopo global. Já que o this vai se referênciar a ele (objeto criado).

/*
    Closures = Fechamento
*/

// Criando uma função simples
var helloWord = function() {
    return 'Hello word';  
};

helloWord; // Function
helloWord(); // 'Hello word!'

// Retornando uma função dentro de outra função
var helloWord = function() {
    var message 'Hello word';  
    // Inner function.
    // Pela lógica, message é para ser undefined;
    // Graças ao sistema closures, matem-se a referência de message;
    return function() {
        return message;
    }
};    

var fnHelloWord = helloWord();
console.log(fnHelloWord());

