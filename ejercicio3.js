/* Ejercicio 3: Pensamiento lógico

Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].*/

function getOddNumbers(maxNumber) {
  let oddNumbers = [];
  for (let i = 1; i <= maxNumber; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}

console.log(getOddNumbers(9));
console.log(getOddNumbers(10));
console.log(getOddNumbers(1));
console.log(getOddNumbers(0));
console.log(getOddNumbers(15));
