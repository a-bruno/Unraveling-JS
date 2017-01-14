const places = require('./places.js');

let placesNames = places.filter(function(p) {
	return p.rate === 5;
});

console.log(placesNames);
