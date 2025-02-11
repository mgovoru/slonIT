function createLogger() {
	let array = [];
	return {
		log: (message) => array.push(message),
		getLogs: () => array.forEach((elem) => console.log(elem))
	}
}

function createRandomGenerator(min, max) {
	return function () { return Math.round(min + Math.random() * (max - min)) }
} 
