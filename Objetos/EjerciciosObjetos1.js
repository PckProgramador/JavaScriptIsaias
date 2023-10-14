/**
 * Ejercicio 1
Escribe una función que tome un objeto. Debería devolver el valor de la propiedad cuya clave sea
pais. Si no existiese dicha clave devolvería : "No se encuentra"
// Objeto: { continente: "Europa", pais: "España"}
 */

const devolverPais = objeto=>  objeto.pais?objeto.pais:"No se encuentra";

const miObjeto1 = { continente: "Europa", pais: "España" };

console.log(devolverPais(miObjeto1));



/**
 * Ejercicio 2
Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario.

 */

const existePropiedad = (objeto,cadena) => cadena in objeto;
console.log(existePropiedad(miObjeto1,lugar));

/**
 * Ejercicio 3
Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si
el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras,
no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.
 */

const existePropiedad2= (objeto,cadena)=> cadena in objeto? true:null;
console.log(existePropiedad2(miObjeto1,lugar));