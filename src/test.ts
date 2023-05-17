console.log("============================ TIpos de datos ============================")

// Tipos de datos básicos TS son los mismos que para JS number, boolean, string

// Asignación

// Explicita
let nombre: string = "Carlos"
console.log(nombre)

// Implicita

let nombre2 = "Carlos2"
console.log(nombre)

// No se puede cambiar el tipo de dato una vez se encuentra definida la variable.
// nombre = 123
// nombre2 = 123

// Tipos de datos especiales

// ANY

// TypeScript  a veces no puede inferir de forma correct el tipo de dato.
const jsonType = JSON.parse("21")
console.log(typeof jsonType)

let testDeclare
testDeclare = "Carlos"
testDeclare = 213
console.log(typeof testDeclare)
// El tipo de dato any es un tipo de dato que puede ser cualquier tipo de dato y nos devuelve al de JS
// Pero se puede utilizar este tipo de dato para obtener errores

// UNKNOWN

// Tiene un comportamiento de reasignaciónd de tipo al igual que any, pero limita el cambio de tipo a la hora de acceder a valor de una propiedad,
// que no corresponda a tipo unknown

let testUnknown: unknown = 1
testUnknown = "Carlos"
testUnknown ={
    runANonExistendMethod: () => {
        console.log("Este es el mejor curso")
    }
} as { runANonExistendMethod: ()=>void}

console.log(typeof testUnknown)

// Arrays
// TS tiene una forma específica de escribir array
// Definición, siempre debe ser explicita, porque no puede exisitr un array de tipo any
const motos: string[] = []
console.log(typeof motos)

// para la asignación valores para este ejemplo en particular, debe hacer con datos de tipo string
motos.push("S1000R")
motos.push("Africa Twin")
console.log(motos)
// // Siempre se debe mantener la consistencia del tipo de dato del arrya
// motos.push(1000)

// Array con readonly

const carros: readonly string[] = ["M4", "A200", "Q8"]
console.log(carros)
// Cuando el array se define con readonly, no es posible hacer modificaciones sobre los valores de la constante, solo se puede leer la data.
// carros.push()

// Definición implicita con asignación de datos sobre el array
const numeros = [1, 2, 3]
console.log(typeof numeros)
// VAMO' A JAKEAR
// No se puede asignar a una variable definida de forma explicita un tipo de dato diferente al de la definicíon.
// let getNumber:string = numeros[1] 
let getNumber = numeros[1] 
let getNumber2: Number = numeros[1] 
console.log(typeof getNumber2)

// Tuplas
// Es un tipo de array que permite asignar diferentes tipos de datos, pero con una incialización previa

let tupla: [number, string, string, boolean]
tupla = [1, "hola1", "1", true]
console.log(typeof tupla)
tupla.push("test")
console.log(tupla)
tupla.push(1)
console.log(tupla)
// No se puede acceder a los valores que se insertan fuera de la definción de la tupla, por que son de tipo undefined
// console.log(tupla[4])

// Tuplas readonly
let tupla1: readonly [number, string, string, boolean] = [1, "hola1", "1", true]
console.log(tupla1)
// La tupla en modo readonly solo permite leer los valores
// tupla1.push(1)


// Tuplas nombradas
const datos: [x:number, y:number] = [20, 21]
const [x] = datos
console.log(x)
console.log(datos[0])