

// VARIABLES -> let, var y const

var variableVar = "Hola"

let variableLet = "Hola variable let"
variableLet = 9

const variableConst = "Hola variable Const"


// TIPOS DE DATOS -> primitivos y de referencia
// primitivos -> boolean, string, number (null y undeffined)
// de referencia -> arrays, funciones y objetos

// arrays o arreglos  -> van separados los elementos con comas, son listas ordenadas que empiezan en la posición 0

const frutas = [ "platanos", "naranjas"]


const frutas2 = [...frutas] // spread

// objetos -> estructuras de datos flexibles (pueden contener todo tipo de datos) y con estructura especifica clave: valor

const persona = {
    nombre: "Patricia",
    edad : 38,
    numerosFavoritos: [1,2,3],
    otroDatos : {
        nacimiento : "asturias",
        residencia : "Españita"
    }
}

persona.animal = "gatito"
persona["profesion"] = "programadora"


// OPERADORES -> aritmeticos, comparación y logicos 

// aritmeticos -> + - * / % **
// comparacion -> < >  == === !=
// logicos -> || && !

let edad = 18
let tieneCarnet = true

// if (edad >= 18 && tieneCarnet){
//     console.log("puede conducir"); 
// } else {
//     console.log("no puede conducir");
    
// }

// BUCLES -> 

for ( let i = 0; i < 5; i++) {

}
//  inicializacion ; condicion; accion
let numero = 5

// for (let i = 20; i >= numero; i--){
//     console.log(i);
// }

let array = [1, 2, 3]
let otroArray = [...array]

// for (let elemento of array){
//     console.log(elemento);
    
// }

// FUNCIONES 

function miFuncion (nombre) {
    console.log(`Hola fs pt 119, soy ${nombre}`);
}

const saludar = (nombre) => {
    return `Hola fs pt 119, soy ${nombre}`
}


console.log(saludar("Luchito"));
