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

// Objetos en TS

// Definición

const ejmObj : {prop1: string, prop2: number, prop3: boolean} = {
    prop1: "Un string",
    prop2: 1,
    prop3: true
}

// Infiriendo el tipo de dato del objeto

const inferenceObj = {
    prop1: "String",
    prop2: function () {},
    prop3: false
}

console.log(inferenceObj)
inferenceObj.prop1 = "Esto es un string modificado"
console.log(inferenceObj)
// inferenceObj.prop2 = 1

// Propiedades opcionales

// // Ejemplo de definición de propiedades sin asignación erronea
// const carro4 : {tipo: string, cilindraje: number} = {
//     tipo: "Camioneta",
// }

const carros1 : {tipo: string, cilindraje?: number, descripcion?: object} = {
        tipo: "Camioneta",
    }
console.log(carros1)
carros1.cilindraje = 1600
carros1.descripcion = {
    ruedas:4,
    puertas: 3
}
console.log(carros1)

// Indexación de objetos

// puede ser usada para objetos sin propiedades definidas

const motos1: { [index: string]: string} = {}
console.log(motos1)
motos1.bmw = "S1000R"
motos1.yamaha = "M1"
motos1.ducati = "Streetfighther"
console.log(motos1)


// ENUMS
// Son una clase especial de datos qu representan un grupo de constantes
// Los enums solo tiene 2 tipos de datos disponibles, string y number

// Enums numéricos
// Si uno definie un enum sin inicializar, este se volverá por defecto 0 para el primer valor y añadira 1 a cada valor que se sume

enum Coordenadas {
    Norte,
    Occidente,
    Oriente,
    Sur
}
let coordenadasNorte = Coordenadas.Norte
console.log(coordenadasNorte)
console.log(Coordenadas)
coordenadasNorte = 2
console.log(coordenadasNorte)
// No se puede cambiar
// coordenadasNorte = "Norte"

enum Coordenadas1 {
    Norte = 3,
    Occidente,
    Oriente,
    Sur
}
console.log(Coordenadas1)

enum StatusOk {
    Ok = 200,
    Created = 201,
    Reset = 205,
    Reported = 208
}
console.log(StatusOk)
// Acceder por su propiedad
console.log(StatusOk.Ok)
// Acceder por su valor
console.log(StatusOk[200])


// Enums de tipo string

enum StatusString {
    Ok = "OK 200",
    Created = "Created OK",
    Reset = "Reset Completed",
    Reported = "Reported"
}
console.log(StatusString.Ok)

// Aliases, permiten definir tipos de datos con nombres personalizados
// Se pueden usar con tipos de datos primitivos con strings o numbers, o se pueden dar contipos de datos más complejos como obj, arrays

type CarDescr = object
type CarType = string

const descripcion: CarDescr = {
    ruedas:4,
    puertas: 3
}

// Interfaces, funcionan similar a los aliases pero con objetos


interface DescripVehiculo {
    ruedas: number,
    traccion: string,
    combustible: string
}

interface Carros {
    tipo: string,
    cinlidraje: number,
    description: DescripVehiculo
}

const carroDesc: DescripVehiculo =  {
    ruedas: 5,
    traccion: "trasera",
    combustible: "Diesel"
} 

const carrosInterface: Carros = {
    tipo: "Camioneta",
    cinlidraje: 3000,
    description: carroDesc
}


interface Motos {
    tipo: string ,
    cilindraje: number,
    torque: string,
    marca: string,
    descripcion: DescripVehiculo
}
const motosDescript: DescripVehiculo = {
    ruedas: 2,
    traccion: "Cadena",
    combustible: "Gasolina+Aceite"
}

const motosInterface: Motos = {
    tipo: "2T",
    cilindraje: 175,
    torque: "25NM",
    marca: "Yamaha",
    descripcion:motosDescript
}

const motosSinInter:{
    tipo: string ,
    cilindraje: number,
    torque: string,
    marca: string,
    descripcion: object
} = {
    tipo: "2T",
    cilindraje: 175,
    torque: "25NM",
    marca: "Yamaha",
    descripcion:{
        ruedas: 2,
        traccion: "Cadena",
        combustible: "Gasolina+Aceite"
    }
}
const motosSinInter2:{
    tipo: string ,
    cilindraje: number,
    torque: string,
    marca: string,
    descripcion: object
} = {
    tipo: "2T",
    cilindraje: 175,
    torque: "25NM",
    marca: "Yamaha",
    descripcion:{
        ruedas: 2,
        traccion: "Cadena",
        combustible: "Gasolina+Aceite"
    }
}

// Union Type, permite definir más de un tipo de dato

function unionExample (param: string | number) {
    return param
}

console.log(unionExample(123))
console.log(unionExample("Texto"))

let varUnion: string|object

varUnion = "Hola Texto"
console.log(varUnion)
varUnion = {
    ejemplo:"Esto es un objeto"
}
console.log(varUnion)

// Posibles errores haciendo uso del Union

// function errorUnionTest(param: string | number){
//     console.log(param.toUpperCase())
// }

// Funciones en TS
// En TS se debe especificar el tipo de argumentos que se ingresan a la función y el tipo de dato del return

function testFunc(): number {
    return new Date().getTime()
}
console.log(testFunc())

// Void Return
function testFunc1(param: string): void {
    console.log(param)
}
console.log(testFunc1("Hola Clase"))

// Argumentos opcionales
function testFunc2(param: string, param2?:number): void {
    console.log(param, param2)
}
testFunc2("Hola Clase", 20)

// Argumentos con valor por defecto
function testFunc3(param: string, param2:number = 10): void {
    console.log(param, param2)
}
testFunc3("Hola Clase")

// Argumentos Rest

function testFunc4(param: number, param2:number = 10, ...rest: number[]): number {
    return param + param2 + rest.reduce((p, c) => p - c,0)
}
console.log(testFunc4(1, 2, 3, 4))

function testFunc5(param: number, param2:number = 10, ...rest: string[]): void {
    console.log( param + param2,  rest[0], rest[1])
}

testFunc5(1, 2, "Carlos")

// Funciones con alieses

type AliasesFuncType = (value: string) => object

const aliasesFunc: AliasesFuncType = function (value) {
    const obj = {
        texto:value
    }
    return obj
}

console.log(aliasesFunc("BackEnd"))
const aliasesFunc2: AliasesFuncType = function (value) {
    const obj = {
        texto:value,
        valores: value.split("")
    }
    return obj
}
console.log(aliasesFunc2("BackEnd"))
