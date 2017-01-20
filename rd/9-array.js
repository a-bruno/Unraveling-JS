// Não existe arrays de verdade na linguagem JavaScript.
/* 
	Os Arrays são apenas objetos especiais que oferecem meios para acessar e manipular
	suas propriedades por meio de índices.
*/

// Criando um Array

	// Está é a forma mais simples de criar um Array.
	var carros = [];

	// Inserindo elementos no Array
	a[0] = 'Ka';

// Também é possível criar um Array inicializado com elementos

//
var carros = ['Ka','Corsa','Palio'];

// Criando um Array com new Array()	

// 
var carros = new Array();

// Existem duas possiblidades de inicializar os valores

// 1. Passar os valores de forma inline
var carros = new Array('Ka','Corsa','Palio');

// 2. Passar um tamanho. Ou seja, inicializar o Array com tamanho inicial.
var carros = new Array(10);

/* 
	Obs: Não se esqueça que o Array não tem tamanho fixo e o tamanho inicial é 
	apenas uma forma de inicializá-lo.
	Em JavaScript não existe Arrays fixos.
*/

/* 

	Array API

	1 concat - Junta dois arrays, retornando a cópia dos dois
	2 every - Retorna true se todos os elementos atenderem a função
	3 filter - Filtra o array com base em uma função de filtro
	4 forEach - Percorre o array, invocando uma função para cada elemento
	5 indexOf - Retorna o array, invocando uma função para cada elemento
	6 join - Cria uma String customizada com todos os elementos do array
	7 lastIndexOf - Retorna o índice do último elemento encontrado
	8 map - Transforma os elementos de um array
	9 pop - Remove o último elemento do array, retornando-o
	10 push - Adiciona um elemento no array, retornando-o
	11 reduce - Acumula os elementos de uma array
	12 reverse - Inverte a ordem dos elementos do array
	13 shift - Remove o primeiro elemento do array, retornando-o
	14 some - Retorna true se um dos elementos atender a função
	15 slice - Seleciona uma parte do array, retornando-a
	16 sort - Ordena os elementos do array com base em uma função
	17 splice - Adiciona ou remove elementos de uma posição específica
	18 toString - Converte o array em uma String
	19 unshift - Adiciona elementos no início do array
	20 valueOf - Retorna o próprio array

*/

// Podemos usar o Array como Array, como Fila, Pilha etc.

// Retornando o Array com valueOf. Isso pode ser usado para consultar um Array.
var carros = ['Ka','Corsa','Palio'];
carros.valueOf(); // ['Ka','Corsa','Palio']

// Visualizando o Array com toString, ou converter o Array para imprimir na tela.
carros.toString(); 

// Consultando o tamanho do Array com length.
// Obs: length é uma propriedade e não uma função.
carros.length; // 3

// Inserir e remover elementos do Array
// Inserindo novos elementos no final com push
// Push é uma das operações mais utilizados em um Array.
carros.push('Gol'); // 4

carros.toString(); // ['Ka','Corsa','Palio','Gol']

// Operação inversa do push com pop.
// O pop retira elementos do final do Array.
carros.pop('Palio');
// Ou
carros.pop();

carros.toString(); // ['Ka','Corsa']

// Fatiando um Array Slice
carros.slice(0,2); // Ka, Corsa

// Posição 2 em diante
carros.slice(2); // Corsa, Palio

// Invertendo a ordem de um Array com reverse.
carros.reverse();

carros.toString(); // Palio, Corsa, Ka

// Ordenando os elementos de um Array com sort.

var = carros = [];

// Se usar sort sem nenhum parâmetro a ordenação será por ordem alfabética.
carros.sort();

carros[0] = {modelo: 'Ka', preco: 28800};
carros[1] = {modelo: 'Corsa', preco: 34750};
carros[2] = {modelo: 'Palio', preco: 32000};

// Função de comparação que recebe dois parámetros, sendo A o primeiro da comparação e B o segundo.
/* 
	Essa função deve retornar um núnero negativo 0 ou um número positivo, sendo que se for um número 
	negativo A deve vir em primeiro lugar e B em segundo. Se for 0 o valor fica inalterado, deixando os 
	elementos em suas posições.E se for um número positivo, então B deve tomar a frente de A e ficar em 
	primeiro lugar.
*/
carros.sort(function(a, b) {
	return a.preco - b.preco;
});

carros.valueOf(); // Ka, Palio, Corsa

// Função inversa
carros.sort(function(a, b) {
	return b.preco - a.preco;
});

carros.valueOf(); // Corsa, Palio, Ka

// Juntando os elementos em um Array com join
// O join permite juntar elementos de um Array com base me um separador;
// O resultado dessa operação é uma String;
// Serve para gerar um arquivo CSV etc;
var carros = ['Ka','Corsa','Palio','Gol'];

carros.join(';'); // 'Ka;Corsa;Palio;Gol'

// O Join é como se fosse uma operação inversa de um split.
// Quebrando a String de volta em um Array.
carros.join(';').split(';'); // ['Ka'],['Corsa'],['Palio'],['Gol']

// Multiplicação de Strings

'JavaScript' + 10 // NaN

new Array(10); // Array inicializado com 10 espaços undefined

// Multiplicando a String para cada valor undefined
new Array(10).join('JavaScript');

// Inserindo novos elementos no ínicio com unshift
carros.unshift('Gol');

// Retirando elementos do ínicio com shift
carros.shift();

// Localizando elementos com indexOf(), o indice do elemento no Array
// É utilizado comumente com splice
carros.indexOf('Ka'); //1

// Removendo elementos em uma posição com splice
var pos = carros.indexOf('Corsa'); // 1

/* Splice recebe dois parâmetros, sendo o primeiro a posição e o segundo o número de 
	elementos para ser removido. 
*/
carros.splice(pos, 1); // Corsa

// Substituindo elementos em uma posição com splice
var pos = carros.indexOf('Corsa'); // 1

// Neste carro ele vai remover o item do indice e vai colocar outro no lugar.
// A partir do terceiro parâmetro é items a serem adicionados.
carros.splice(pos, 1, 'Sonic');

// Adiconando elementos em uma posição com splice
var pos = carros.indexOf('Corsa'); // 1

// Com 0 não remove ninguém.
carros.splice(pos, 0, 'Sonic');
