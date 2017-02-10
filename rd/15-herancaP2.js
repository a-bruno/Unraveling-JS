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

	Qual é a diferença entre [[Prototype]] e prototype?

	O primeiro prototype é abstrato, é o conceito de protótipo.

	O segundo prototype é uma propriedade que só existe em funções. Conceito de herança por funções
	construtoras.
*/

var Homem = function(nome, idade) {
	this.nome = nome;
	this.idade = idade;
};

Homem.prototype.sexo = 'masculino';

var joao = new Homem('João', 20);
console.log(joao);
console.log(joao.sexo); // masculino

var pedro = {};

Homem.apply(pedro, ['Pedro', 18]);

console.log(pedro);
console.log(pedro.sexo); // undefined

// Chave do castelo do prototype
// Mesmo ação do new inplicitamente.
pedro.__proto__ = Homem.prototype;

console.log(pedro.sexo); // masculino

// Sacada interessante
Homem.prototype.sexo = 'feminino';

console.log(joao.sexo); // feminino
console.log(pedro.sexo); // feminino

/* 
	Dando os objetos criados com new são por base de função construtora
	Então pode manipular, transformar objetos que já estejam sendo usados no sistema
	e de uma só vez afetar a todos eles. Já que todos são construídos de uma vez só.
*/

// Definindo uma funçnão new para simular o operador new na função construtora.
var _new = function(f) {
	//console.log(arguments); // { '0': [Function], '1': 'Pedro', '2': 18}

	// Arrancar as informações do arguments
	//console.log(Array.prototype.slice.call(arguments, 1)); // ['1': 'Pedro', 2: 18]

	var obj = {};

	// O protótipo deste objeto é igual a função que estou recebendo.
	// f = Homem
	obj.__proto__ = f.prototype;
	f.apply(obj, Array.prototype.slice.call(arguments, 1));

	return obj;
};

var pedro = _new(Homem, 'Pedro', 18);

console.log(pedro);
console.log(pedro.sexo);

// Por dentro do new
var _new = function(f) {
	var res = {};

	if (f.prototype !== null) {
		res.__proto__ = f.prototype;
	}

	var ret = f.apply(res, Array.prototype.slice.call(arguments, 1));
	if((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
		return ret;
	}

	return res;
};

