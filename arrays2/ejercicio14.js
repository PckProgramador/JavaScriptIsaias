// Escribe una función llamada rangoNumeros que tome dos números inicio y fin . La
// función debe devolver un array que contenga todos los números en el rango desde inicio
// hasta fin , incluyendo ambos números.


// Forma 1 

function rangoNumeros(x,y){
    let numeroMenor=0;
    let numeroMayor=0;
    if(x<y){
        numeroMenor=x;
        numeroMayor=y;
    }else{
        numeroMenor=y;
        numeroMayor=x;
    }

    let array=[];
    while(numeroMenor<=numeroMayor){
        array.push(numeroMenor);
        numeroMenor++;
    }
    return array;
}

console.log(rangoNumeros(1,15));