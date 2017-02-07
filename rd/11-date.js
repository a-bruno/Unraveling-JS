/* 
	Date não é representada da forma literal, mas pela quantidade de milissegundos 	desde
	o início da Era Unix.

	A Era Unix (Unix Epoch), ou Posix Time, teve início no dia 1 de janeiro de 1970 às 
	00:00:00 do Tempo Universal Coordenado, mais conhecido como UTC, referência a partir
	de onde se calculam os fusos horários do mundo inteiro.

	Existem 4 maneiras diferentes de criar uma data!
*/

// Criando uma data, a partir da função construtura de Date, sem parâmetros.
var hoje = new Date();

// Tempo em milissegundos
hoje.getTime();

// Criando uma data, passando como parâmetro o tempo em milisegundos
var natal = new Date(1419465600000);

console.log(natal); // Wed Dec 24 2014 22:00:00 GMT-0200 (BRST)

/* 
	Espera, o Natal não é em 25/12? Sim, só que lembra que esse calcúlo é feito a partir 
	de UTC 00:00, também conhecido como Z, abreviação de Zulu Time.
*/

// Criando uma data, passando como parâmetro uma String
new Date('2014/12/25');

new Date('12/25/2014');

new Date('25/12/2014'); // Invalid Date

// Date parse retorna o tempo em milisegundos
Date.parse('2014/12/25'); 

// Cuidado, os formatos oficialmente aceitos são RFC 2822 e ISO 8601

// https://www.w3.org/TR/NOTE-datetime

// Criando uma data, passando como parâmetro uma String RFC 2822
new Date('Thu Dec 25 2014');

// Criando uma data, passando como parâmetro uma String ISO 8601
new Date('2014-12-25');

new Date('2014-12-25T10:30:00');

new Date('2014-12-25T10:30:00Z');

new Date('2014-12-25T10:00:00-02:00');

// Criando uma data, passando como parâmetro a própria data
new Date(2014, 11, 25);

new Date(2014, 11, 25, 10, 30, 00);

// API de Date

/*
	1 getDate - Retorna o dia
	2 getDay - Retorna o dia da semana
	3 getFullYear - Retorna o ano
	4 getHours - Retorna as horas
	5 getMilliseconds - Retorna os milisegundos
	6 getMinutes - Retorna os minutos
	7 getMonth - Retorna o mês
	8 getSeconds - Retorna os segundos
	9 getTime - Retorna o tempo em milisegundos
	10 toString - Retorna a data em String
*/

// 
console.log(natal.getYear()); // 114

console.log(natal.getFullYear()); // 2014

console.log(natal.getMonth()); // 11

// getDay se refere ao dia da semana
console.log(natal.getDay()); // 114

