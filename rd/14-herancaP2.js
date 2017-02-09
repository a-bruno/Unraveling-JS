// Criando objetos diretamente

// Criando objetos com uma função fábrica.

var criarHomem = function(nome, idade) {
	return {
		nome: nome,
		idade: idade,
		sexo: 'masculino'
	};
};

var joao = criarHomem('João', 20);
var pedro = criarHomem('Pedro', 18);

// O operador new cria um novo objeto por meio de uma função construtora.

// Usar letra maiúscula na criação de um função construtora.
var Homem = function(nome, idade) {
	this.nome = nome;
	this.idade = idade;
	this.sexo = 'masculino';
};

var joao = new Homem('João', 20);
var pedro = new Homem('Pedro', 18);

// Usando call e apply

var pedro = {};

// Passndo o obejto vázio pedro como contexto. A partir disso this = pedro.
Homem.call(pedro, 'Pedro', 18);
console.log(pedro);

Homem.apply(pedro, ['Pedro', 18]);

/* 
	Toda função tem um propriedade chamada prototype que é um objeto. 
	Isso serve para definir um protótipo comum há todos os objetos criados por um função construtora.
*/