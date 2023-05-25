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
console.log(motosInterface)
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


// Castear o casting
// sirve para poder trabajar con tipos de datos que quizá no tenga las propiedades del tipo de dato original
// Con la palabra as yo puede difinir que un tipo de dato como any, unknown se comporten como el tipo de dato deseado
// Permite usar los atributos y propiedades de una variable que se percibe como un tipo de dato específico
let castVar: unknown = "Esto es cast var"
console.log((castVar as string).length)
// No se puede castear una variable con un tipo de dato que no corresponda
let numberCast: unknown = 10
console.log((numberCast as string).length)

// Casting <>, esta forma no se puede usar en REACT o con los comandos de TSX
let castVarz: unknown = "Esto es otr cast var"
console.log((<string>castVarz).length)

// Forzar el casting
let castVarForce = "5"
console.log(((castVarForce as unknown) as string).length)


// Clases TS

// Definición

class ClassDef {
    // Variable interna
    private nombre: string
    // Constructor
    public constructor(nombre: string){
        this.nombre = nombre
    }
    public getName(): string {
        return this.nombre
    }
}

const objClase = new ClassDef("BackEnd")
console.log(objClase.getName())


// Propiedades de los parámetros

class ClassParams {
    public constructor(private nombre: string) {}

    public getName(): string {
        return this.nombre
    }
    public setName(value:string): void {
        this.nombre = value

    }
}

const objParams = new ClassParams("BackEnd")
console.log(objParams.getName())
objParams.setName("BackEnd Reloaded")
console.log(objParams.getName())

// ReadOnly,  las variables internas son solo de lectura, como si fuese una constante

class ClassParamsOnly {
    public constructor(private readonly nombre: string) {}

    public getName(): string {
        return this.nombre
    }
    // No se puede modificar el valor de un readonly
    // public setName(value:string): void {
    //     this.nombre = value

    // }
}

// Interfaces con herencia
// Interfaz anidad
interface CursoBack {
    estudiantes: number
    nombre: string
    modulos: Modulos
}
interface Modulos {
    tipo: string
    nombreModulos: string
    tiempo: number
}

// Herencia entre interfaces

interface CursoBackHerecnia extends Modulos {
    estudiantes: number
    nombre: string
}

const objInterHerencia: CursoBackHerecnia = {
    estudiantes:31,
    nombre: "Curso BackEnd",
    tipo: "On Line",
    nombreModulos:"TS",
    tiempo:71
} 
console.log(objInterHerencia)


// Interfaz para clase clase
interface ObjectsClassInterfaz {
    nombre: string,
    getName: () => string
}

class ClassInterfaz implements ObjectsClassInterfaz, Modulos {
    nombre : string
    tipo: string
    nombreModulos: string
    tiempo: number
    constructor(nombre:string) {
        this.nombre = nombre
        this.tipo = "CualquierCoas"
        this.nombreModulos ="TypeScript"
        this.tiempo =71
    }

    public getName(): string {
        return this.nombre
    }
    public setName(value:string): void {
        this.nombre = value
    }
}

// Herencia TS
class ClassHerencia extends ClassInterfaz {
    public constructor(nombre: string){
        super(nombre)
    }
}

const objHerencia = new ClassHerencia("Test")
console.log(objHerencia.getName())
console.log(objHerencia.nombreModulos)
objHerencia.setName("Otro test")
console.log(objHerencia.getName())


// Polimorfismo 
// La palabra reservada override me permite asegurarme que yo esté sobreescribiendo un método heredado de la clase padre y no creando
// un nuevo método, ya que no sería polimorfismo
class ClassPolimorfismo extends ClassInterfaz {
    public constructor(nombre: string){
        super(nombre)
    }
    public override getName(): string {
        return this.nombre +" Algo de polimorfismo"
    }
}

const objPoli = new ClassPolimorfismo("Polimorfismo")
console.log(objPoli.getName())

// Clases Abstractas

abstract class ClassAbstract {
    public abstract getName(): string

    public setNewName(): string {
        return this.getName()+" Algo más"
    }
}

class ClassAbstractHerencia extends ClassAbstract {
    public constructor (protected readonly nombre: string){
        super()
    }
    public getName(): string {
        return this.nombre
    }
}

const objAbstract = new ClassAbstractHerencia("Abstracción")
console.log(objAbstract.getName())
console.log(objAbstract.setNewName())


// Utility Types
// Esto me permite manipular varaibles y tipos de datos a través de una definición de interfaz

// Tipos de utility types

// Partial, es una definición de tipo de datos donde las propiedades son opcionales en su definición
interface Curso {
    nombre:  string
    estudiantes: number
    modulos:number
}

let cursoPartial: Partial<Curso> = {}
console.log(cursoPartial)
cursoPartial.nombre = "CursoBack" 
console.log(cursoPartial)

let cursoPartial2: Partial<Curso> = {}
cursoPartial2.modulos = 15
console.log(cursoPartial2)

// Esto hace lo mismo que arriba, sin embargo lo hace para un solo objeto, bajo la otra definición se puede extender a más objetos.
const cursoX: {nombre?:string, estudiantes?:number, modulos?: number} = {} 

// Required, todas las propiedades del objeto son requeridas
interface Vehiculos {
    tipo:  string
    ruedas: number
    cilindraje?:number
}
// Propiedades de objetos opcionales a través de la interfaz
const carroInterface: Vehiculos = {
    tipo:"Carro",
    ruedas: 4
}
// Propiedades de objetos requeridos así la interaz diga que pueden ser opcionales
const carroRequired: Required<Vehiculos> = {
    tipo:"Carro",
    ruedas: 4,
    cilindraje: 1200
    
}

// Record, me permite definir un objeto con un tipo de llave y valor especifico.
// { [ key: number ]: string }
const diasSemana :  Record<number, string> = {
    0: "Lunes",
    1: "Martes",
    6: "Domingo"
}
console.log(typeof diasSemana)

// Omit, que me permite remover promiedades de un objeto

const carroTipo: Omit<Vehiculos, 'ruedas' | 'cilindraje'> = {
    tipo:"Carro"
}

// Pick, me permite seleccionar las propiedades de la interfaz que quiero usar

const carroPick: Pick<Vehiculos, 'ruedas' | 'cilindraje'> = {
    ruedas: 4,
    cilindraje:1200,
}
// Exclud, remover la unión de tipos

type TipoData = string | number | boolean

const varTest: Exclude<TipoData, number> = false

// Return Type, extrae el tipo de dato que retorna la función

type Coordenadas20 = () => { x: number, y: number}

const coordenada: ReturnType<Coordenadas20> = {
    x:10,
    y:20
}
console.log(coordenada)

// Parameters, esto extrae el tipo de dato  de los argumentos de una función

type Coordenadas30 = ( p: { x: number, y: number}) => void

const coordenada3: Parameters<Coordenadas30>[0] = {
    x: 30,
    y: 50
}

const  testParams: Coordenadas30 = function (p:{x: number, y:number}){
    console.log(p.x, p.y)
}
const ptest = {
    x:10,
    y:20
}
testParams(ptest)



// keyof obtner explicitamente el valor de la key de un objeto

interface Carros50 {
    ruedas: number
    tipo: string
    perro: string
}

let carro50: Carros50 = {
    ruedas: 10,
    tipo: "Camion",
    perro: "Hola"
}

function imprimirPropiedad ( carro: Carros50, propiedad: keyof Carros50){
    return `Este es el tipo de carro ${carro[propiedad]} y esta la propiedad ${propiedad}`
}

console.log(imprimirPropiedad( carro50, "tipo"))


type Mappers = { [key: string]: unknown }

function MapFucn (prop: keyof Mappers, value: string): Mappers {
    return {[prop]: value}
}

const funcKeyof = MapFucn("name", "test")
console.log(funcKeyof)


// Null y Undefined 

// Tipos de datos null y undefined 

let testNull: string | undefined | null = null
testNull = "Null"
testNull = undefined

// Cuando se habilita la opción de strictNullChecks en el tsconfig.json de TS, este require que los valores o resultados que se den para un proceso,
// se encuentren declarados como undefined

// Encadenamiento opcional(?) (JS) para manejar los null, esto permite acceder a las propiedades de un objeto que quiza exista o no.

interface CursoBack2 {
    horario: string
    modulosTest?: {
        intensidad: number
    }
}
type TestOKI =  number | undefined
function imprimirIntensidad(curso: CursoBack2){
    const intensidad = curso.modulosTest?.intensidad
    console.log(typeof intensidad)
    if ( intensidad === undefined ){
        console.log("No se definió intesidad")
    } else {
        console.log("La intensidad horaria para los modulos es en promedio: "+ intensidad)
    }
}

let cursoBack: CursoBack2 = {
    horario:"7:30",

}
imprimirIntensidad(cursoBack)

// El nulo opcional (??) (Nullish Coalescence), si es null va a tomar la segunda opción 

function AgeFunc( age?: number | null | undefined)  {
    return age ?? "Esto no es un number"
}

console.log(AgeFunc())

// Validación de null (!) que pueden tener los resultados en caso que sea un valor o un undefined

function getName2(value:string | undefined ): string  | undefined {
    return value
}
let getNameValue = getName2("undefined")
console.log(getNameValue!.length)