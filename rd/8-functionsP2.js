// Conselho: Cuidado com o escopo global.
// JS usa o escopo global para se comunicar.

// Referência: Learning JavaScript Design Patterns
// Link: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript

var counter = 0;
var add = function() {
    return ++counter;
};

console.log(add());
console.log(add());
console.log(add());

var items = [];
var add = function(item) {
    items.push(item);
    return items;
};

console.log(add('A'));
console.log(add('B'));
console.log(add('C'));

// O grande problema com o escopo global é que ele pode ficar poluído.

// Porque nós declaramos tanta coisa no escopo global?
// Como a linguagem não possui um ligador, um linker, faz uso de um escopo global compartilhado para
// estabelecer os vínculos entre diferentes partes de uma aplicação.

// Como fazer para encapsular?
// Existem algumas formas de fugir do escopo global...

// Ténicas: Objeto
var counter = {
    value: 0,
    add: function() {
        return ++this.value;
    }
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var items = {
    value: [],
    add: function(item) {
        this.value.push(item);
        return this.value;
    }
};

console.log(items.add('A'));
console.log(items.add('B'));
console.log(items.add('C'));

// Observação: A linguagem JavaScript não possui modificadores d visibilidade como private ou public;
// Então, sem esse modificadores de acesso, corre-se um grande risco de acessar propriedade internas de um objeto;
// Um dos problemas de usar o objeto diretamente é introduzir valores nas propriedades internas do objeto, ou acesso ao conteúdo
// desse objeto;

// Então é melhor usar encapsulamento por meio de funções.

// Encapsulamento por meio de objeto. 
// Uma função é um objeto que contém um bloco de código executável. Mas esse bloco é isolado, não sendo possível acessá-lo 
// Externamente.

// Ex:
var counter = function() {
    var value = 0;
    var add = function() {
      return ++value;
    };
};

console.log(counter.value); // undefined
console.log(counter.add); // undefined
console.log(counter.add()); // TypeError

// Como fazer para se comunicar com o mundo exterior?
// Um dos métodos de abrir esse acesso de comunicação é por meio de Factory Function

var createCounter = function() {
    var value = 0;
    
    // Objeto return que tem uma propriedade chamda Add, com um valor de função.
    return {
        add: function() {
            //Não há necessidade de utilizar o THIS, pois neste caso o value seria declado dentro do objeto return;
            // Aqui estamos usando o conceito de CLOSURES.
            return ++value;
        }
    };
};

var counter = createCounter();
console.log(counter.value); // undefined
console.log(counter.add()); // 1

// Acessando por meio de Constructor Function 
var Counter = function() {
    var value = 0;
    this.add = function() {
        return ++value;
    }
};

var counter = new Counter();
console.log(counter.value); // undefined
console.log(counter.add()); // 1

// Ainda existe a função IIFE (Immediately-Invoked Function Expression). Uma expressão invocada automáticamente.

// Module Pattern (Uma evolução da Factory Function).
var counter = (function() {
    var value = 0;
    return {
        add: function() {
            return ++value;      
        },
        reset: function() {
            value = 0;
        }
    };
})();

console.log(counter.value); // undefined
console.log(counter.add()); // 1
counter.reset() // 0
console.log(counter.add()); // 1

// Utilizando o Revealing Module Pattern
var counter = (function() {
    // Utilizar o anderline para valores (functions, variáveis etc) privados.
    var _value = 0;
    var _add = function() {
        return ++_value;      
    };
    var _reset = function() {
        _value = 0;
    };
    return {
        add: _add,
        reset: _reset
    };
})();

counter._value; //undefined
counter.add(); // 1
counter.reset(); // 0
counter.add(); // 1



