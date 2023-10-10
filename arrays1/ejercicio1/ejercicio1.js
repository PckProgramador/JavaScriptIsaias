/** 
 * @author:PckMM
 * @description: Ejercicio 1
 */

let a=[1,2,3,4];
let b=[5,6,7,8];

const sumarArray=(x=[],y=[])=>{
    
   return x.map(z=>z+y[x.indexOf(z)]);

};

console.log(sumarArray(a,b));