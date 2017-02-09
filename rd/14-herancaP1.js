/* 
	Um objeto é uma coleção dinâmica de chaves e valores, 
	que podem ser de qualquer tipo, e um protótipo que pode ser
	um objeto ou null.

	Em javaScript, objetos herdam de outros objetos.

	Todo objeto em javaScript tem um protótipo.
*/

var joao = {
	nome: 'João',
	idade: 20,
	sexo: 'masculino'
};

var pedro = {
	nome: 'Pedro',
	idade: 18,
	sexo: 'masculino'
};

// Generalizando a propriedade sexo
var homem = {
	sexo: 'masculino'
};

// Fazer João e Pedro apontarem para homem. 
// Assim poderam herdar a propriedade sexo.

/*
	A propriedade __proto__ é uma referência para o protótipo 
	do objeto.
*/

// caso 1:
var joao = {
	nome: 'João',
	idade: 20,
};

console.log(joao); // { nome: 'João', idade: 20 }
console.log(joao.sexo); // undefined

var pedro = {
	nome: 'Pedro',
	idade: 18,
};

console.log(pedro); // { nome: 'Pedro', idade: 18 }
console.log(pedro.sexo); // undefined

// Testando o __proto__
var joao = {
	nome: 'João',
	idade: 20,
	__proto__: homem
};

console.log(joao.sexo); // masculino

var pedro = {
	nome: 'Pedro',
	idade: 18,
	__proto__: homem
};

console.log(pedro.sexo); // masculino

/* 
	CAUTION: __proto__ não é padrão e pode não funcionar em alguns
	interpretadores.

	Prefira a utilização de Object.getPrototypeOf e Object.setPrototypeOf 
	para interagir com o protótipo do objeto.
*/

// Testando...
var joao = {
	nome: 'João',
	idade: 20,
};

Object.setPrototypeOf(joao, homem);

console.log(joao.sexo); // masculino

// Também é possível utilizar Object.create para determinar o protótipo do objeto.

var joao = Object.create(homem);
joao.nome = 'João',
joao.idade = 20;

/* 
	Conceito de Shadowing. Se uma propriedade não existe no objeto, então ele busca no protótipo.
*/

var joao = {
	nome: 'João',
	idade: 20,
	sexo: 'feminino'
};

console.log(joao.sexo); // feminino

delete joao.sexo;

console.log(joao.sexo); // masculino

// Mostrando as propriedade do objeto
Object.keys(joao); // [ 'nome', 'idade' ]

// For in acesso também propriedades do protótipo.
for (var property in joao) {
	// Verificar se o objeto tem aquela determinada propriedade.
	if(!joao.hasOwnProperty(property)) continue;
	
	console.log(property); // nome, idade, sexo
}


