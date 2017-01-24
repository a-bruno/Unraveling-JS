// link do artigo
// https://medium.com/tableless/entendendo-programa%C3%A7%C3%A3o-funcional-em-javascript-de-uma-vez-c676489be08b#.r9hmphccv

function square(x) {
    return x * x;
}

square(2); // 4

function generateDate() {
    var date = new Date();
    generate(date);
}

generateDate(); // ???

// Higher-Order Functions

// Em ES5
var calculate = function(fn, x, y) {
    return fn(x, y);
};

var sum = function(x, y) {
    return x + y;
};

var mult = function(x, y) {
    return x * y;
};

calculate(sum, 2, 5); // 7
calculate(mult, 2, 5); // 10

// Em ES6
const sum = (x, y) => x + y;
const mult = (x, y) => x * y;

calculate(sum, 2, 5); // 7
calculate(mult, 2, 5); // 10

// jasmine.js
describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

// jQuery.js
$(btn1).click(function() { 
    doSomething();
});

$(btn2).bind("click", function() {
    doSomethingElse();
});

$(document).ajaxStart(function() {
    $(log).text("Triggered ajaxStart handler.");
});

// Angular.js
var app = angular.module('app');
app.controller('MyController', function() { 
    /* */
});

// Map

// Em ES5
var numbers = [1, 2, 3];

var square = function(x) {
    return x * x;
};

var squaredNumbers = numbers.map(square); // [1, 4, 9]

//Em ES6
const numbers = [1, 2, 3];
const square = x => x * x;
const squaredNumbers = numbers.map(square); // [1, 4, 9]

// Em ES5
var students = [
    { name: 'Anna', grade: 6 },
    { name: 'John', grade: 4 },
    { name: 'Maria', grade: 9 }
];

var teachers = [
    { name: 'Mark', salary: 2500 },
    { name: 'Todd', salary: 3700 },
    { name: 'Angela', salary: 1900 }
];

var byName = function(object) {
    return object.name;
};

var byNames = function(list) {
    return list.map(byName);
};

byNames(students); // ["Anna", "John", "Maria"]
byNames(teachers); // ["Mark", "Todd", "Angela"]

// Em ES6
const students = [
    { name: 'Anna', grade: 6 },
    { name: 'John', grade: 4 },
    { name: 'Maria', grade: 9 }
];

const teachers = [
    { name: 'Mark', salary: 2500 },
    { name: 'Todd', salary: 3700 },
    { name: 'Angela', salary: 1900 }
];

const byName = object => object.name;
const byNames = list => list.map(byName);

byNames(students); // ["Anna", "John", "Maria"]
byNames(teachers); // ["Mark", "Todd", "Angela"]

// Filter

// Em ES5
var numbers = [1, 4, 7, 10];

var isBiggerThanFour = function(value) {
    return value > 4;
};

var numbersBiggerThanFour = numbers.filter(isBiggerThanFour); // [7, 10]

// Em ES6
const numbers = [1, 4, 7, 10];
const isBiggerThanFour = value => value > 4;

const numbersBiggerThanFour = numbers.filter(isBiggerThanFour); // [7, 10]

// Reduce
	
// em ES5
var numbers = [1, 2, 3];

var sum = function(x, y) {
    return x + y;
};

var numbersSum = numbers.reduce(sum, 0); // 6

// Em ES6
const numbers = [1, 2, 3];
const sum = (x, y) => x + y;
const numbersSum = numbers.reduce(sum, 0); // 6

const numbers = [1, 2, 3];
const sum = (x, y) => x + y;
const numbersSum = numbers.reduce(sum, 10); // 16

var months = ['JAN', 'FEV', 'MAR', /*...*/ , 'DEZ'];

var monthsShortener = function(previous, current) {
    return previous + '/' + current;
};

var shortenedMonths = months.reduce(monthsShortener, '');
// /JAN/FEV/MAR ... /DEZ

var months = ['JAN', 'FEV', 'MAR', /*...*/ , 'DEZ'];

var monthsShortener = function(previous, current) {
    if (previous === '') {
        return current;
    } else {
        return previous + '/' + current;
   }
};

var shortenedMonths = months.reduce(monthsShortener, '');
// JAN/FEV/MAR ... /DEZ

const months = ['JAN', 'FEV', 'MAR', /*...*/ , 'DEZ'];

const monthsShortener = (previous, current) => {
    if (previous === '') {
        return current;
    } else {
        return previous + '/' + current;
   }
};

const shortenedMonths = months.reduce(monthsShortener, '');
// JAN/FEV/MAR ... /DEZ

// Currying

// Em ES5
var add = function(x, y) {
   return x + y;
};

add(1, 2) // 3

// Em ES6
var add = function(x) {
    return function(y) {
        return x + y;
    };
};

add(1)(2); // 3

// Em ES5
var addFive = add(5);
var addTen = add(10);

addFive(3); // 8
addFive(1); // 6

addTen(1); // 11
addTen(10); //20

// Em ES5
var greeting = function(greet) {
    return function(name) {
        return greet + ' ' + name;
    };
};

var hello = greeting('Hello');
hello('World'); // Hello World
hello('Matheus'); // Hello Matheus

// Em ES6
const greeting = greet => name => greet + ' ' + name;
const hello = greeting('Hello');

hello('World'); // Hello World
hello('Matheus'); // Hello Matheus

// Compose
	
// Em ES5
var compose = function(f, g) {
    return function(x) {
        return f(g(x));
    };
};

var toUpperCase = function(x) {
    return x.toUpperCase();
};

var exclaim = function(x) {
    return x + '!';
};

var angry = compose(toUpperCase, exclaim);

angry('ahhh'); // AHHH!

// Em ES6
const compose = (f, g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => x + '!';

const angry = compose(toUpperCase, exclaim);

angry('ahhh'); // AHHH!

