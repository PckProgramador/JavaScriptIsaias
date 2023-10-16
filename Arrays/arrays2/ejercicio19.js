// Ejercicio 19: Palíndromo
// Escribe una función llamada esPalindromo que verifique si una palabra es un palíndromo, es
// decir, se lee igual de izquierda a derecha y de derecha a izquierda. La función debe devolver
// true si la palabra es un palíndromo y false en caso contrario.





function esPalindromo2(palabra){
    const longitud = palabra.length;

    for (let i = 0; i < longitud / 2; i++) {
      if (palabra[i] !== palabra[longitud - i - 1]) {
        return false;
      }
    }

    return true;
}
console.log(esPalindromo2("cristina"));