// Declaración
// console.log("============================ DECLARACIÓN ============================")
// //Est es la denfinición  de una variable en JavaScript
// const constante = "Ejemplo Constante"
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
// //Esta es la denfinición  de asignación y operación bajo una abreviación de signos, sin tener que definir
// // la sentencia completa de asignación y operación.
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
// // Length Calcula La longitud completa del strgin
// console.log("Longitud String: ", stringTest.length)
// // Slice esta función me permite tomar ciertos datos del string
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


// console.log("============================ Numbers ============================")
// // 64 bit 
// // Valor 52bits (0-51)  |||  Exponente 11bits (52-62)  ||| 1bit (63)

// // Numbers

// let intNum = 5
// console.log("Int: ", intNum)
// let floatNum = 3.14
// console.log("Float: ", floatNum)
// let sciNum = 753e10 
// console.log("Notación científica: ", sciNum)
// let floatSciNum = 753e-5
// console.log("Notación científica float: ", floatSciNum)
// let longNum = 999999999999999
// console.log("Número de gran longitud: ", longNum)
// let longNum15 = 9999999999999999
// console.log("Número de gran longitud: ", longNum15)
// let floatPrec = 0.2+0.1
// console.log("Precisión Float: ", floatPrec)
// let floatPrecFix = (0.2*10 + 0.1*10)/10
// console.log("Precisión Float: ", floatPrecFix)

// // Numbers + String
// let numPlus = 10
// let strNumPlus = "20"
// console.log("Suma entre number y string: ", numPlus+strNumPlus)
// console.log("Suma entre number y string: "+ numPlus+numPlus)
// let strNumPlus2 = "5"
// console.log("División entre strings: ", strNumPlus/strNumPlus2)
// console.log("Multiplicación entre strings: ", strNumPlus*strNumPlus2)
// console.log("Resta entre strings: ", strNumPlus-strNumPlus2)
// console.log("Modulo entre strings: ", strNumPlus%strNumPlus2)
// console.log("Modulo entre strings: ", strNumPlus**strNumPlus2)
// // Not a Number NaN
// let apple = "apple"
// console.log("NaN: ", strNumPlus-apple)
// // isNaN()
// console.log("Validación NaN: ", isNaN(strNumPlus-apple))
// console.log("Validación strings: ", isNaN(strNumPlus2))
// console.log("Validación strings: ", isNaN(apple))
// console.log("Tipo NaN: ", typeof NaN)
// console.log("Modulo entre strings: ", 1 + NaN)
// // Infinity
// console.log("MásInfinito: ", Infinity)
// console.log("Menos Infinito: ", -Infinity)
// // hexadecimal
// let hexaNum = 0xA0
// console.log("Valor Hexadecimal: ", hexaNum)
// //Conversión a String
// let convertNum = 10
// console.log("Conversión a String: ", convertNum.toString(16))
// let objectNumber = new Number(10)
// console.log("Objeto Number: ", typeof objectNumber)
// console.log("Conversión a String: ", convertNum==objectNumber)
// console.log("Conversión a String: ", objectNumber===objectNumber)

// // BigInt
// let bigIntNum = 9999999999999999n
// console.log("Definición BigInt: ", bigIntNum)
// let bigIntNumFun = BigInt("9999999999999999")
// console.log("Definición BigInt: ", bigIntNumFun)
// console.log("Tipo BigInt: ", typeof bigIntNumFun)
// // BigInt Operation
// let bigIntNum1 = 10n
// let bigIntNum2 = 2n
// console.log("Operación BigInt: ",  bigIntNum1/bigIntNum2)
// console.log("Operación BigInt y Number: ",  bigIntNum1/BigInt(2))

// // Propiedades y metodos
// // Max/Min Number propierties 
// let maxNum = Number.MAX_SAFE_INTEGER
// console.log("Entero máximo: ", maxNum)
// let minNum = Number.MIN_SAFE_INTEGER
// console.log("Entero mínimo: ", minNum)
// // Es entero isInteger()
// console.log("Validación entero: ", Number.isInteger(10))
// console.log("Validación entero: ", Number.isInteger(10.5))
// // ToExponential() toFixed() toPrecision() -> string
// let convertNumFunc = 10.54942
// console.log("Exponential: ", convertNumFunc.toExponential(3))
// console.log("Fixed: ", convertNumFunc.toFixed(3))
// console.log("Precision: ", convertNumFunc.toPrecision(6))
// //Valueof
// let valueNum = 156
// console.log("Valueof: ", valueNum.valueOf())
// let objvalueNum = new Number(100)
// console.log("Valueof object: ",  (objvalueNum).valueOf())
// console.log("Objeto normal: ", objvalueNum)

// // Conversion entre numbers
// let intValueNum = "100.1"
// console.log("Conversión float: ", parseFloat(intValueNum))
// // Conversion entre numbers
// let floatValueNum = 100.51
// console.log("Conversión entero: ", parseInt(intValueNum))
// console.log("Conversión entero: ", parseInt("101.1"))
// // Conversion de fecha a Number  -> 01.01.1970 epoch
// let dateToday = new Date()
// console.log("Conversión fecha a milisegundos: ", Number(dateToday))


// console.log("============================ Arrays ============================")
// // Definición de un array
const motos = ["Pulsar", "Akt", "BMW", "Ducati"]
// // Array Vacio
// const motos2 = []
// motos2[0] = "Pulsar"
// motos2[3] = "Ducati"
// console.log("Arrays: ", motos2)
// motos2[3] = "Akt"
// console.log("Arrays: ", motos2)
// // Array new
// const motos3 = new Array("Pulsar", "Akt", "BMW", "Ducati")
// // Acceso a datos del array
// console.log("Arrays: ", motos3[1])
// motos3[5]=3
// console.log("Arrays: ", motos3)

// // Propiedades y métodos
// // Longitud
// console.log("Longitud Arrays: ", motos3.length)
// // Order
// console.log("Longitud Arrays: ", motos3.sort())
// // Acceder al ultimos objetos 
// console.log("Longitud Arrays: ", motos3[motos3.length-2])
// // Añadir componentes al array
// motos3.push("tvs")
// console.log("Añadir datos Arrays: ", motos3)
// motos3[motos3.length] = "Suzuki"
// console.log("Añadir datos  Arrays: ", motos3)
// // CUidado definición
// //Array de una posición
// const numbersTest = [5]
// console.log("Arrays: ", numbersTest)
// // Array de 5 Posiciones
// const numbersTest2  = new Array(5)
// console.log("Arrays: ", numbersTest2)

// // Validar tipo array
// // Validación isArray()
// console.log("Tipo Array: ", Array.isArray(numbersTest))
// //Validación instanceof
// console.log("Tipo Array: ", numbersTest instanceof Array)
// const perros = {Doberman:{tamaño:"Grandecitos", patas:4, pelaje:"Corto"}, pitbul:"Medianitos" }

// console.log("Tipo : ", perros instanceof Object)
// Añadir valor a Array
// Normal
// motos[5] = "KTM"
// console.log("Anadir Dato Array", motos)
// //Push
// motos.push("Pulsar", "tvs")
// console.log("Anadir Dato Array", motos)
// // Añadir primera posición
// motos.unshift("Honda")
// console.log("Añadir Dato Array al principio", motos)
// // Añadir o reemplazar en cualquier posición posición
// motos.splice(2, 0, "kimco")
// console.log("Añadir Dato Array", motos)
// // Añadir y borrar en cualquier posición posición
// motos.splice(2, 4, "Apache")
// console.log("Añadir Dato Array", motos)

// //Arrays a string
// console.log(typeof  motos.toString())
// console.log("Array a string", motos.toString())
// console.log("Array a string", motos.join(" * "))

// // Remover valores del array
// motos.pop() // Remueve el ultimo valor del array
// console.log("Quitar Dato Array", motos)
// motos.shift() // Remueve el primer valor del array
// console.log("Quitar Dato Array", motos)
// const motos2  = motos.slice(1, 4) // Remueve extracción de datos
// console.log("Quitar Dato Array", motos2)
// const motos1  = motos.slice(0, -1) // Remueve extracción de datos
// console.log("Quitar Dato Array", motos1)
// // Remueve posición especifica de datos
// console.log("Quitar Dato Array", motos)
// const motos3 =  motos.splice(1, 1) 
// console.log("Quitar Dato Array", motos)
// console.log("Quitar Dato Array", motos3)

// // Remover valor específico
// motos.push(null, "", undefined)
// console.log("Añadir vacios", motos)
// let removeNullMotos = motos.filter(function (noElminar){
//     return noElminar!=null
// })
// console.log("Quitar Dato Array", removeNullMotos)

// // Ordernar
// console.log("Ordenar alfabeticament", removeNullMotos.sort())
// console.log("Ordenar alfabeticamente desc", removeNullMotos.reverse())
// const arrayNum = [1,21,6,2,20,5]
// console.log("Ordenar alfabeticamente asc", arrayNum.sort())
// console.log("Ordenar Numericamente asc", arrayNum.sort(function(a,b){return a-b}))
// console.log("Ordenar Numericamente desc ", arrayNum.sort(function(a,b){return b-a}))

// //Comparación de arrays

// let array1  = [1, 2, 3, 4]
// let array2  = [1, 2, 3, 4, 5, 7]
// let array3 = [2, 1, 3, 2, 3, 1, 5]
// console.log("Comparación Estricta: ", array1===array2)
// console.log("Comparación Estricta: ", array1[0]===array2[0])
// // Stringify()
// console.log("Array a string: ", JSON.stringify(array1))
// "[1,2,3]"
// console.log("Array a string: ", array1.toString())
// "1,2,3"
// //Comparar Stringify()
// console.log("Comparación a arrays: ",  JSON.stringify(array1)=== JSON.stringify(array2))
// //Comparar toString()
// console.log("Comparación a arrays: ",   array1.toString()=== array2.toString())

// const compareArrays = function (a, b){
//     return a.lenght === b.lenght && a.every((element, index)=> element === b[index])
// }
// console.log("Comparación a arrays: ",   compareArrays(array1, array2))
// // Obtener diferencias entre los valores de los arrays
// let setArray1 = new Set(array1)
// console.log("Set arrays: ",   setArray1)
// let setArray3 = new Set(array3)
// console.log("Set arrays: ",   setArray3)
// function diferencia(a, b){
//     const setB = new Set(b)
//     return a.filter(element => !setB.has(element))
// }   
// function diferenciaTotal(a,b){
//     return diferencia(a,b).concat(diferencia(b,a))
// }
// const diferenciaArrays = diferencia(array1, array3)
// console.log("Diferencia arrays: ", diferenciaArrays)
// console.log("Diferencia arrays: ", diferenciaTotal(array1, array3))

// Iteración Array

// ForEach()
// let texto = "" 
// function forEachFunc(value,index){
//     if (index!=1){
//         texto += value+"\n"
//     }
// }
// motos.forEach(forEachFunc)
// console.log("For Each Result: ", texto)

// // map()
// function mapFunc(value, index, array){
//     return value + " Moto"
// }
// motos[5] = "ktm"
// console.log("Motos: ", motos)
// const newMotos = motos.map(mapFunc)
// console.log("map Result: ", newMotos)

// // flatMap()
// const newMotosFlat = motos.flatMap((value) => value+ " Motos")
// console.log("flatmap Result: ", newMotosFlat)

// // filter()
// function filterFunc(value){
//     return value != "Pulsar"
// }
// const newMotosFilter = motos.filter(filterFunc)
// console.log("filter Result: ", newMotosFilter)

// // reduce()
// //const numberArray= [1, 2, 1]
// console.log("Motos: ", motos)
// function reduceFunc(texto1, value, index){
//     if (index!=1){
//         texto1 += value+"\n" // text1 = text1 + value+"\n"
//     }
//     return texto1
// }
// console.log("reduce Result: ", motos.reduce(reduceFunc))

// // every()
// function everyFunc(value){
//     return value != "Honda"
// }
// console.log("every Result: ", motos.every(everyFunc))

// // some()
// function someFunc(value){
//     return value == "Pulsar"
// }
// console.log("some Result: ", motos.some(someFunc))

// // Buscar valores en el array
// // IndexOf
// let posMoto = motos.indexOf("BMW", 1)
// console.log("indexOF Result: ", posMoto)
// motos[4] = "BMW"
// console.log(motos)
// // lastIndexOf
// let posMotoLast = motos.lastIndexOf("BMW", 1)
// console.log("lastIndexOF Result: ", posMotoLast)

// // find encuentra el primer valor a partir de una condición
// function findFunc(value){
//     return value != "Akt"
// }
// console.log("find Result: ", motos.find(findFunc))

// // findIndex encuentra el index del primer  valor a partir de una condición
// function findFunc(value){
//     return value != "Akt"
// }
// console.log("find Result: ", motos.findIndex(findFunc))

// // from permite convertir un string en un array
// console.log("From resutl", Array.from("Motos"))

// // entries permite obtener el index y el valor de un array 
// const motosEntries = motos.entries()
// for (let x of motosEntries){
//     console.log(x)
//     console.log(x[0], x[1])
// }
// console.log(motosEntries)

// for (let x of motos){
//     console.log(x)
//     console.log(x)
// }

// // includes() es validar si el valor existe dentro de un array

// console.log("includes resutls: ", motos.includes("BMW"))


// console.log("============================ Objects ============================")

// // Objetos definición
// const mandarina = {color:"Naranja", precio:8, forma:"Redonda", nombre:"Mandarina"}
// const frutas = {mazana:10, pera:5, mandarina:5, uva:12}
// console.log("acceder propiedad objeto: ", frutas.mandarina)
// console.log("acceder propiedad objeto: ", frutas["mandarina"]) 
// const persona = {
//     fullName: function(){
//         return `${this.nombre} ${this.apellido}`
//     }, 
//     nombre:"Carlos", 
//     apellido:"Cáceres",   
//     gustos: function(){
//         return mandarina.nombre
//     }
// }
// let gusto = mandarina.nombre
// console.log("acceder propiedad objeto: ", persona["fullName"]())
// console.log("acceder propiedad objeto: ", gusto)

// // Objecto Iterable
// for (let x in frutas){
//     console.log("objeto "+x+" : ", frutas[x])
// }

// const objectTest = {12345:["Peras", "Manzanas", "Uvas"], 123451:[]}
// console.log("objeto: ", objectTest["12345"])


// console.log("============================ Dates ============================")

// // Definición Date
// const dateNow = new Date()
// console.log("Fecha Actual: ", dateNow)
// // String
// const dateStr = new Date("April 17, 2022 21:20:01")
// console.log("Fecha string Definida: ", dateStr)
// const dateStr1 = new Date("2022-04-17")
// console.log("Fecha string Definida: ", dateStr1)
// //Numbers
// // En números enero = 0 y diciembre = 11
// const dateNum = new Date(2013, 15, 18, 23, 30, 10 )
// console.log("Fecha Number Definida: ", dateNum)
// const dateNum1 = new Date(2013, 15, 18, 23, 30 )
// console.log("Fecha Number Definida: ", dateNum1)
// const dateNum2 = new Date(2013, 15, 18, 23 )
// console.log("Fecha Number Definida: ", dateNum2)
// const dateNum3 = new Date(2013, 11, 18 )
// console.log("Fecha Number Definida: ", dateNum3)
// const dateNum4 = new Date(2013, 11 )
// console.log("Fecha Number Definida: ", dateNum4)
// // Error No se pueden definir fechas sin mes
// const dateNum5 = new Date(2013)
// console.log("Fecha Number Definida: ", dateNum5)
// // Miliseconds
// const dateMili = new Date(999809708500)
// console.log("Fecha milisegundos Definida: ", dateMili)
// const dateMili1 = new Date(-62109809708500)
// console.log("Fecha milisegundos Definida: ", dateMili1)

// // Métodos
// // Date to String
// console.log("Fecha String: ", dateNow.toString())
// console.log("Fecha Date String: ", dateNow.toDateString())
// console.log("Fecha UTC String: ", dateNow.toUTCString())
// console.log("Fecha ISO String: ", dateNow.toISOString())

// // Formatos
// // ISO AAAA-MM-DD (2023-04-19)
// // Fecha Corta MM/DD/AAAA (04/19/2023)
// // Fecha Amplia  (Apr 19 2023, 19 Apr 2023)

// const dateIso = new Date("2022-04-17")
// console.log("Fecha ISO Definida: ", dateIso)
// const dateIso1 = new Date("2022-04-17 11:00:11")
// console.log("Fecha ISO Definida: ", dateIso1)
// const dateIso2 = new Date("2022-04-17T11:00:11Z")
// console.log("Fecha ISO UTC Definida: ", dateIso2)
// const dateIso3 = new Date("2022-04-17T11:00:11-01:00")
// console.log("Fecha ISO Hora Local Definida: ", dateIso3)

// // DATE GETS
// const getMethodsDate = new Date("2023-04-24 09:10:20.999")
// // getFullYear() Obtiene el año de un objeto Date - versión vieja getYear()
// console.log("Año completo", getMethodsDate.getFullYear())
// console.log("Tipo de dato Año completo", typeof getMethodsDate.getFullYear())
// // getMoth() Obtiene el mes de un objeto Date 
// console.log("Mes completo", getMethodsDate.getMonth()+1) // Retorna el mes -1
// console.log("Tipo de dato Mes completo", typeof getMethodsDate.getMonth())
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// console.log("Mes nombre", months[getMethodsDate.getMonth()])

// // getDay() Obtiene el día de la semana (0-6) empezando el domingo de un objeto Date 
// console.log("Día de la semana completo", getMethodsDate.getDay()) 

// // getDate() Obtiene el día de un objeto Date (1-31)
// console.log("Día completo", getMethodsDate.getDate())

// // getHours() Obtiene la hora de un objeto Date (0-23)
// console.log("Horas completo", getMethodsDate.getHours())
// // getMinutes() Obtiene los minutos de un objeto Date (0-59)
// console.log("Minutos completo", getMethodsDate.getMinutes())
// // getSeconds() Obtiene los segundos de un objeto Date (0-59)
// console.log("Segundos completo", getMethodsDate.getSeconds())
// // getMilliseconds() Obtiene los milisegundos de un objeto Date (0-999)
// console.log("Segundos completo", getMethodsDate.getMilliseconds())

// // getTime() Obtiene la fecha actual en milisegundos desde 1970
// console.log("Fecha en milisegundos", getMethodsDate.getTime())

// // Definición normal Fecha
// const dateToday = new Date("2023-12-31 20:10:20.999")
// console.log("Fecha normal", dateToday)
// // UTC GET metodos
// const dateTodayEpoch = Date.now()
// console.log("Día UTC", dateToday.getUTCDate())
// console.log("Año UTC", dateToday.getUTCFullYear())
// console.log("Mes UTC", dateToday.getUTCMonth())
// console.log("Día semana UTC", dateToday.getUTCDay())
// console.log("Horas UTC", dateToday.getUTCHours())
// console.log("Minutos UTC", dateToday.getUTCMinutes())
// console.log("Segundos UTC", dateToday.getUTCSeconds())
// console.log("Milisegundos UTC", dateToday.getUTCMilliseconds())

// // Diferencia contra UTC en minutos
// console.log("Diferencia contra UTC en minutos", dateToday.getTimezoneOffset())
// console.log("Diferencia contra UTC en horas", dateToday.getTimezoneOffset()/60)
// // Calcular el week number
// const currentDate = new Date()
// const startDate =  new Date(currentDate.getFullYear(), 0, 1)
// console.log("StartDate", startDate)
// console.log("Resta fechas ", (currentDate - startDate) )
// console.log("Calculo Completo fechas ", (currentDate - startDate) / (24*60*60*1000) )
// console.log("Aproximación fechas ",  Math.floor((currentDate - startDate) / (24*60*60*1000) ))
// let days = Math.floor((currentDate - startDate) / (24*60*60*1000))
// console.log("Dias fechas ", days )
// let weekNumber = Math.ceil(days/7)
// console.log("WeekNumber", weekNumber )

// // Obtener fecha actual por el timezone
// // Timezones "America/NewYork"
// console.log("HOra A partir de timezone", new Date().toLocaleTimeString("en-US", {timeZone:"America/New_York"}))
// console.log("Date A partir de timezone", new Date().toLocaleDateString("en-US", {timeZone:"America/New_York"}))
// console.log("Fecha completa A partir de timezone", new Date().toLocaleString("en-US", {timeZone:"Asia/Hong_Kong"}))

// // DATE SETS
// // setFullYear() cambia el año de la fecha actual
// console.log(dateToday)
// console.log("Cambio Año", dateToday.setFullYear(2020))
// console.log(dateToday)
// console.log("Cambio Año", dateToday.setFullYear(2020, 10, 1))
// console.log(dateToday)
// // setMoth()
// console.log("Cambio Mes", dateToday.setMonth(9))
// console.log(dateToday)
// // setDate()
// console.log("Cambio Día", dateToday.setDate(2))
// console.log(dateToday)
// // setHours()
// console.log("Cambio Horas", dateToday.setHours(19))
// console.log(dateToday)
// // setMinutes()
// console.log("Cambio Minutos", dateToday.setMinutes(9))
// console.log(dateToday)
// // setSeconds()
// console.log("Cambio Segundos", dateToday.setSeconds(19))
// console.log(dateToday)

// // Comparar Dates
// const date1 = new Date()
// //date1.setFullYear(2025,1,24)
// const date2 = new Date()
// date2.setFullYear(2024, 5, 24)
// if (date2 > date1){
//     console.log("Hoy es antes de 24 Abril 2024")
// } else{
//     console.log("Hoy es después de 24 Abril 2024")
// }
// // Restar horas de una fecha
// console.log("Fecha actual", date1)
// const getHour = date1.getHours()
// console.log("Horas Actuales", getHour)
// const subsHours =  getHour + 8 
// console.log("Horas Operadas", subsHours)
// date1.setHours(subsHours)
// console.log("Fecha operada", date1)

// // Conversiones Fechas
// // toDateString() convertir a string
// console.log("Fecha string", date1.toDateString())
// // toISOString() convertir a ISO string
// console.log("Fecha string", date1.toISOString())
// // toDateString() convertir a JSON (ISO) string
// console.log("Fecha string", date1.toJSON())
// // toTimeString() convertir a JSON (ISO) string
// console.log("Fecha Time string", date1.toTimeString())
// // toString() convertir a JSON (ISO) string
// console.log("Fecha Time string", date1.toString())
// // toUTCString() convertir a JSON (ISO) string
// console.log("Fecha UTC string", date1.toUTCString())

// console.log("============================ Funciones ============================")

// // Definición de una función
// function miFuncion(a, b, c) {
//     return a + b + c
// }
// function miFuncion() {
//     let text = "El grupo de backEnd Es el mejor"
//     console.log(text)
// }
// let sumaTotal = miFuncion(1, 2, 3)
// console.log("Este es el resultado de mi primera función", sumaTotal)

// function printText(text){
//     console.log("Esto es el texto a imprimir: ", text)
    
// }

// printText(sumFuncitonDecl(1,2))
// // Función Declarada
// function sumFuncitonDecl(a, b){
//     return a+b
// }
// printText(sumFunciton(1,2))
// // Función Expresada
// var sumFunciton = function(a, b){
//     return a+b
// }
// printText(sumFunciton(1,2))

// console.log(sumFunciton(1,2))

// console.log("============================ Comparación ============================")

// let x = 8
// // Igual que ==, es una comparación del componente sin mirar su estructura o tipo 
// console.log("Igual que: ", x==8)
// console.log("Igual que: ", x=="8")
// // Igual que en valor y tipo  ===, es una comparación del componente estricto
// console.log("Igual que: ", x===8)
// console.log("Igual que: ", x==="8")
// // Diferente que  !=, es una comparación del componente sin mirar su estructura o tipo 
// console.log("Diferente que: ", x!=5)
// console.log("Diferente que: ", x!="8")
// // Diferente que  !=, es una comparación del componente estricta
// console.log("Diferente que: ", x!==5)
// console.log("Diferente que: ", x!=="8")
// // mayor que  >, es una comparación del componente estricta
// console.log("Mayor que: ", x>8)
// console.log("Mayor que: ", x>"9")
// // menor que  <, es una comparación del componente estricta
// console.log("Menor que: ", x<5)
// console.log("Menor que: ", x<"1")
// // mayor igual que  >=, es una comparación del componente estricta
// console.log("Mayor que: ", x>=8)
// console.log("Mayor que: ", x>="8")
// // menor o igual  que  <=, es una comparación del componente estricta
// console.log("Menor que: ", x<=8)
// console.log("Menor que: ", x<="9")

// console.log("============================ Operadores Lógicos ============================")
// // And o y (and) o (&) -> js -> &&

// // Tabla de verdad AND
// console.log(x<7 && x>9)
// console.log(x<7 && x>7)
// console.log(x>7 && x<7)
// console.log(x<9 && x>7)

// // or o ó (or) o (|) -> js -> ||

// // Tabla de verdad AND
// console.log(x<7 || x>9)
// console.log(x<7 || x>7)
// console.log(x>7 || x<7)
// console.log(x<9 || x>7)

// // not o no (not) o (!) -> js -> !

// // Tabla de verdad AND
// console.log(!x<7)
// console.log(!x>7)

// let condicionTerniario = (3>9) ? "Es mayor que 9":"No es mayor a 9"
// console.log(condicionTerniario)
// // Comparación numeros en string
// let xString = "8"
// console.log("Comparación string, ", "8">"8")

// // operador lógico de null
// let nullVar = null
// let operacion = null
// let texto = "missing"
// console.log("Operador null, ", operacion??texto)

// // ?. 
// const sbk = {velocidad:"Más de 200km/h", tamaño:"Varios tamños", maximoCC:1200}
// console.log(sbk.color)
// console.log(sbk?.color)

// console.log("============================ Expresiones condicionales ============================")

// // sentencia if
// if (7>6) {
//     console.log("El resultado de la condicion es verdadero")
// }

// // sentencia if else
// if (7>8) {
//     console.log("El resultado de la condicion es verdadero")
// } else {
//     console.log("El resultado de la condicion es falso")
// }

// // sentencia if else if else 
// let z = 8
// if (z>8) {
//     console.log("El resultado es que z es mayor a 8")
// }else  if (z>9) {
//     console.log("El resultado es que x es mayor a 9")
// }else if (z>10) {
//     console.log("El resultado es que z es mayor a 10")
// }else  if (z>11) {
//     console.log("El resultado es que x es mayor a 11")
// }else {
//     console.log("El resultado de la condicion es falso")
// }


// if (z==8) {
//     console.log("El resultado es que z es igual a 8")
// }else  if (z==9) {
//     console.log("El resultado es que z es igual a 9")
// }else if (z==10) {
//     console.log("El resultado es que z es igual a 10")
// }else  if (z==11) {
//     console.log("El resultado es que z es igual a 11")
// }else {
//     console.log("El resultado es que z es diferente")
// }

// // switch case es una especie de condicional  if else if else
// // // Caso comparación directa
// let resultado
// // La comparación del switch case por defecto es estricta 
// switch (z){
//     case "8":
//         resultado = 8
//         break
//     case 9:
//         resultado = 9
//         break
//     case 10:
//         resultado = 10
//         break
//     default:
//         resultado = z+"default"
// }

// console.log("El resultado es que z es igual a ", resultado)

// // Caso comparación bajo condiciones
// let resultado2
// switch (true){
//     case z>8:
//         resultado2 = 8
//         break
//     case z>9:
//         resultado2 = 9
//         break
//     case z>10 && z<5 || z==8:
//         resultado2 = 10
//         break
//     default:
//         resultado2 = z
// }
// console.log("El resultado  ", resultado2)

// console.log("============================ Iteraciones ============================")

// // For que un cilco que recorre cierta cantidad de veces un bloque
// let maxIter = 10
// for (let i=0; i<maxIter; i++){
//     console.log("Iteración Numero: ", i)
// }
// // Ejemplo de for 
// const lenguajes = ["python", "javascript", "java", "go", "cobol"]
// console.log("Longitud del array: ",lenguajes.length)
// for (let x=0; x<lenguajes.length; x++){
//     if( lenguajes[x] != "go"){
//         console.log("Lenguaje ", lenguajes[x])
//     }
// }
// let texto = ""
// let arrayText = ["Este", "es", "el", "curso", "de", "backEnd"]
// for (let i=0; i<arrayText.length; i++){
//     texto+= arrayText[i]+" "
// }
// console.log(texto)
// let i2 = 0
// console.log("Longitud Array: ", arrayText.length)
// let texto2 =""
// for (; i2<arrayText.length; i2++){// i2 = i2+1
//     texto2+= arrayText[i2]+" "
//    // texto2+=`${arrayText[i2]} `
   
// }
// // Ejemplo con formating
// console.log(`texto ${i2}`)
// console.log(texto2)
// console.log(i2)
// const endpoints = ["endpoint1", "endpoint2", "endpoint3"]
// const request1 = "v2"
// for (let i=0; i<endpoints.length; i++){
//     console.log(`https://google.com/${request1}/${endpoints[i]}/peticion`)
// }
// // Ejemplo con break
// let i = 0;
// for (;;) {
//     if (i === 10) {
//         break
//     }
//     console.log(i)
//     i++
// }

// let endpointFinal
// for (let i=0; i<endpoints.length; i++){
//     if (endpoints[i]=="endpoint2"){
//         console.log("Acá debería entrar cuando sea diferente a endpoint2")
//         console.log("iteración numero: ", i+1)
//         endpointFinal = endpoints[i]
//         break
//     }
// }
// console.log("Este es el endpoint de la condicion: ", endpointFinal)

// // Ejemplo con continue
// let endpointFinal2
// for (let i=0; i<endpoints.length; i++){
    
//     if (endpoints[i]=="endpoint2"){
//         console.log("Hola iteracion:", i+1)
//         continue
//     }
//     console.log("Iteraciones: ", i+1) 
// }

// // For in, siempre se usa para recorrer las propiedades de un objeto
// // Ejemplo con Objeto-Objeto
// const motos2 = {BMW:"S1000R", DUCATI:"Panigale", YAMAHA:"R1M", SUZUKI:"GSR 750"}
// const propiedadesMotos = []
// for (let moto in motos2){
//     console.log(`${moto} <- ${motos2[moto]}`)
//     propiedadesMotos.push(moto)
// }
// console.log(motos2.BMW)
// console.log(propiedadesMotos)

// // Ejemplo Objeto-Array
// for (let indice in propiedadesMotos){
//     console.log(`${propiedadesMotos[indice]} tiene el indice ${indice}`)
// }

// // For of obtiene el valor de un objeto iterable

// for (let value of propiedadesMotos){
//     console.log(`Propiedad: ${value}`)
// }

// for (let value of "motos2"){
//     console.log(`Valor: ${value}`)
// }

// // While Ciclo con salida bajo condición, de resultado falso
// let iterWhile = 0
// while (iterWhile<10){
//     console.log("Iteracion:" ,iterWhile)
//     iterWhile++
// }
// // Salida del while con break
// let iterWhile2 = 0
// while (true){
//     if (propiedadesMotos[iterWhile2]=="YAMAHA"){
//         break
//     }
//     console.log("Valores:" ,propiedadesMotos[iterWhile2])
//     iterWhile2++
// }
// // Salida del while con condición
// let motoValida = true
// let iterWhile3 = 0 
// while (motoValida){
//     if (propiedadesMotos[iterWhile3]=="YAMAHA"){
//         motoValida = false
//     }
//     console.log("Valores:" ,propiedadesMotos[iterWhile3])
//     iterWhile3++
// }

// // Do while

// let iterDo = 0
// do {
//     console.log("Iteracion: ", iterDo)
//     iterDo++
// }
// while(iterDo< 5)


// console.log("============================ Palabras Reservadas  ============================")
// arguments // argumentos asociados a un proceso o una función 
// await // Extraer una promesa (una expresion resultado de un procso asincrono)
// boolean // Tipo de dato
// break // Salir de un proceso iterativo de forma inmediata
// byte // Tipo de dato 8 bits
// case // Para definición de una iteración sobre condiciones 
// catch // Para el manejo de errores y excepciones / o metodo de un Promise
// class // Para la difiinición de una clase en js
// const // para definición de constantes
// continue // Continuar con la iteración sin ejecutar el proceso posterior restante dentro del bloque iterado
// debugger // Habilita el debugging o validación paso a paso del código
// default // Permite definir un valor por defecto  para una respuesta
// delete // Remueve una propiedad de un objeto
// do // La inicialización del ciclo do while
// else // Es el valor sino de una condición
// enum // Es un objeto inmutable que no puede ser manipulado por el código para sobreescrirlo
// eval // Evalua un objeto represtado como string y retorna su valor operado
// export // Permite exporta valores  de librerias o modulos desde JS
// extends // Sirve para declaración  clases o expresiones de clases para la creación de una clase hija desde otra clase
// false // La expresión booleana negativa
// final // Es similar al const pero debe tener un inizializador
// finally // Manejo de excepciones finalizado el proceso
// for // Para inicializar ciclos de tipo  for loop
// function // Definición de funciones
// if // Valor "si" de una condción
// implements // Genera una clase a partir de otra con la forma pero no se considera un clase hija, puede heredar todos los metodos de la clase principal
// import // Permite importar solo como lectura  funciones, metodos, clases de otros modulos externos
// in // Validación de una condición en la que valor pertenece a un objeto o no sin traer el valor propiamente 
// instanceof // Validación o test de una condición para un objeto definido hacia su tipo de dato
// interface // El gateway o emascarado de un proceso que abstrae su funcionalidad del proceso que la usa
// let // Definición de una variable local
// new // la instanciación de un objecto, que puede puede ser vacio
// null // Un valor vacio según el tipo de dato
// package // PErmite llamar paquetes diseñados con un fin específico y asociado a un framework
// private // Define los objetos de una clase que solamente de uso interno de la misma
// protected // Permite el acceso a componentes de una clase pero solo para algunos procesos establecidos
// public // Defición de un objeto dentro de una clase al que cualquier proceso puede acceder
// return // Para retornar valores asociados a una función, el resultado de una fucnión.
// static // No permite el acceso a las propiedades de un objeto o metodo dentro de una clase.
// super // permite acceder a propiedades de objetos o clases dentro de una super clase, además de el construcutor. 
// switch // Es la segunda parte o lo que permite iterar a un case
// this // Obtiene los valores propios de un objeto para uso interno.
// throw // Manejo de errores directamente en el bloque ejecutado
// // function test(){
// //     if (BigInt("HOLA")){
// //         console.log("Hola again")
// //         //throw new Error(" Esto es mi error controlado")
// //     }
// // }
// // try{
// //     test()  
// // }catch(e){
// //     console.log(e)
// // }
// true // valor positivo de un bool
// try // Condición de ejecución de un bloque para manejo de errores
// typeof // Validación de tipo de dato
// var // Es la definición de variable global
// void // Exresión que define un componente como vacio
// while // Expresión de bucle mientras
// with // Extensión para la ejecución de un bloque
// with ([1, 2, 3]){
//     console.log(toString())
// }
// yield // Es un operador que pausa y resume la generación de una función
// function* test(index){
//     while(index<3){
//         yield index
//         index++
//     }
// }
// const iterador = test(0)

// console.log(iterador.next().value)
// console.log(iterador.next().value)
// console.log(iterador.next().value)


// var yield = 1

// console.log(yield)
// function* test(index){
//     while(index<3){
//         yield index
//         index++
        
//     }
//     return 3

// }
// console.log(yield)
// const iterador = test(0)
// console.log(iterador)
// for (let i=0; i<4; i++){
//     console.log(iterador.next().value)
// }
// console.log(iterador.next().value)
// console.log(iterador.next().value)
// console.log(iterador.next().value)


// console.log("============================ Maps ============================")

// // Se comporta como un objeto donde se tiene llave/Valor y la llave puede ser cualquier tipo de dato
// const objetoTest = {esto:"Hola", esto2:"HOla2", esto3:1}
// console.log(objetoTest)
// // Definición a partir de array de arrays
// const objectTest1 = new Map(
//     [["llave1","valor1"],
//     [1,"2"],
//     ["1","Esto es uno"]]
// )
// console.log(objectTest1.get(1))

// // Definición de un map a través de un set
// const carros = new Map()
// carros.set("BMW", "M2")
// carros.set("Mercedes Benz", "GLC 43")
// carros.set("Audi", "Q3")
// carros.set("Ford", "Fiesta")
// console.log(carros)


// // Propiedad size, devuelve la longitud del Map  o la cantidad de componentes (donde un componente es llave y valor)
// console.log("Size: ", carros.size)
// // delete() Permite remover objetos dentro de un map
// carros.delete("Ford")
// console.log(carros)
// // has() Nos permite validar si una llave se encuentra dentro del map o no?
// console.log(carros.has("Ford"))
// if (!carros.has("Ford")){
//     console.log("Ford no pertenece al map de carros")
// }

// // |    Valores    |    Objeto      |     Map           |
// // | Es iterable?  |No directamente |     Si            |
// // | Longitud?     |    Lenght      |    Size           |
// // | Tipo de llaves|    Strings     |Cualquier Data Type|
// // |    Orden      |  Mal ordenado  |   Por inserción   |
// // |Llaves default |       Si       |        No         |

// // forEach() iterar los valores propios del map tanto llave como valor

// carros.forEach (
//     function(value, key){
//         console.log(`La key es: ${key} y el value es: ${value}`)
//     }
// )

// // entries() retorna un iterador con los objetos de [llave/valor] dentro del map
// for (let x of carros.entries()){
//     console.log("Llave: ", x[0])
//     console.log("Valor: ", x[1])
// }
// let testentries = carros.entries()
// console.log(testentries[0])
// let testArrays = [
//     [1,2],
//     [2,3],
//     [3,4]
// ]
// console.log(testArrays[0])
// console.log("============================ Conversión tipos de datos ============================")
// // Conversión de Strings a Numbers
// console.log(Number("3.14"))
// console.log(Number("3450"))
// console.log(Number(Math.PI))
// console.log(Number(" "))
// console.log(Number("Carlos"))
// console.log(Number("21 13"))
// // parse 
// console.log(parseFloat("3450"))
// console.log(parseInt("3.14"))
// // unario

// let stringValue = "5"
// let numberValue = +stringValue
// console.log("El valor", stringValue,"es", typeof stringValue)
// console.log("El valor", numberValue,"es", typeof numberValue)

// // Conversión de Numbers a Strings
// console.log(String(3.14))
// console.log(String(2+3))
// // toString()
// let numberValue2 = 1230
// console.log(typeof numberValue2)
// console.log(typeof numberValue2.toString())
// // toExponential() Retorna un string con el numero redondeado y usando notación exponencia o científica
// console.log("Expresión exponencial: ", numberValue2.toExponential())
// // toFixed() Retorna un string con el numero redondeado y con un número específico de decimales
// let numberValue3 = 123.16416156165
// console.log("Decimales: ", numberValue3.toFixed(4))
// // toPrecision() Retorna un string con una longitud específica
// console.log("Cantidad numeros: ", numberValue3.toPrecision(6))
// let numberValue4 = 12316416156165
// console.log("Decimales: ", numberValue4.toPrecision(17))

// // Conversión de Dates a Numbers
// let date2Num = new Date()
// console.log( date2Num)
// console.log( Number(date2Num))
// console.log( date2Num.getTime())
// // Conversión de Dates a String
// console.log( String(date2Num))
// console.log( date2Num.toString())
// console.log( date2Num.toDateString())

// // Conversión de Numbers a Dates
// console.log( Date(1682735968295))

// // Conversión de Booleans a Numbers
// console.log(Number(true))
// console.log(Number(false))
// // Conversión de Numbers a Booleans, valores > 1 siempre retonan true
// console.log(Boolean(1))
// console.log(Boolean(0))

// // Conversiones automáticas
// console.log(typeof (5+null)) //Conviert el null a 0
// console.log(typeof ("5"+null))// Convierte el null a "null"
// console.log(("5"+null))
// console.log(typeof ("5"+2)) // Convierte el 2 a string
// console.log(typeof ("5"-2)) // Convierte el resutlado a number
// console.log(typeof ("5"/2)) // Convierte el resutlado a number
// console.log(typeof ("5"*2)) // Convierte el resutlado a number

console.log("============================ JSON ============================")
// Es un formato para organizar, transportar data y almacenarla
// Organiza llave valor, con el cual se pueden asociar datos a su respectivo identificado (llave)
// Transporta, cuando se presentan los datos de una respuesta tipo API Rest (JSON)
// Almacenar, en bases de datos no relacionales.
// Definición:
// Es el el formato JavaScript Object Notation
// Es un formato muy liviano para intercambio de datos
// Es un lenguaje independiente
// Es autodescriptivo, las llaves pueden dar contexto, y fácil de entender

// Reglas para la definición de un json
// *  Llaves siempre serán de tipo texto y entre COMILLAS DOBLES ("")
// * Todos los tipos de dato string deben ser en comillas dobles
// * Extensión del archivo siempre será .json
// * Los valores pueden ser strings, numéricos y json y arrays
// * la separación de rows o de datos es por , 
// * Se pueden tener varios datos por llave
// * No se puede tener la misma llave dentro del mismo nivel de los datos
// * Anidación (nested)
// * Solo se realiza una separación de datos a través de comas, si es un dato adicional, el ulitmo dato no se separa por coma
// *  No se puede crear una llave sin un valor asignado, se debe asociar a null o vacio
// * Por convención los arrays contienen información que presntan la misma estructura exactamente. Se percibe como una tabla
// * IMPORTANTE siempre tener el contexto de las llaves asociadas a un json.
// * El formato de archivo de tipo JSON es case sensitive para las llaves, es decir entiende entre mayúsculas y minúsculas y las peribe de forma distinta.


// Revisar archivo explicacion.json 
// Para visualizar y formatear un json en plano se puede usar https://jsonformatter.org/