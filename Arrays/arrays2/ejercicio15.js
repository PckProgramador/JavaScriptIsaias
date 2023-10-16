// Ejercicio 15: Invertir Cadena
// Define una función llamada invertirCadena que tome una cadena cadena y devuelva una
// nueva cadena con los caracteres en orden inverso.


function invertirCadena(cadena){
    let array=cadena.split('');
    let devolver=[];

    array.forEach((element,index,self)=> {
        devolver.unshift(element);
    });


    return devolver;


}

console.log(invertirCadena("hola caracola"));