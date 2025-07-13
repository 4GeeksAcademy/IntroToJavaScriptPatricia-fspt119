// VARIABLES

//hola, soy tu codigo 

var miVariableVar = "Valor de VAR"
// En JavaScript antes de ejecutar el codigo, su motor hace una primera pasada (fase de compilación) y en ella detecta declaraciones con var y las eleva, esto quiere decir que ya sabe que existe desde el minuto 0 en esa primera pasada y aunque no nos muestra su valor al saber que existe nos deja imprimirla en consola sin error (nos muestra undeffined). A esto se le llama hoisting y por eso se dejó de usar.

let miVariableLet = "Valor de LET"
// es una variable de bloque, no se puede volver a declarar en el mismo bloque, pero se le puede reasignar el valor
let tiempo = "lluvioso"
tiempo = "otoñal"
// console.log("Hoy hace un dia: ", tiempo);

const miVariableConst = "Valor de CONST"
// es una variable de bloque, no se puede volver a declarar y no se puede reasignar su valor (si es primitivo) si es de referencia si podrá sufrir modificaciones porque no cambia su valor si no el contenido del valor

// TIPOS DE DATOS  --> primitivos y de referencia
// primitivos: string, number, boolean (null y undeffined)
// string -> palabra
let miString = "soy un string"
// number -> un entero (un numero)
let miNumber = "19"
// booleano -> true o false
let miBooleano = true
// null -> quiere decir que el valor es nulo pero que si tiene valor, sirve para limpiar un valor o para dejarlo vacío intencionadamente
let miNull = null
// undeffined -> ha sido declarada pero sin valor asignado
let miUndeffined 

// DE REFERENCIA --> arrays, objetos (y funciones)
// array -> lista ordenada también conocida como arreglo. puede tener como elementos todo tipos de datos tanto primitivos como de referencia
const frutas = ["pera", "manzana", 3, true, [1,2,3], {nombre: "lista de frutas"}] // esto sería un array perfectamente válido. se empieza a contar en la posición 0. Dentro de los arrays tenémos los métodos (son funciones espeficas para arrays que tienen una funcionalidad en particular)
frutas.push("piña") // añade el elemento al final de la lista
frutas.unshift("platano") // añade el elemento al inicio de la lista
frutas.pop() // quita el ultimo elemento
frutas.shift() // quita el primer elemento
const resultado = frutas[4].map(elemento => elemento * 2)
const nuevoArray = [...frutas]
nuevoArray.push("esto es lo nuevo")
// console.log(frutas);

// console.log("este es el array copiado con spread ([...array])->>", nuevoArray);

// objetos -> conjuntos de datos no ordenados con una sintaxis en espeficio -clave : valor-

const miObjeto = { nombre: "Patricia"}
const miObjeto2 = miObjeto // no creo una copia, me referencio al primer valor
miObjeto2.nombre = "Luisa" // por eso me deja acceder a .nombre aunque en un primer momento el objeto está asignado a la variable miObjeto

const persona = {
    nombre : "Patricia",
    apellido : "Alvarez",
    otros_datos : {
        profesion : "programadora",
        cohorte_actual : "fspt119",
        cursos : [75, 100, 119]
    }
}

persona["nacimineto"] = "Asturias"
let clave = "profesion"
persona[clave] = "TA"


// OPERADORES -> aritmeticos, de comparación, logicos

// aritmeticos ----> +, -, *, /, % resto y el ** potencia
// el resto es lo que sobra de una operación matématica, por eso cuando queremos saber si un numero es par hacemos % porque lo que estamos diciendo es si el resto es 0 será par
// potencia es 4 * 2 y el restulado otra vez * 2
let potencia = (4 ** 2)


// comparación --> == compara el valor, === compara valor y tipo, != lo contrario, > mayor que, < menor que, =< >=
// ¡¡¡¡ Atencion!!!! el = no iguala, ASIGNA!!!

// logicos -> &&, || y !

let edad = 16
let entrada = false

// if ( edad >= 18 || entrada) {
//     console.log("puedes pasar")
// } else {
//     console.log("estas fuera amigo");
    
// }


//bucles -> estructura  --- inicialización, condicion, accion

// let numero = 20
// let numeroMenor = 3
// for (let i = numeroMenor; i <= numero; i++){
//     console.log(i);
// }

let miLista = [1, 2 , 3, 15, 26, 82, 700]

// for ( let cifra of miLista)
// {
//     console.log(cifra);
    
// }

// FUNCIONES --> una funcion es un bloque de codigo que queremos ejecutar sin escribirlo de nuevo
// funcion tradicional

function saludar(nombre) {
    console.log(`Hola ${nombre}, como estas?`);
    
}

// funcion flecha(arrowfunction) -> es una variable CONST a la que le asignamos una funcion anonima (sin nombre) tambien conocida como la call back function
const miArrowFunction = (num1, num2) => {
    if (num1 > 10){
        return num1 + num2
    } 
    if (num2 < 10) {
        return num1 - num2 
    } 
    return "mejor intentalo de nuevo"; 
}

console.log(miArrowFunction(3, 20));
