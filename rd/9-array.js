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


