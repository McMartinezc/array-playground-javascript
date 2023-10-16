/**
 * Poniéndolo todo junto
 */

function existePez(listaPeces, pezBuscado) {
  let pezEncontrado = false;
  let i = 0;

  while (!pezEncontrado && i < listaPeces.length) {
    pezEncontrado = listaPeces[i] === pezBuscado;
    i++;
  }

  return pezEncontrado;
}

let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"];
let he_encontrado_al_pez = existePez(muchos_peces, "Estrella");

console.log("He encontrado al pez?: " + he_encontrado_al_pez);

/**
 * Ejecuta el código.
 * Esta functión debería devolver "true"; puesto que "Estrella"; efectivamente está en el array.
 * Sin embargo devuelve false. Hay DOS errores:
 *
 * 1. Un error que impide ejecutar el código. Vigila la información que arroja el TERMINAL
 * 2. Un error lógico; que hace que el código no devuelve lo que debería devolver.
 *
 * Pon "chivatos" en el código para aydarte a averiguar que está sucediendo; o usa el depurador de Visual Studio para ejecutar el código paso a paso
 * 
 * En el bucle while, la condición i < listaPeces.length - 1 debería ser i < listaPeces.length. De lo contrario, el bucle se detendrá antes de verificar el último elemento del array. Cambia la condición para que el bucle itere sobre todos los elementos del array.
 */
