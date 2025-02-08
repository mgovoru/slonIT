let summFieldsNumber = (obj) =>
	Object.values(obj).filter((el) => typeof el === 'number').reduce((sum, elem) => sum + elem, 0);


let arrayFieldsNumber = (obj) =>
  Object.entries(obj)
		.filter((el) => typeof el[1] === 'number')
		.sort((a, b) => b[1] - a[1])
		.map((elem) => elem[0]);
