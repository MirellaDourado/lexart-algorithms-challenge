//const arrayExample = [ 'a', 10, 'b', 'hola', 122, 15];

const filterArray = (array, type) => {  
  return array.filter((caracter) => typeof caracter === type);
};

const numbers = filterArray(arrayExample, 'number');
const strings = filterArray(arrayExample, 'string');
const highestNumber = filterArray(arrayExample, 'number').sort((num1, num2) => num2 - num1)[0];