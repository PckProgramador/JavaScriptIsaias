
let string = "patrick caravana migue tarik pepe patrick pepe tarik migue hola";



// function contarPalabras (x){
//     console.log(x);
//     const arrayPalabras=x.split(" ");
//     console.log(arrayPalabras);
//     const objetoPalabrasRepetidas= {};
//     console.log(objetoPalabrasRepetidas);
//     return arrayPalabras.forEach((z) => { objetoPalabrasRepetidas[z] = (objetoPalabrasRepetidas[z] || 0 )+1;
        
//     });

// }
function contarPalabras (x){
    const arrayPalabras=x.split(" " );
    const counts = {};
    arrayPalabras.forEach((x) => {
    counts[x] = (counts[x] ? counts[x] : 0) + 1;
    
    });
    return counts
}


console.log(contarPalabras(string));