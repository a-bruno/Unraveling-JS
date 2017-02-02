/* 
	As expressões regulares são estruturas formadas por uma 
	sequeência de caracteres que especificam um padrão formal.

	É muito útil para validações de campos. Extração de dados.
	Utilizado para buscas textuais, encontrando padrões. Varrer jornais com
	o intuito de fazer clipping.

	Substituição de caracteres em textos. 
*/

// Criando uma expressão regular
var regExp = /<expressão regular>/;

// Existe uma outra opção
var regExp = new RegExp('<expressão regular>');

//...
var regExp = /abc/;
console.log(regExp); /abc/

//...
var regExp = new RegExp('abc');
console.log(regExp); /abc/

// RegExp API
// exec - Executa a RegExp, retornando os detalhes
// test - Testa a RegExp, retornando true ou false

// Primeiro passo - Telefone Passo 1
/* 
	Reconhecimento de um telefone simples: 9999-9999. Esse telefone 
	será evoluído por meio de novos cenários para estimular a utilização 
	de grupos, metacaracteres, quantificadores e muito mais. 
*/

// Ex1:
var regExp = /9999-9999/;
var telefone = '9999-9999';

console.log(regExp.exec(telefone));

console.log(regExp.test(telefone));

// Telefone - Passo 2
/*
	Evoluimos nosso primeiro exemplo e agora o telefone tem código de área:
	(48) 9999-9999, como fazer para reconhecê-lo?
*/
var regExp = /(48) 9999-9999/;
var telefone = '(48) 9999-9999';

console.log(regExp.test(telefone)); // false

// Caracteres especiais tem significado dentro do RegExp.

// Escapando caracteres especiais
// \ - A barra é utilizada antes de caracteres especiais, com o objetivo 
// de escapá-los, para que se tornem literais.

var regExg = /\(48\) 9999-9999/;
var telefone = '(48) 9999-9999';

console.log(regExp.test(telefone)); // true

// Telefone passo 3
/*
	Fazer com que o telefone seja reconhecido únicamente, não permitindo outros
	caracteres antes e depois;
*/
var regExp = /\(48\) 9999-9999/;
var telefone = 'O telefone é (48) 9999-9999, tratar com o João';

console.log(regExp.test(telefone)); // true

// Iniciando e finalizando com um determinado caractere.
// ^ - Inicia com um determinado caractere 
// $ - Finaliza com um determinado caractere
var regExp = /^\(48\) 9999-9999$/;
var telefone = '(48) 9999-9999';

console.log(regExp.test(telefone)); // true

// Telefone - Passo 4
/*
	Chegou a hode aceitar qualquer número de telefone, para isso precisamos flexibilizar
	a expressão regular por meio de grupos.
*/

/*
	Grupos de caracteres 

	[abc] - Aceita qualquer caractere dentro do grupo, nesse caso a, b e c;
	[^abc] - Não aceita qualquer caractere dentro do grupo, nesse caso a, b e c
	[0-9] - Aceita qualquer caractere entre 0 e 9;
	[^0-9] - Não aceita qualquer caractere entre 0 e 9;
*/

// Trabalhando com grupos
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = '(48) 1234-1234';

console.log(regExp.test(telefone)); // true

// Passo 5
/*
	Não é muito grupo? Para evitar a repetição exagerada de padrões em uma 
	expressão regular, podemos utilizar quantificadores.
*/

// Quantificadores - Parte 1
/*
	Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou 
	metacaracteres.

	{n} - Quantifica um número específico
	{n,} - Quantifica um número mínimo
	{n,m} - Quantifica um número mínimo e um número máximo
*/
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = '(48) 1234-1234';

console.log(regExp.test(telefone)); // true

// Passo 6 
/*
	E se for necessário aceitar números com 8 ou 9 dígitos?
	Podemos utilizar um quantificador para especificar um determinado
	intervalo.
*/
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
var telefone1 = '(48) 1234-1234';
var telefone2 = '(48) 91234-1234';

console.log(regExp.test(telefone1)); // true
console.log(regExp.test(telefone2)); // true

// Passo 7
/*
	E se o hífen for opcional? É muito comum que se escreva sem hífen!
	Podemos utilizar um quantificador para torná-lo opcional.
*/

// Quantificadores - Parte 2
/*
	Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou 
	metacaracteres.
	
	? - Zero ou um
	* - Zero ou mais
	+ - Um ou mais
*/
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
var telefone1 = '(48) 12341234';
var telefone2 = '(48) 91234-1234';

console.log(regExp.test(telefone1)); // true
console.log(regExp.test(telefone2)); // true

// Telefone - Passo 8
/*
	E se o telefone agora estiver em uma estrutura de tabela, como fazer para
	reconhecer cada linha?
*/
var regExp = /<table><tr><td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td><\/tr><\/table>/;
var telefone = '<table><tr><td>(80) 999778899</td><td>(80) 99897-8877</td></tr></table>';

console.log(reg.test(telefone)); // false

var regExpTelefone = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;
var telefone = '<table><tr><td>(80) 999778899</td><td>(80) 99897-8877</td></tr></table>';

console.log(regExp.test(telefone)); // true

// Telefone - Passo 9
/*
	Em muitos casos, é possível substituir os grupos por metacaracteres específicos.
*/

// Metacaracteres
/*
	. - Representa qualquer caractere 
	\w - Representa o conjunto [a-zA-z0-9_]
	\W - Representa o conjunto [^a-zA-z0-9_]
	\d - Representa o conjunto [0-9]
	\D - Representa o conjunto [^0-9]
	\s - Representa um espaço em branco
	\S - Representa um não espaço em branco
	\n - Representa uma quebra de linha
	\t - Representa um tab
*/
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;
var telefone = '<table><tr><td>(80) 999778899</td><td>(80) 99897-8877</td></tr></table>';

console.log(regExp.test(telefone)); // true

// String API
/*
	match - Executa uma busca na String e retorna um array contendo os dados encontrados,
	ou null.
	split - Divide a String com base em uma outra String fixa ou expressão regular.
	replace - Substitui partes da String com base em uma outra String fixa ou expressão
	regular.
*/

// Telefone - Passo 10
/*
	Chegou a hora de extrair os telefones das linhas da tabela!
	Vamos extrair o telefone da primeira linha.
*/

var regExp = /\(\s\d{2}\)\s\d{4,5}-?\d{4}/;
var telefone = '<table><tr><td>(80) 999778899</td><td>(80) 99897-8877</td></tr></table>';

console.log(telefone.match(regExp)); // (80) 999778899, index: 15

// Telefone Passo 11 
/*
	Agora, vamos extrair o telefone de todas as linhas.
*/

// Modificadores
/*
	i - Case-insensitive matching
	g - Global matching
	m - Multiline matching
*/

var regExp = /\(\s\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone = '<table><tr><td>(80) 999778899</td><td>(80) 99897-8877</td></tr></table>';

console.log(telefone.match(regExp)); // (80) 999778899, (80) 99897-8877

// Variações

// Somente prefixos
var regExp = /\(\s\d{2}\)/; //(80), (80)

// Passo 12 - Substituindo os tefones
// Subtituindo dados com replace

var regExp = /\(\s\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone = '<table><tr><td>(80) 999778899</td><td>(80) 99897-8877</td></tr></table>';

console.log(telefone.replace(regExp, 'telefone')); // <td>telefone</td>, <td>telefone</td>
