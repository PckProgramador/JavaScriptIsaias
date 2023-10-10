const newMap = new Map();
//Solo puedes meter una clave con un valor, son únicas
newMap.set("clave","valor");
newMap.set("clave","valor");
newMap.set("clave","valor");
//tamaño del map
console.log(newMap.size);//esto te devuelve 1
//Para sacar un valor segun su clave
console.log(newMap.get("clave"));//te devuelve "valor"
//Si existe una clave
console.log(newMap.has("clave"));//devuelve true
//borrar , devuelve true or false aparte de borrar
console.log(newMap.delete("clave2"));//devuelve false
const newMap2=new Map(["Enero",15],["Febrero",27],["Enero",99]);
console.log(newMap2);// esto demuestra que el orden de insercion se mantiene y que las claves son unicasporque se sobreescribe el 15 de enero por el 99
//para recorrer claves, valores o ambas
for(let mes of newMap2.keys()){
    console.log(mes); //muestra por consola enero y febrero
}
for(let indice of newMap2.values()){
    console.log(indice);
}
for(let[mes,indice] of newMap.entries()){
 console.log([mes,indice]);
}
newMap2.forEach((indice,mes)=> console.log(`mes: ${mes} --> indice:${indice}`));
/**
 * a=[["Enero",15],["Febrero",27],["Enero",99]] esto es un MAP
 * ...a--->["Enero",15],["Febrero",27],["Enero",99]
 * [ ...a ] ---> [["Enero",15],["Febrero",27],["Enero",99]] esto es un array
 * Este proceos DESTRUCTOR [ ...variableaDestruir ];
 */
//CREAR OBJETOS---->
//creacion literal
const color={ //objeto normal
    rojo:0,
    verde:50,
    azul:120,
}
const color2={ //objeto json
    "rojo":0,
    "verde":50,
    "azul":120,
}
//funcion constructora...
function  Persona (nombre,edad,telefono,cp){
    this.nombre=nombre;
    this.edad=edad;
    this.telefono=telefono;
    this.cp=cp;
}
const pepe = new Persona("pepe",22,"66666666",18003);
typeof(pepe);
console.log(pepe);
//clases
class Persona2{
        constructor(nombre,edad,telefono,cp){
            this.nombre=nombre;
            this.edad=edad;
            this.telefono=telefono;
            this.cp=cp;
        }
}
const pepa = new Persona2("pepe",22,"66666666",18003);
typeof(pepa);
//Object.create
const sara=Object.create(null);
sara.nombre="sara"
sara.edad=22
sara.cp=18000
console.log(sara);
//literal
const luis={};
luis.nombre="luis"
luis.edad=22
luis.cp=18000
console.log(luis);
//objeto ejemplo
const user ={
	id: 890,
  	name:"Luis",
  	geo: {
      coordx:45,
      coordy:90,
    },
  	books:["Libro1","Libro2","Libro3","Libro4"],
  	basura: "menuda m",
  	carnet:true,
}
console.log(delete user.basura);
console.log(user);
//muestra por pantalla tanto las claves, los valores como las [clave,valor];
for( let clave of Object.values(user)){
  console.log(clave);
}
for( let clave of Object.keys(user)){
  console.log(clave);
}
for( let [clave,valor] of Object.entries(user)){
  console.log(`${clave} , ${valor}`);
}
//crea un objeto de solo lectura, no se puede editar las propiedades
const newUser=Object.freeze(user);
newUser.name = "Manolo";
console.log(newUser);
//recorrer las propiedades del objeto
for(const clave in user){
    console.log(clave);
}
//Desestructurar objetos
const { id : myId,geo,aaa ="aaah" }=user;//user era un objeto con sus claves {id:,name;etc....}
console.log(id);//muestra 890 como la hemos renombrado a myId ahora tendriamos que usar myId
console.log(myId);//muestra 890
console.log(geo);//muestra las coordenadas
console.log(aaa);//"aaah" la has creado pero como no se le puede asignar nada del objeto user la dejaria vacia sin embarho
//si no le asignas nada por defecto te da UNDEFINED













