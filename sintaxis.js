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

console.log("============================ Funciones especiales en Tipos De datos ============================")

// String
let stringTest = "prueba de, de D"
// Length
console.log("Longitud String: ", stringTest.length)
// Slice
console.log("Separar String: ", stringTest.slice(-5))
// substring
console.log("Separar String: ", stringTest.substring(7,9))
// substr -deprecado para futuras versiones
console.log("Separar String: ", stringTest.substr(1,3))
// replace
console.log("Reemplazar String: ", stringTest.replace("de","para"))
// replace insensitive (reg()i)
console.log("Reemplazar String: ", stringTest.replace(/DE/i,"hola"))
// replace globalmatch (reg()g)
console.log("Reemplazar String: ", stringTest.replace(/DE/ig,"hola"))
// replaceAll
console.log("Reemplazar String: ", stringTest.replaceAll("de","hola2"))
// LowerCase
console.log("Cambiar Minúscula String: ", stringTest.toLowerCase())
// UpperCase
console.log("Cambiar Mayúscula String: ", stringTest.toUpperCase())
// Concatenar
console.log("Concatenar  String: ", stringTest+" Esto es concatenado")
console.log("Concatenar  String: ", stringTest.concat(" Esto es concatenado con Concat ", 2))
// Trim
console.log("Quitar Espacios String: ", ("   "+stringTest+" Esto es concatenado  ").trim()+"1")
// TrimStart
console.log("Quitar Espacios  String: ", " D ".trimStart()+stringTest+" Esto es concatenado  ".trimStart()+"1")
// TrimEnd
console.log("Quitar Espacios  String: ", " D ".trimEnd()+stringTest+" Esto es concatenado  ".trimEnd()+"1")
// Padding
// padStart 0005 0051
let factura = "51"
console.log("Padding String: ", factura.padStart(4,"0") )
// padEnd
let tc = "5113563516516516516"
let cardin = tc.substring(undefined,4)
console.log("Padding String: ", cardin.padEnd(tc.length, "x") )
// Extract Characters
console.log("Extraer Caracter: ", stringTest.charAt(1) )
console.log("Extraer Caracter: ", stringTest.charAt(50) )
console.log("Extraer Caracter: ", stringTest.charCodeAt(1) )
console.log("Extraer Caracter: ", stringTest[1] )
console.log("Extraer Caracter: ", stringTest[50] )
// Split
let fecha = "2023-04-14 21:06:00"
console.log("Separar String: ", fecha.split(" ")[0].split("-")[0] )
// IndexOf
console.log("Index String (primer match): ", stringTest.indexOf("de") )
console.log("Index String (primer match): ", stringTest.indexOf("de",8) )
// lastIndexOf 
console.log("Index String (ultimo match): ", stringTest.lastIndexOf("de") )
// Search 
console.log("Busqueda String: ", stringTest.search(/DE/i) )
// Match 
console.log("Busqueda String: ", stringTest.match(/DE/ig) )
// MatchAll 
console.log("Busqueda String: ", stringTest.matchAll("de") )
// Includes 
console.log("Busqueda String: ", stringTest.includes("de") )
// StartsWith 
console.log("Busqueda String: ", stringTest.startsWith("prueba") )
console.log("Busqueda String: ", stringTest.startsWith("de", 7) )
// EndsWith 
console.log("Busqueda String: ", stringTest.endsWith("D") )
console.log("Busqueda String: ", stringTest.endsWith("de", 9) )
// Caracteristicas 
let textMultiLine = `
Hola
Como 
Estas
`
console.log("Busqueda String: ", textMultiLine )
let quotes = `"Hola" esto deberia estar en 'comillas"`
console.log("Busqueda String: ", quotes )
let yearsOld = 15
console.log("Busqueda String: ", `Yo tengo ${yearsOld} y además me gusta jugar futbol`)