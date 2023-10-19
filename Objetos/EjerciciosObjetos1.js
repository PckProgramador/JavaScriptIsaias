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


/**
 * Ejercicio 4
Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad
con la clave 'key' y un valor igual a la cadena. Devuelve el objeto.
 */

const crearObjeto= cadena => ({ key:cadena}); 
const cadena1="holaa";
const objeto2=crearObjeto(cadena1);
console.log(objeto2);

/**
 * Ejercicio 5
Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una
propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.
 */

const crearObjeto2=(_cadena,_cadena2)=> ( {[_cadena] : _cadena2}  );
const cadena2="adios";
const objeto3=crearObjeto2(cadena1,cadena2);
console.log(objeto3);


/**
 * Ejercicio 6
Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga
propiedades con claves los elementos del array 'a' y con los valores correspondientes 'b'. Devuelve el
objeto.
 */


function crearObjeto3 (array1,array2){
    const objeto={};
    for (let i = 0; i < array1.length; i++) {
        objeto[a[i]] = b[i];
      }
    return objeto;
}

const matriz1=[[1,2],[3,4]];
const matriz2=[[1,2],[3,4]];

console.log(crearObjeto3(matriz1,matriz2));

