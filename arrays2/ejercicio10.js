// Escribe una función llamada dividirFragmento
//que tome un array arr y un número entero
// tamano . La función debe dividir el array en fragmentos de tamaño tamano
//y devolver un nuevo array con los Fragmentos
let arr = [5, 9, 8, 7, 4, 156, 8, 5, 7, 5, 31,3];
let size = 3;

function dividirFragmento(lista, tamanio) {
  let devolver = [];
  let fragmento = [];
  for (let index = 0; index <= lista.length; index++) {
    if (index % tamanio !== 0 || index === 0) {
      fragmento.push(lista[index]);
    // } else if (index%tamanio===0 && index >= 3) {
    //   fragmento.push(lista[index]);
    } else if(index!==3){
      fragmento.push(lista[index]);
      devolver.push(fragmento);
      fragmento=[];
    }else if(index ===3){
      devolver.push(fragmento);
      fragmento=[];
    }
  }
  return devolver;
}