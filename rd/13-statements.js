// for, if, else, continue, while, switch, break, throw, try e catch

var text = 'Lorem ipsum dolor sit amet, consectetur';

// FOR
var toHackerCase = function(text) {
	var hackerTextArray = [];

	for(var i = 0; i < text.length; i++) {
		if(text.charAt(i) === 'o') {
			hackerTextArray.push(0);		

			continue;
		} 

		if(text.charAt(i) === 'l') {
			hackerTextArray.push(0);		

			continue;			
		}

		hackerTextArray.push(text.charAt(i));
	} 

	return hackerTextArray.join();
};

console.log(toHackerCase(text));

// SWITCH
var toHackerCase = function(text) {
	var hackerTextArray = [];

	for(var i = 0; i < text.length; i++) {
		
		switch(text.charAt(i)) {
			case 'o':
				hackerTextArray.push(0);
				break;	
			case 'l':
				hackerTextArray.push(1);
				break;	
			case 'e':
				hackerTextArray.push(2);
				break;	
			case 'a':
				hackerTextArray.push(3);
				break;	
			case 's':
				hackerTextArray.push(4);
				break;	
			case 't':
				hackerTextArray.push(5);
				break;	
			default;
		}

		hackerTextArray.push(text.charAt(i));
	} 

	return hackerTextArray.join();
};

console.log(toHackerCase(text));


// WHILE
var toHackerCase = function(text) {
	var hackerTextArray = [];
	var i = 0;

	while (i < text.length) {
		
		switch(text.charAt(i)) {
			case 'o':
				hackerTextArray.push(0);
				break;	
			case 'l':
				hackerTextArray.push(1);
				break;	
			case 'e':
				hackerTextArray.push(2);
				break;	
			case 'a':
				hackerTextArray.push(3);
				break;	
			case 's':
				hackerTextArray.push(4);
				break;	
			case 't':
				hackerTextArray.push(5);
				break;	
			default;
		}

		hackerTextArray.push(text.charAt(i));
	} 

	return hackerTextArray.join();
};

console.log(toHackerCase(text));

// TRATAMENTO DE ERROS

var hackerTextError = function(msg) {
	this.message = msg;
	this.name = 'hackerTextError';
};

var toHackerCase = function(text) {
	if(!text) throw new hackerTextError('Invalid text.');
	if(typeof text !== 'string') throw new hackerTextError('Invalid type.');

	var hackerTextArray = [];
	var i = 0;

	while (i < text.length) {
		
		switch(text.charAt(i)) {
			case 'o':
				hackerTextArray.push(0);
				break;	
			case 'l':
				hackerTextArray.push(1);
				break;	
			case 'e':
				hackerTextArray.push(2);
				break;	
			case 'a':
				hackerTextArray.push(3);
				break;	
			case 's':
				hackerTextArray.push(4);
				break;	
			case 't':
				hackerTextArray.push(5);
				break;	
			default;
		}

		hackerTextArray.push(text.charAt(i));
	} 

	return hackerTextArray.join();
};

try {
	console.log(toHackerCase());
} catch (e) {
	console.log('Error: ' + e.message + ' ' + e.name);
}

try {
	console.log(toHackerCase(10));
} catch (e) {
	console.log('Error: ' + e.message + ' ' + e.name);
}

console.log(toHackerCase(text));