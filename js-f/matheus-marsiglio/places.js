const places = require('./places.js');

let placesNames = places.map(function(p) {
	return p.name;
});

console.log(placesNames);