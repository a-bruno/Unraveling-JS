/*
	Cuidado com operadores de comparação igual == e diferente.
	O comportamento destes operadores pode produzir resultados 
	inesperados por conta da coersão de tipos.
*/

0 == '' // true

0 == '0' // true

false == undefined // false

false == null // false

null == undefined // true

1 == true // true

0 == false // true

0 == '\n' // true

// Que mágica é essa chamada de coersão de tipos?

/* 
	Quando se faz comparação operandos que tem tipos diferentes,
	ocorre a conversão de um dos dois operandos.
*/

10 == '10'

/*
	Se x é Number e y é String, a comparação será feita da seguinte forma:
	x == ToNumber(y). Como o resultado de ToNumber('10') é 10, o retorno é true.
*/

null == undefined

/*
	Se x é null e y é undefined, o retorno é true.
*/

10 = new Number(10) // true

var nota = new Number(10);

console.log(nota); // {}

console.log(nota.valueOf()); // 10

10 == nota // true

var x = {};

10 == x; // false

x.valueOf() = function() {
	return 10;
}

console.log(x); // valueOf: [Function]

10 == x; // true

/*
	Neste caso vai ocorrer uma operação abstrata, quem não podem ser acessadas
	diretamente. São executadas pela própria linguagem.
	Se x é Number e y é Object, a comparação será feita da seguinte forma:
	x == ToPrimitive(y), que utiliza a operação valueOf, ou toString se 
	não existir valueOf, do objeto para compará-lo com um Number. O retorno
	da operação valeuOf nesse caso é 10, sendo assim o retorno é true.
*/

// Utilize os operadores muito igual === e muito diferente !==

// Mas não seja assim tão radical, a coersão de tipos pode te ajudar.

// Como fazer para comparar dois objetos em JavaScript?
var x = {};

var y = {};

x == y; // false
x === y; // false

// false por que os objetos não tem a mesma referência.
var z = x;

x == z // true

x === z // true

/* 
	Os operadores lógicos OU || e E && também escondem seus segredos. 
	Além de ser curto-circuito, o retorno é um de seus operandos.
*/

0 || 2 é 2 // 2

1 || 2 é 1 // 1

1 && 2 é 2 // 2

0 && 2 é 0 // 0

if(10) {
	console.log('Ok') // Ok
}

/*
	Quando avaliados situações boleanas, os tipos assumem valores truthy ou falsy
	por meio da operação abstrata ToBooolean.
*/

!!0 // false

!!NaN //false

!!'' // false

!!false // falsse

!!null //false

!!undefined // false

// Todos os outros são truthy por padrão, incluindo {} e []

// Caso prático

var generateSerial = function(max) {
	return Math.floor(Math.random() * max);
};

generateSerial(1000); // 897
generateSerial(100); // 90
generateSerial(10); // 7
generateSerial(); // NaN

// Inicializando max
var generateSerial = function(max) {
	if(max === undefined || max === null || max === 0) {
		max = 100;
	}

	return Math.floor(Math.random() * max);
};

var generateSerial = function(max) {
	if(!max) {
		max = 100;
	}

	return Math.floor(Math.random() * max);
};

var generateSerial = function(max) {
	max = max || 100;

	return Math.floor(Math.random() * max);
};

// Tem muita diferença entre os operadores | e & e os || e &&?

1 || 2 // 1

// Operação bitwise
1 | 2 // 3

0001 = 1
0010 = 2
0011 = 3

// Explicação: 1 OU 0 é 1

1 && 2 // 2

// Operação bitwise 
1 & 2 // 0

0001 = 1
0010 = 2

// Explicação: 1 E 0 é 1

/*
	Existem ainda outros operadores para realizar operações bit a bit
	como negação ~, ou exclusivo ^ e deslocamento de bits >>, << e >>>

	Ainda existem outros operadores especiais...
*/ 

// typeof retorna o tipo do operando
typeof 10; // number
typeof '10'; // string
typeof true; // boolean

// new construi um objeto com base em uma função construtora

// instanceof verifica se o objeto possui a função construtora em sua 
// cadeia de protótipos.

var Pessoa = function(nome, idade) {
	this.nome = nome;
	this.idade = idade;
};

var pedro = new Pessoa('Pedro', 20);

console.log(pedro instanceof Pessoa);

// in verifica se a propriedade faz parte do objeto
console.log('nome' in pedro); // true

// delete apaga a propriedade de um objeto.
delete pedro.nome;

console.log('nome' in pedro); // false

// Operador ternário 
(expressão) ? true : false

var idade = 22;

(idade >= 18) ? 'Maior de idade' : 'Menor de idade';