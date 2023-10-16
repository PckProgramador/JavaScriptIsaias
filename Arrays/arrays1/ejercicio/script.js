/** 
 * @author:Patrick MM
 * @description: Calculo del factorial de un número entero 
 * mayor o igual que 1.
 */


//COMO DOCUMENTAR UNA FUCION
/**
 * funcion que te deveulve el factorial de un numero
 * @param {num} num
 * @returns {num}
 */
function factorial(num){
    if(num<1) {return};
    
    let b=1;        
    for(let a = 1;a<=num;a++){
            b*=a;        
      
    }
    /**
     * for(let a=num;a<0;a--){
     *      b*=a;
     * }
     */
    return b;
}




function segundoGrado(a,b,c){
    if(typeof a != 'number' && typeof a != 'number' && typeof a != 'number' ){
        return 
    }
    //ax^2+bx+c=0;
    //Soluciones reales
    //Si no hay INDICARLO
    //Si hay soluciones dobles indicarlo

    if(Math.pow(b,2)-(4*a*c)<0){
        console.log("no existen soluciones reales");
    }

    let x1= (-b + (Math.pow(b,2)-(4*a*c)))/(2*a);
    let x2= (-b - (Math.pow(b,2)-(4*a*c)))/(2*a);

    if(x1===x2){
        console.log(`Solución doble: ${x1} `);
        
    }

    return {
        resultado1:x1,resultado2:x2
    }

}

//bucle del factorial con while
function factorialWhile(num){
        if(num<1) {return};
        let b=1;
        while(num>1){
            b=num*b;
            num--;
        }

        return b;
    }

    //bucle del factorial recursivo
    function factorialRecursivo(num){
        if(num<1){
            return;
        }else if(num===1){
            return 1;
        }
        return num*factorialRecursivo(num-1);
    }
    //const factorial = n => n===0||n===1?!:n*factorial(n-1); esta solucion es 
    //con funciones arrow y recursividad
    //ejercicio dni 

function calcularDNI(dni){
    
    if(typeof(dni)!='number'){
        console.log("error no es un numero");
        return;
    }

    if(String(dni).length!=8){
        console.log("error no tiene la longitud correcta");
        return;
    }
    let letras="TRWAGMYFPDXBNJZSQVHLCKET";
    let posicion = dni%23;
    let letraDNI=letras.substring(posicion,posicion+1);
    return dni+letraDNI;



}




console.log(segundoGrado(1,1,-5));
console.log(factorialWhile(5));
console.log(factorial(5));
console.log(factorialRecursivo(5));
console.log(calcularDNI(77393786));
