function simpleCalculate(num1, num2, operatorFunction) {
return operatorFunction(num1,num2);
}
const multiply = function (num, num1) {
  return num * num1;
};

const division = function (num, num1) {
  return num / num1;
};
const addition   = function (num, num1) {
  return num + num1;
};
const subtraction = function (num, num1) {
	return num - num1;
};

const operations = {
  multiply,
  division,
  addition,
  subtraction,
};
