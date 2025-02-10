let firstLetterToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);


let cutString = (str, countChars) => {
	let cutStr = str.slice(0, countChars);
	let testLastLetter = /[a-zA-Z]/.test(cutStr.at(-1));
	let specialSimbol = cutStr.match(/[\s,.!?:;]/)?.at(-1);
	return str.length > countChars
    ? `${
        testLastLetter && specialSimbol
          ? `${cutStr.slice(0, cutStr.indexOf(specialSimbol))}...`
          : testLastLetter && !specialSimbol
          ? ''
          : `${cutStr}...`
      }`
    : str;
}


let subString = (str, str1) =>
str.includes(str1) ||str1.includes(str); 
