// Ejercicio 2: Nomenclatura
// Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor su función.

function sineOfSumProduct(firstNumber, secondNumber, multiplier) {
  let sum = firstNumber + secondNumber;
  let product = sum * multiplier;
  let result = Math.sin(product);
  return result;
}
