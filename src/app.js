
// dado un numero, recorre todos hasta llegar hasta el y cuando sean mas de 2 digitos, sumalos entre sí.

// recorreré el rango de numeros (for) y le diré que si cumple y el numero es mayor de 2 digitos, que me los convierta a string



let numeroFinal = 55
let numeroToString
let numeroA
let numeroB
let stringASplit

// mi funcion tendrá un parametro que será el ultimo numero del bucle (la condicion) y siempre que ese numero tenga 2 o mas digitos, los sumará entre si.
// o sea el fallo está en que cuando le paso el parametro no hace el bucle ni recorre, solo me suma a y b


// tengo un bucle, dentro de mi bucle le condiciono y le digo que en cada iteración que se cumpla una condición, me lo separe en dos elementos de un array convirtiendolo en letra, y luego accedo a esas posiciones del array guardandolas en numero1 y numero2 y pasando las a numero, pero a la hora de sumarlos entre si en cada iteración ahi es donde falla

const suma = (elNumero) => {
    for (let i = 11; i <= elNumero; i++) {
        if (i >= 10) {
            let numeroToString = i.toString();
            // console.log("los numeros que cumplen la condicion", numeroToString);
            stringASplit = numeroToString.split("")
            numeroA = parseInt(stringASplit[0])
            numeroB = parseInt(stringASplit[1])
            console.log(`${i} ---> ${numeroA} + ${numeroB} tendrá como resultado ->`, numeroA+numeroB);
            
        }
    }
}

suma(numeroFinal)







