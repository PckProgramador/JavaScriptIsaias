// Ejercicio 24: Ordenar Objetos
// Escribe una función llamada ordenarPorPropiedad que ordene un array de objetos por una
// propiedad específica. La función debe tomar un array arr y una cadena propiedad que
// indique la propiedad por la cual se debe ordenar.
let array1=[
    {
       nombre: "Juan",
       edad: 30,
       profesion: "desarrollador",
     },
       {
       nombre: "pepe",
       edad: 32,
       profesion: "cacatua",
     },
      {
       nombre: "rosalia",
       edad: 12,
       profesion: "aaaaa",
     }];
   
   
     const ordenarPorPropiedad = (arr, propiedad) => arr.sort((a, b) => (a[propiedad] < b[propiedad] ? -1 : a[propiedad] > b[propiedad] ? 1 : 0));
   
   console.log(ordenarPorPropiedad(array1,"edad"));