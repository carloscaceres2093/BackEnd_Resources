// Declaración
// console.log("============================ DECLARACIÓN ============================")
// const constante = "Ejemplo COnstante"
// let variable1 = 3
// var variable2 = 2
// var variable2 = 3;
// console.log(variable2)
// {
//   let varaibleTest1 = 1;
//   var varaibleTest12 = "Esto es una prueba"
//   let variable2 = "Texto";
//   let variable1 = 1;
//   console.log(variable2)
// }

// console.log(variable2)

// console.log("============================ OPERADORES ============================")
// let increment = 8 
// let decrement = 8 
// //SUma
// console.log(1+2)
// //Resta
// console.log(3-2)
// //Multiplicación
// console.log(3*2)
// //Divsión
// console.log(8/2)
// //Potenciación
// console.log(2**3)
// // Módulo
// console.log(7%2)
// increment++ // -> increment = increment+1
// //Incremento
// console.log(increment)
// decrement-- // -> decrement = decrement-1
// //Decremento
// console.log(decrement)

// let x = 3;
// const y = x++; //x++ -> x = x+1

// console.log("esto es x: ", x, "esto es y: ",y)
// let a = 3;
// const b = ++a
// console.log("esto es a: ", a, "esto es b: ",b)

// let n = 3;
// const m = n+1

// {
//   let n = 5 

//   n = "yo"
// }
// n = 1
// let o = 5
// o = 3
// var v = 1
// var v = 2
// v = 2

// console.log("esto es m: ", m, "esto es n: ",n)

// console.log("============================ Asignación ============================")
// // Asiganación
// let n = 5
// // Abreviación
// // Suma
// n += 8 // n = n + 8
// // Resta
// n -= 8 // n = n - 8
// // Multi
// n *= 8 // n = n * 8
// // Division
// n /= 8 // n = n / 8
// // Modulo
// n %= 2 // n = n % 2
// // Potencia
// n **= 2 // n = n ** 2

// console.log("============================ Tipos De datos ============================")

// // String
// var x = "String"
// console.log(x)

// // Number
// x = 16
// console.log(x)
// x = 16.5
// console.log(x)
// // Bigint
// x = BigInt(16)
// console.log(x)
// // Boolean
// x = true
// console.log(x)
// // Undefined
// let ud 
// console.log(ud)
// ud = undefined
// // Null
// x = ""
// console.log(x)
// x = null
// console.log(x)

// // Object

// // Object
// const persona = {nombre:"John", edad:8, apellido:"Manizales"}
// console.log(persona)
// console.log("Tipo Dato:", typeof persona)
// // Array
// const marcasCarros = ["Volvo", "BMW", "Mercedes", 8]
// console.log(marcasCarros)
// console.log("Tipo Dato:", typeof marcasCarros)
// // Date
// const dateE =  new Date()
// console.log(dateE)
// const dateEA =  new Date("2023-04-03")
// console.log(dateEA)
// console.log("Tipo Dato:", typeof dateEA)

// console.log("============================ Funciones especiales en Tipos De datos ============================")

// // String
// let stringTest = "prueba de, de D"
// // Length
// console.log("Longitud String: ", stringTest.length)
// // Slice
// console.log("Separar String: ", stringTest.slice(-5))
// // substring
// console.log("Separar String: ", stringTest.substring(7,9))
// // substr -deprecado para futuras versiones
// console.log("Separar String: ", stringTest.substr(1,3))
// // replace
// console.log("Reemplazar String: ", stringTest.replace("de","para"))
// // replace insensitive (reg()i)
// console.log("Reemplazar String: ", stringTest.replace(/DE/i,"hola"))
// // replace globalmatch (reg()g)
// console.log("Reemplazar String: ", stringTest.replace(/DE/ig,"hola"))
// // replaceAll
// console.log("Reemplazar String: ", stringTest.replaceAll("de","hola2"))
// // LowerCase
// console.log("Cambiar Minúscula String: ", stringTest.toLowerCase())
// // UpperCase
// console.log("Cambiar Mayúscula String: ", stringTest.toUpperCase())
// // Concatenar
// console.log("Concatenar  String: ", stringTest+" Esto es concatenado")
// console.log("Concatenar  String: ", stringTest.concat(" Esto es concatenado con Concat ", 2))
// // Trim
// console.log("Quitar Espacios String: ", ("   "+stringTest+" Esto es concatenado  ").trim()+"1")
// // TrimStart
// console.log("Quitar Espacios  String: ", " D ".trimStart()+stringTest+" Esto es concatenado  ".trimStart()+"1")
// // TrimEnd
// console.log("Quitar Espacios  String: ", " D ".trimEnd()+stringTest+" Esto es concatenado  ".trimEnd()+"1")
// // Padding
// // padStart 0005 0051
// let factura = "51"
// console.log("Padding String: ", factura.padStart(4,"0") )
// // padEnd
// let tc = "5113563516516516516"
// let cardin = tc.substring(undefined,4)
// console.log("Padding String: ", cardin.padEnd(tc.length, "x") )
// // Extract Characters
// console.log("Extraer Caracter: ", stringTest.charAt(1) )
// console.log("Extraer Caracter: ", stringTest.charAt(50) )
// console.log("Extraer Caracter: ", stringTest.charCodeAt(1) )
// console.log("Extraer Caracter: ", stringTest[1] )
// console.log("Extraer Caracter: ", stringTest[50] )
// // Split
// let fecha = "2023-04-14 21:06:00"
// console.log("Separar String: ", fecha.split(" ")[0].split("-")[0] )
// // IndexOf
// console.log("Index String (primer match): ", stringTest.indexOf("de") )
// console.log("Index String (primer match): ", stringTest.indexOf("de",8) )
// // lastIndexOf 
// console.log("Index String (ultimo match): ", stringTest.lastIndexOf("de") )
// // Search 
// console.log("Busqueda String: ", stringTest.search(/DE/i) )
// // Match 
// console.log("Busqueda String: ", stringTest.match(/DE/ig) )
// // MatchAll 
// console.log("Busqueda String: ", stringTest.matchAll("de") )
// // Includes 
// console.log("Busqueda String: ", stringTest.includes("de") )
// // StartsWith 
// console.log("Busqueda String: ", stringTest.startsWith("prueba") )
// console.log("Busqueda String: ", stringTest.startsWith("de", 7) )
// // EndsWith 
// console.log("Busqueda String: ", stringTest.endsWith("D") )
// console.log("Busqueda String: ", stringTest.endsWith("de", 9) )
// // Caracteristicas 
// let textMultiLine = `
// Hola
// Como 
// Estas
// `
// console.log("Busqueda String: ", textMultiLine )
// let quotes = `"Hola" esto deberia estar en 'comillas"`
// console.log("Busqueda String: ", quotes )
// let yearsOld = 15
// console.log("Busqueda String: ", `Yo tengo ${yearsOld} y además me gusta jugar futbol`)


console.log("============================ Numbers ============================")
// 64 bit 
// Valor 52bits (0-51)  |||  Exponente 11bits (52-62)  ||| 1bit (63)

// Numbers

let intNum = 5
console.log("Int: ", intNum)
let floatNum = 3.14
console.log("Float: ", floatNum)
let sciNum = 753e10 
console.log("Notación científica: ", sciNum)
let floatSciNum = 753e-5
console.log("Notación científica float: ", floatSciNum)
let longNum = 999999999999999
console.log("Número de gran longitud: ", longNum)
let longNum15 = 9999999999999999
console.log("Número de gran longitud: ", longNum15)
let floatPrec = 0.2+0.1
console.log("Precisión Float: ", floatPrec)
let floatPrecFix = (0.2*10 + 0.1*10)/10
console.log("Precisión Float: ", floatPrecFix)

// Numbers + String
let numPlus = 10
let strNumPlus = "20"
console.log("Suma entre number y string: ", numPlus+strNumPlus)
console.log("Suma entre number y string: "+ numPlus+numPlus)
let strNumPlus2 = "5"
console.log("División entre strings: ", strNumPlus/strNumPlus2)
console.log("Multiplicación entre strings: ", strNumPlus*strNumPlus2)
console.log("Resta entre strings: ", strNumPlus-strNumPlus2)
console.log("Modulo entre strings: ", strNumPlus%strNumPlus2)
console.log("Modulo entre strings: ", strNumPlus**strNumPlus2)
// Not a Number NaN
let apple = "apple"
console.log("NaN: ", strNumPlus-apple)
// isNaN()
console.log("Validación NaN: ", isNaN(strNumPlus-apple))
console.log("Validación strings: ", isNaN(strNumPlus2))
console.log("Validación strings: ", isNaN(apple))
console.log("Tipo NaN: ", typeof NaN)
console.log("Modulo entre strings: ", 1 + NaN)
// Infinity
console.log("MásInfinito: ", Infinity)
console.log("Menos Infinito: ", -Infinity)
// hexadecimal
let hexaNum = 0xA0
console.log("Valor Hexadecimal: ", hexaNum)
//Conversión a String
let convertNum = 10
console.log("Conversión a String: ", convertNum.toString(16))
let objectNumber = new Number(10)
console.log("Objeto Number: ", typeof objectNumber)
console.log("Conversión a String: ", convertNum==objectNumber)
console.log("Conversión a String: ", objectNumber===objectNumber)

// BigInt
let bigIntNum = 9999999999999999n
console.log("Definición BigInt: ", bigIntNum)
let bigIntNumFun = BigInt("9999999999999999")
console.log("Definición BigInt: ", bigIntNumFun)
console.log("Tipo BigInt: ", typeof bigIntNumFun)
// BigInt Operation
let bigIntNum1 = 10n
let bigIntNum2 = 2n
console.log("Operación BigInt: ",  bigIntNum1/bigIntNum2)
console.log("Operación BigInt y Number: ",  bigIntNum1/BigInt(2))

// Propiedades y metodos
// Max/Min Number propierties 
let maxNum = Number.MAX_SAFE_INTEGER
console.log("Entero máximo: ", maxNum)
let minNum = Number.MIN_SAFE_INTEGER
console.log("Entero mínimo: ", minNum)
// Es entero isInteger()
console.log("Validación entero: ", Number.isInteger(10))
console.log("Validación entero: ", Number.isInteger(10.5))
// ToExponential() toFixed() toPrecision() -> string
let convertNumFunc = 10.54942
console.log("Exponential: ", convertNumFunc.toExponential(3))
console.log("Fixed: ", convertNumFunc.toFixed(3))
console.log("Precision: ", convertNumFunc.toPrecision(6))
//Valueof
let valueNum = 156
console.log("Valueof: ", valueNum.valueOf())
let objvalueNum = new Number(100)
console.log("Valueof object: ",  (objvalueNum).valueOf())
console.log("Objeto normal: ", objvalueNum)

// Conversion entre numbers
let intValueNum = "100.1"
console.log("Conversión float: ", parseFloat(intValueNum))
// Conversion entre numbers
let floatValueNum = 100.51
console.log("Conversión entero: ", parseInt(intValueNum))
console.log("Conversión entero: ", parseInt("101.1"))
// Conversion de fecha a Number  -> 01.01.1970 epoch
let dateToday = new Date()
console.log("Conversión fecha a milisegundos: ", Number(dateToday))


console.log("============================ Arrays ============================")
// Definición de un array
const motos = ["Pulsar", "Akt", "BMW", "Ducati"]
// Array Vacio
const motos2 = []
motos2[0] = "Pulsar"
motos2[3] = "Ducati"
console.log("Arrays: ", motos2)
motos2[3] = "Akt"
console.log("Arrays: ", motos2)
// Array new
const motos3 = new Array("Pulsar", "Akt", "BMW", "Ducati")
// Acceso a datos del array
console.log("Arrays: ", motos3[1])
motos3[5]=3
console.log("Arrays: ", motos3)

// Propiedades y métodos
// Longitud
console.log("Longitud Arrays: ", motos3.length)
// Order
console.log("Longitud Arrays: ", motos3.sort())
// Acceder al ultimos objetos 
console.log("Longitud Arrays: ", motos3[motos3.length-2])
// Añadir componentes al array
motos3.push("tvs")
console.log("Añadir datos Arrays: ", motos3)
motos3[motos3.length] = "Suzuki"
console.log("Añadir datos  Arrays: ", motos3)
// CUidado definición
//Array de una posición
const numbersTest = [5]
console.log("Arrays: ", numbersTest)
// Array de 5 Posiciones
const numbersTest2  = new Array(5)
console.log("Arrays: ", numbersTest2)

// Validar tipo array
// Validación isArray()
console.log("Tipo Array: ", Array.isArray(numbersTest))
//Validación instanceof
console.log("Tipo Array: ", numbersTest instanceof Array)