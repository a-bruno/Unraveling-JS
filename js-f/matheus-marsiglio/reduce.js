const places = require('./places.js');

var arr = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array){
	return previousValue + currentValue;
});

console.log(arr);
