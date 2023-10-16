
// Ejercicio 12: Combinar Objetos
// Escribe una función llamada combinarObjetos 
//que tome dos objetos (tanto arrays como
// objetos) obj1 y obj2 . La función debe combinar ambos
// objetos en uno solo y devolverlo.

const objeto11={
   foo: "12", baz:42
};

const objeto22={
  af: "44", xxx: 33 
};



// is array 

//CONCATEENA OBJETOS
//[...object1,...object2]


const combinarObjetos = (objeto1,objeto2)=>{
  let devolver;
  if(Array.isArray(objeto1)&&Array.isArray(objeto2)){
    return devolver=objeto1.concat(objeto2);
  }else if(Array.isArray(objeto1)&& !Array.isArray(objeto2)){
    return devolver=objeto1.concat(Object.entries(objeto2));
  }else if(!(Array.isArray(objeto1))&&Array.isArray(objeto2)){
    return devolver=objeto2.concat(Object.entries(objeto1));
  }else if(!Array.isArray(objeto1)&&!Array.isArray(objeto2)){
    return devolver=Object.entries(objeto1).concat(Object.entries(objeto2));
  }
}

console.log(combinarObjetos(objeto11,objeto22));