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
// // Max/Min Number properties 
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
// const motos = ["Pulsar", "Akt", "BMW", "Ducati"]
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
// console.log("Igual que: ", x==8)propier
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
// false // La expresión booleana negativapropier
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

// console.log("============================ JSON ============================")
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

// console.log("============================ REGEX (RegExp) ============================")
// // Expresiones regulares
// // Es un patron de caracteres, usadado hacer match con cierto tipo de datos y ejecutar algún proceso.

// // Definción  /patron/modificador
// let exRegex = /CursoBack/i
// let exRegexR = new RegExp("CursoBack", "i")

// // Métodos de las expresiones regulares
// // search() un metodo que permite hacer busqueda de patrones dentro texto, según el valor especificado y retorna la posición de le valor encontrado.
// let texto = "El curso 3 de BackEnd es muy aplicado y realiza sus cuestionarios "
// let searchData =  texto.search("backend")
// console.log("Regex Search: ", searchData)
// let searchDataRegex =  texto.search(/backend/i)
// console.log("Regex Search: ", searchDataRegex)
// let searchDataRegexAl =  texto.search(/E/g)
// console.log("Regex Search: ", searchDataRegexAl)

// // replace() es un metodo que permite buscar y reemplazar un patrón dentro de un texto. No reasigna el texto, sino que genera un nuevo resultado
// let textoReplace = "El curso 3 de BackEnd es muy aplicado y realiza sus cuestionarios"
// console.log(textoReplace)
// let repRegexR = textoReplace.replace(/cuestionarios/i, "trabajos")
// console.log(repRegexR)
// // Aplicar el metodo a todas la coincidencias
// let repRegexR2 = textoReplace.replace(/e/ig, "E")
// console.log(repRegexR2)
// let repRegexR3 = textoReplace.replaceAll("E", "e")
// console.log(repRegexR3)

// // Modifiers
// // g La busqueda global de la coincidencia (el match entre el patrón y la expresión dentro del texto)
// // i La busqueda case-insensitive, es decir no tiene en cuenta mayúsculas o minúsculas.
// // m Permite la busqueda o el match en multiline 

// // Multiline m
// let textMulti = "Esto "+
// "es una " +
// " prueba para "+ 
// "multiline"
// console.log(textMulti)
// let regex1 = new RegExp("a", "m")
// let textMultiRegex = textMulti.replace(regex1, "A")
// console.log(textMultiRegex)

// // test() Esta función se asocia al patrón o al regex definido y permite validar si una expresión se encuentra o no dentro de una entrada.
// const patronA = /A/ig
// console.log(patronA.test(textMulti))

// // exec() Buscar un string para determinado patrón y retorna el texto encontrado como objeto.
// // Si no encuentra nada, retornará siempre un objeto null.
// console.log(patronA.exec(textMulti))

// // Expresiones reservadas dentro de los regex.
// // \w Encontrar caracteres [a-zA-Z0-9_]
// const textoReg = "ñ @ \v Est@ es tun & \n texto de pru3ba \t para buscar patrones 123 123 "
// console.log(textoReg.search(/[\w]+/i))

// console.log(/[\w]*^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+/.test("Aqe312das@"))
// // \W Encontrar caracteres que no pertenezcan [^a-zA-Z0-9_]
// console.log(/[^a-z0-9]+/.test("a"))
// // \d es la expresion [0-9] => \D es la expresion [^0-9]
// console.log(textoReg.search(/\d/))
// console.log(textoReg.search(/\D/))

// // \s Encontrar espacios en blanco [ \n\t\v] => \S [^ \n\t\v]
// console.log(textoReg.search(/\s/))
// console.log(textoReg.search(/\S/))
// // \b Encontrar la expresión al inicio o al final del texto y encuntra la ultima expresión, \B = ^\b
// // Principio  12 primeros
// console.log(textoReg.search(/\bt/))
// // Final Busca toda la expresion
// console.log(textoReg.search(/[a\b]/))
// // Deuda Técnica
// console.log(textoReg.search(/[a\B]/))
// console.log(textoReg.search(/\Bru3\B/))
// // Caracter Nulo
// let textoNull = "Esto es texto Nulo \0"
// console.log(textoNull)
// console.log(textoNull.search(/\0/))
// // Salto de linea
// console.log(textoReg.search(/\n/))
// // Tabulador
// console.log(textoReg.search(/\t/))
// // Tabulación vertical
// console.log(textoReg.search(/\v/))

// // Cuantificadores 
// // Son expresiones que me permiten determinar que un patrón ser repita n cantidad de veces según sea la expresión
// // + Que permite se repita al menos 1 veces, es decir, 1 o más veces
// const textoReg2 = "cacocicerlos ci ciceres cicicicicici123caa123 es cereal"
// console.log(textoReg2.match(/\w/g))
// console.log(textoReg2.match(/\w+/g))
// // * Que permite se repita al menos 0 o más  veces
// console.log(textoReg2.match(/((ca)[a-z]*)?\d+/g))
// // ? Que permite se repita 0 o 1 
// console.log(textoReg2.match(/(ca)?\d/g))
// // {x} Ocurre x veces
// console.log(textoReg2.match(/(ci){2}/g))
// // {x, y} Ocurre desde x hasta y veces
// console.log(textoReg2.match(/(ci){1,3}/g))
// // {x,} que se tenga al menos la ocurrencia x cantidad de veces
// console.log(textoReg2.match(/(ci){1,}/g))

// // $ Me permite obtener cualquier ocurrencia que se presente al final de la cadena de texto
// console.log(textoReg2.match(/(al)$/g))
// // ^ Me permite obtener cualquier ocurrencia que se presente al principio de la cadena de texto
// console.log(textoReg2.match(/^(cice|caco){0,2}/g))
// const textoReg3 = "102 m 102 cm cabaña 102mm text.csv 102 m"
// // ?= Permite obtener un patron seguido de otro patron, para identificar cierta unanimidad.
// console.log(textoReg3.match(/102(?= m)/ig))
// // ?! Permite obtener un patron diferente al que se define.
// console.log(textoReg3.match(/102(?! m)[_]?/ig))
// console.log(textoReg3.match(/[^a-z]/ig))
// // Agrupadores [ ] ( )
// // [] agrupa valores independientes y busca una coincidencia en general para esos valores de forma independiente
// console.log(textoReg3.match(/[ca10]/ig))
// // () agrupa cadena de caracteres compuestos para encontrarlos dentro de la expresión
// console.log(textoReg3.match(/(ca|mm){1,5}/ig))


// console.log("============================ Manejo de Errores ============================")

// // Sentencias para el manejo de errores
// // Try es una sentencia que permite correr (o tratar) de ejecutar un bloque de código, en caso el va a redirigir ese proceso hacia el bloque de manejo de error
// // Catch es una sentecia que permite hacer el manejo de cualquier error que le arroje el try
// // Finally Me permite continuar con el código sin hacer cacheo o manejo del error, sin importar si existe error, el proceso va a continauar.

// // try y catch
// try{
//     adddalert("Esto es una alerta con typo")
// }
// catch(err){
//     if (err.message.includes("defined")){
//         console.log("Se encontró un error de una variable no definida")
//     }     
// }
// // try y finally
// try{
//     adddalert("Esto es una alerta con typo")
// }
// catch{

// }
// finally{
//     console.log("Voy a hacer este proceso, así el try tenga un error")
// }

// // try, catch y finally

// try{
//     adddalert("Esto es una alerta con typo")
// }
// catch(err){
//     console.log(err.message)
// }
// finally{
//     console.log("Voy a hacer este proceso, así el try tenga un error")
// }

// // Ejemplo

// const addi = (a, b) => a+b
// function addi2(a, b){
//     return a+b
// }

// let resultado = 0

// try{
//     resultado = addi(funct, 2)
// }
// catch(err) {
//     console.log("Este es el mensaje de error: ", err.message)
// }
// finally{
//     console.log("Este es el resultado: ", resultado )
// }

// // throw permite crear un error customizado
// // El throw puede ser un string, un booleano, un Number o un objeto

// function funcionError(){
//     let valor 
//     console.log(valor)
//     try{
//         if (valor == undefined){
//             throw new Error("hola")//{error:"Es una variable vacia", code_error:400}
//         }

//     }
//     catch(err){
//         console.log(err)
//     }
// }
// funcionError()


// function add2(a, b){
//     if (typeof a!== "number" || typeof b!== "number") 
//     {
//         throw "Ambos argumentos deben ser de tipo Number"
//     }
//     return a+b
// }
// try{
//     let variable1 = 20
//     let suma = add2("string", variable1)
//     console.log(suma)
// }
// catch(err){
//     console.log(err)
// }



// console.log("============================ Clases ============================")
// // Definición
// // Definición de clase sin constructor
// class ClaseBackEnd{
//       constructor(){} // o no tenerlo es lo mismo
// }
// const claseBack = new ClaseBackEnd()

// // Definición de clase con constructor
// class ClaseBackEnd2{
//     constructor(horario){
//         this.horario = horario
//     }   
// }
// const claseBack2 = new ClaseBackEnd2(horario = "7:30pm a 10:00pm")

// let sumar =  (a, b) => a+b
// // Definición metodos
// class ClaseBackEnd3{
//     constructor(horario, modulo){
//         this.horario = horario
//     }   
//     print(estudiantes){ // nombre método y argumentos
//         console.log("Horario de clase:", this.horario)
//         console.log("El número de estudiantes es:", estudiantes)
//     }
//     printModulo(){
//         console.log(modulo)
//     }

// }
// const claseBack3 = new ClaseBackEnd3(horario = "7:30pm a 10:00pm",  "modulo 6")
// claseBack3.print(120)
// // claseBack3.printModulo(120)


// // Public  es el acceso general a las propiedades y métodos de una clase

// // Notación Clase
// class ClaseBackEnd11{
//     name
//     constructor(name){
//         this.name = name
//     }
//     getName(){
//         return this.name
//     }
// }
// const backObject = new ClaseBackEnd11("Back End")
// console.log(backObject.getName())
// console.log(backObject.name)

// // Notación Objeto
// const backObjectFunc = {
//     name:"Back End",
//     getName: function(){
//         return this.name
//     }
// }
// console.log(backObjectFunc.getName())
// console.log(backObjectFunc.name)
// backObjectFunc.name = "Front End"
// console.log(backObjectFunc.name)
// console.log(backObjectFunc.getName())

// // Private me permite ocultar o restringir el acceso a objetos o métodos dentro de mi clase, las variables privadas debe ser declaradas dentro de la clase
// // Notación clase 
// class ClaseBackPrivate{
//     #name
//     #students
//     constructor(name){
//         this.#name = name
//         this.#students = 18
//         this.prueba = "Prueba"
//     }
//     #printName(){
//         return "El nombre de la clase es "+ this.#name
//     }
//     getClassDescription(){
//         return this.#printName()+ " Y tiene "+this.#students+" estudiantes"
//     }

// }
// const backPrivateObj = new ClaseBackPrivate("Back End")
// console.log(backPrivateObj.getClassDescription())
// console.log(backPrivateObj.name)
// console.log(backPrivateObj.prueba)
// // console.log(backPrivateObj.printName())
// console.log(backPrivateObj["#printName()"])

// // Notación Objeto
// function pruebaAdd(){
//     var add = 0
//     return{
//         addition: function(){
//             return add++
//         }
//     }
// }
// let add1 = new pruebaAdd()
// console.log(add1)
// console.log(add1.add)
// console.log(add1.addition())
// console.log(add1.addition())
// console.log(add1.addition())

// // Protected, permite acceder a las propiedades pero bajo sentencias de lectura.
// class ClaseBackEndProtected{
//     _name
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
// }

// let backProtectedObj =  new ClaseBackEndProtected("Back End")
// console.log(backProtectedObj.name)
// backProtectedObj.name = "Front End"
// console.log(backProtectedObj.name)

// // La definición de multiples constructores
// // Parametros opcionales con valores default 
// class Vehiculo{
//     constructor(tipo='Carro', numRuedas=4, cilindraje=1200, color="Azul"){
//         this.tipo = tipo
//         this.numRuedas = numRuedas
//         this.cilindraje = cilindraje
//         this.color = color
//     }
//     getTipo(){
//         return this.tipo
//     }
//     getRuedas(){
//         return this.numRuedas
//     }
//     getCilindraje(){
//         return this.cilindraje
//     }
//     getColor(){
//         return this.color
//     }
// }
// const carro =  new Vehiculo()
// console.log(carro.getColor())
// console.log(carro.getTipo())

// const camioneta = new Vehiculo("Camioneta")
// console.log(camioneta.getColor())
// console.log(camioneta.getTipo())
// console.log(camioneta.getRuedas())

// const moto = new Vehiculo("Moto", 2, undefined,"Rojo")
// console.log(moto.getColor())
// console.log(moto.getTipo())
// console.log(moto.getRuedas())
// console.log(moto.getCilindraje())

// // Multipleconstructor con definición de objeto

// class Vehiculo2{
//     constructor(propiedades={}){
//         this.propiedades = propiedades
//     }
//     getTipo(){
//         return this.propiedades.tipo
//     }
//     getRuedas(){
//         return this.propiedades.numRuedas
//     }
//     getCilindraje(){
//         return this.propiedades.cilindraje
//     }
//     getColor(){
//         return this.propiedades.color
//     }
//     getTipoChasis(){
//         return this.propiedades.chasis
//     }
// }

// const moto2 = new Vehiculo2({tipo:"moto", color:"Negro", numRuedas:2})
// console.log(moto2.getColor())
// console.log(moto2.getTipo())
// console.log(moto2.getRuedas())
// console.log(moto2.getCilindraje())

// const carro2 = new Vehiculo2({tipo:"carro", color:"gris", cilindraje:1600, chasis:"H"})
// console.log(carro2.getColor())
// console.log(carro2.getTipo())
// console.log(carro2.getCilindraje())
// console.log(carro2.getTipoChasis())

// // Métodos estáticos, la forma estática en javascript solo se puede usar dentro clases y es aplicable solo para los métodos, no para los objetos
// // Definión que el método estático solo puede ser invocado a través de la clase y no del objeto
// class ClaseBackStatic{
//     constructor(name){
//         this.name = name
//     }
//     static getName(objeto){
//         return objeto.name
//     }
//     getName2(){
//         return this.name
//     }
// }

// const backStaticObj = new ClaseBackStatic("Back End")
// // console.log(backStaticObj.getName()) // Esta expresión no se puede usar, porque el objeto no puede acceder a los métos estaáticos
// const backStaticObj2 = new ClaseBackStatic("Front End")
// console.log(ClaseBackStatic.getName({name:"Hola MUndo"}))
// console.log(ClaseBackStatic.getName(backStaticObj2))
// console.log(backStaticObj2.getName2())

// // Multiple constructor método estático

// class VehiculoStatic{
//     constructor(tipo, color, cilindraje, numRuedas, capacidad, chasis){
//         this.tipo = tipo
//         this.numRuedas = numRuedas
//         this.cilindraje = cilindraje
//         this.color = color
//         this.capacidad = capacidad
//         this.chasis = chasis
//     }
//     static capacidad(tipo, capacidad){
//         return new VehiculoStatic(tipo, "", "", "", capacidad, "")
//     }
//     static descripcion(tipo, color, numRuedas){
//         return new VehiculoStatic(tipo, color, "",numRuedas, "", "")
//     }
//     getTipo(){
//         return this.tipo
//     }
//     getRuedas(){
//         return this.numRuedas
//     }
//     getCilindraje(){
//         return this.cilindraje
//     }
//     getColor(){
//         return this.color
//     }
//     getTipoChasis(){
//         return this.chasis
//     }
//     getCapacidad(){
//         return this.capacidad
//     }
// }

// const carroCap = VehiculoStatic.capacidad("Camioneta", "5 Ton")
// console.log(carroCap.getTipo())
// console.log(carroCap.getCapacidad())

// // Encapsulación proceso que permite ocultar y volver seguras las propiedades de un objeto. Donde solo se permite acceder a través de otro mecanismo que no es el propio objeto
// // Notación clase
// class ClaseBackEndEncap{
//     #name
//     constructor(name){
//         this.#name = name
//     }
//     getName(){
//         return this.#name
//     }
//     setName(value){
//         this.#name = value
//     }
// }
// const backEncapObj =  new ClaseBackEndEncap("Back End")
// backEncapObj.name = "Front"
// console.log(backEncapObj.name)
// console.log(backEncapObj.getName())
// backEncapObj.setName("Front End")
// console.log(backEncapObj.getName())
// // Notación Función

// function BackEncap(value){
//     var name = value
//     var publicMethods = {
//         getName: function(){
//             return name
//         },
//         setName: function(value){
//             name = value
//         }
//     }
//     return publicMethods
// }

// const backObjeEncapFun = new BackEncap("Back End")
// console.log(backObjeEncapFun.getName())
// backObjeEncapFun.setName("Front End")
// console.log(backObjeEncapFun.getName())


// // Abstracción oculta los detalles de la implementación y solo permite observar el comportamiento
// // Notación clase
// class ClaseBackEndAbstract{
//     #name
//     #students

//     getName(){
//         return this.#name
//     }
//     setName(value){
//         this.#name = value + " Class"
//     }
//     setStudents(value){
//         this.#students = value
//     }
//     getStudentsByProject(){
//         return this.#students/5
//     }
// }

// const backAbstractObj = new ClaseBackEndAbstract()
// console.log(backAbstractObj.getName())
// backAbstractObj.setName("Back End")
// console.log(backAbstractObj.getName())
// backAbstractObj.setStudents(120)
// console.log(backAbstractObj.getStudentsByProject())

// // Notación función

// function BackAbstract(){
//     let name
//     let students
//     var publicMethods = {}
//     publicMethods.setName = function(value){
//         name = value
//     }
//     publicMethods.getName = function(){
//         return name
//     }
//     publicMethods.setStudents = function(value){
//         students = value
//     }
//     publicMethods.getStudentsByProject = function(){
//         return students/5
//     }
//     publicMethods.getActiveSyncroClass = function(){
//         return students*.4
//     }
//     return publicMethods
// }

// const backObjeAbstractFun = new BackAbstract()
// backObjeAbstractFun.setName("Back End")
// console.log(backObjeAbstractFun.getName())
// backObjeAbstractFun.setStudents(120)
// console.log(backObjeAbstractFun.getStudentsByProject())
// console.log(backObjeAbstractFun.getActiveSyncroClass())

// // Herencia es un proceso en el cual, la clase hija puede heredar propiedades y metodos de una clase padre
// // La herencia en JS se construye dentro objetos  y cada uno de llos tiene una propiedad llamada prototipo la cual se refiere directament al clase padre del objeto 

// class Clases{ // Clase padre, es un clase general que no es muy detallada
//     constructor(name){
//         this.name = name
//     }
//     getName(){
//         return this.name
//     }
// }

// class ClaseBackHerencia extends Clases { // Primer parametro es la clase hija, y segundo parametro se extiendo de la clase padre
//     constructor(name, students, modulos){
//         super(name)
//         this.students = students
//         this.modulos = modulos   
//     }
//     getStudents(){
//         return this.students
//     }
//     getModules(){
//         return this.modulos
//     }
//     printClassDescription(){
//         return `La clase ${this.name} tiene ${this.students} estuidantes, con ${this.modulos} por ver`
//     }
// }

// const backHerenciaObj = new ClaseBackHerencia("Back End", 120, 15)
// console.log("Estuidantes ",backHerenciaObj.getStudents())
// console.log("Curso ", backHerenciaObj.getName())
// console.log(backHerenciaObj.printClassDescription())

// const backParentObj = new Clases("Front Ent")
// console.log("Curso ", backParentObj.getName())//

// // Polimorfismo

// class ClaseBackPoly extends Clases { // Primer parametro es la clase hija, y segundo parametro se extiendo de la clase padre
//     constructor(name, students, modulos){
//         super(name)
//         this.students = students
//         this.modulos = modulos   
//     }
//     getStudents(){
//         return this.students
//     }
//     getModules(){
//         return this.modulos
//     }
//     printClassDescription(){
//         return `La clase ${this.name} tiene ${this.students} estuidantes, con ${this.modulos} por ver`
//     }
//     getName(){
//         let namePoly = "Esta es la clase " + this.name
//         //super.getName()
//         return namePoly
//     }
// }
// const backPolyObj = new ClaseBackPoly("Back End", 120, 15)
// console.log( backPolyObj.getName())

// const backParentObj2 = new Clases("Front End")
// console.log("Curso ", backParentObj2.getName())

// // Asociación principio de diseño que dice que diferentes objetos pueden estar asociados uno con el otro para realizar alguna tarea

// // Tipo Agregación, un objeto puede existir aún si su asociación es destruida

// class Description{
//     constructor(velocidad, peso){
//         this.velocidad =  velocidad
//         this.peso = peso
//     }
// }
// class Auto{
//     constructor(descripcion){
//         this.descripcion = descripcion
//     }
//     printDescripcion(){
//         console.log(this.descripcion)
//     }
// }

// let pepito = new Description("300 km/h", "1600 kg")
// const automovil = new Auto(pepito)
// automovil.printDescripcion()
// pepito = null
// automovil.printDescripcion()
// const automovil2 = new Auto(pepito)
// automovil2.printDescripcion()

// // Tipo Composición, los objetos están sumamenta acoplados y no pueden existir independientemente uno del otro

// class Description1{
//     constructor(velocidad, peso){
//         this.velocidad =  velocidad
//         this.peso = peso
//     }
// }
// class Auto1{
//     constructor(velocidad, peso){
//         this.descripcion = new Description(velocidad, peso)
//     }
//     printDescripcion(){
//         console.log(this.descripcion)
//     }
// }

// const automovil1 = new Auto1("300 km/h", "1600 kg")
// automovil1.printDescripcion()

// console.log("============================ Getters Y Setters ============================")

// // Metodo Getter permite acceder a las propiedades de un objeto
// // Acceso a la propiedad, con la palabra reservada get, se define un método getter

// const getterObj = {
//     name: "Getter",
//     get getName(){
//         return this.name
//     },
//     getName2:function(){
//         return this.name
//     }
// }
// console.log(getterObj.name)
// console.log(getterObj.getName)
// // console.log(getterObj.getName()) // No funciona y retorna error porque es un getter que es un métdo interno de un objeto 
// console.log(getterObj.getName2())

// // Metodo Setter permite modificar las propiedades de un objeto
// // Modicación a la propiedad, con la palabra reservada set, se define un método setter

// const setterObj = {
//     name: "Setter",
//     set changeName(valueSet){
//         this.name = valueSet
//     }
// }
// console.log(setterObj.name)
// setterObj.name = "Setter Mod Property"
// console.log(setterObj.name)
// setterObj.changeName = "Setter Mod"
// console.log(setterObj.name)

// // Object.define.Property() permite definir setter y getter sobro objeto de java scritp luego de la definición del propio objeto.
// // Object.defineProperty(nombre_objeto, nombre_propiedad, descripcion_propiedad)
// const propertyObject = {
//     name: "Prueba Object.define.Property"
// }

// console.log(propertyObject.getName) // método aún no existe
// propertyObject.changeName = "Estoy cambiando el nombre"
// console.log(propertyObject)

// // getter property
// Object.defineProperty(propertyObject, "getName",{
//     get : function()    {
//         return this.name
//     }
// })
// // setter property
// Object.defineProperty(propertyObject, "changeName",{
//     set : function(valueSet)    {
//         this.name = valueSet
//     }
// })

// console.log( propertyObject.getName)
// propertyObject.changeName = "Estoy cambiando el nombre"
// console.log( propertyObject.getName)
// console.log(propertyObject)

// console.log("============================ Scope ============================")
// // En java script el scope hace referencia a como se determina la accesibilidad de las variables, o en palabras sencillas a que puede ver que.
// // JS tiene 3 tipos de scope, antes del 2015 solo existían el global y el de función
// // Cuando tenemos acceso limitado solo dentro de los bloques o funciones a variables, a estas se les llama varaibles locales (Scope Local)

// // Bloque
// // Se tiene las palabras reservadas de let y const, donde el bloque siempre va a estar determinado por los corchetes ( {} )
// // y dichas definicioens con let y const dentro de un bloque no podrán ser accedidas desde fuera del bloque
// {
//     let testBloque = 1
//     const testBloque1 = 2 
//     var testBloqueVar = 3
//     console.log(testBloque, testBloque1)
//     console.log(testBloqueVar)
// }
// // console.log(testBloque, testBloque1) // No se puede acceder a las definiciones con let y const
// console.log(testBloqueVar) // Me permite acceder a las variables del bloque definidas con var
// // yo puedo definir las variables locales dentro de otros scopes y no se van a modificar o cambiar su comportamiento local.
// {
//     let testBloque = 1
//     const testBloque1 = 2 
//     var testBloqueVar = 5
//     console.log(testBloque, testBloque1)
//     console.log(testBloqueVar)
// }
// console.log(testBloqueVar) 

// // Función
// // Se tiene que cada función crea su propio scope, es decir, cada función tiene un mundo a parte.
// // Todas las variables definidas dentro de un función son variables locales, es decir, no se tiene acceso fuera de la función.

// function scopeFunc(){
//     let testFuncLet = 1
//     const testFuncConst = 2 
//     var testFuncVar = 5
//     console.log(testFuncLet, testFuncConst, testFuncVar)
// }
// // console.log( testFuncLet) // No se pueden acceder desde fuera de la función
// // console.log( testFuncConst) // No se pueden acceder desde fuera de la función
// // console.log( testFuncVar) // No se pueden acceder desde fuera de la función

// // Global
// // Por definición una variable fuera de un bloque es o se comporta como variable global y todos los procesos, funciones o scripts dentro del programa tendrán acceso a ellas
// let testGlobal = "Test global let"
// const testGlobalConst = "Test global const"
// var testGlobalVar = "Test global var"
// {
//     console.log(testGlobal)
//     console.log(testGlobalConst)
//     console.log(testGlobalVar)
// }
// function testGlobalFunc(){
//     console.log(testGlobal)
//     console.log(testGlobalConst)
//     console.log(testGlobalVar)
// }
// testGlobalFunc()
// // las funciones y objetos dentro de js son variables globales
// // Si  se asigna un valor a una variable que no ha sido declarada, esta se volverá global de forma automática.
// function globalTestFunc(){
//     testGlobalAuto = "Esto es global"
// }

// console.log(testGlobalAuto)
// console.log("============================ Use Strict ============================")
// Use Strict
// Es una directiva o una sentencia que se usa para evitar errores dentro de las definiciones del desarrollo dentro de JS, permite mejorar el uso de buenas practicas en JS

// "use strict"

// // testUseStrict = "Esto es use strict"
// // console.log(testUseStrict)

// globalTestFunc()
// function globalTestFunc(){
//     testGlobalAuto = "Esto es global"
// }

// x = 123
// console.log(x)
// globalTestFunc()
// function globalTestFunc(){
//     "use strict"
//     y = "Esto es global"
// }

// Que no se puede hacer en Strict Mode

// * usar variables sin declaración
// "use strict"
// a = 123
// obj = {hola1:1, hola2:2}

// Borrar variables o objetos 
// "use strict"
// let x = 123
// delete x
// x=null

// Duplicar parémtros o argumentos de entrada en una función
//"use strict"
// function test(test1, test1 ){
//     test1
// }
// test(1,2)

// Escribir numeros con ceros a la izq
// let x = 010
// "use strict"
// var objTest = {}
// Object.defineProperty(objTest, "hola", {hola1:1}) 
// console.log(objTest)

// Accesar a  una propiedad de get-only o un getter, para sobreescribirlo
// "use strict"
// const objTest = {
//     get testGet(){
//         return 0
//     }
// }
// console.log(objTest.testGet)
// objTest.testGet = "Hola"

// Poder usar la palabra reservada eval para asignar un valor
//let eval = 1

// Poder usar eval para crear variables
// eval("x = 2")
// console.log(eval("x = 2") )
// console.log(eval("var x = 2") )


// console.log("============================ This ============================")

// // Siempre hace referencia a un objeto, importante tener el contexto de como se llama this, para saber que uso darle
// // * CUando se usa dentro de una función o método, this hace referencia siempre a un objeto
// // * Cuando está sola la palabra this hace referencia aun objeto global
// // * En strict mode this solo es un undefined
// // * En un evento, this hace referencia a el elemnto que recibe el evento
// // * this no es una variable

// // This se refiere a un objeto
// const objThis  = {
//     name : function() {
//         return this.name
//     }
// }

// // This solo, objeto global
// let thisSolo = this 
// console.log(thisSolo)

// // This en función

// function thisFunc() {
//     return this
// }
// console.log(thisFunc())

// // En strict mode, this como return siempre será undefined

// // This como metodo vinculante

// const vehiculo = {
//     tipo : "Carro",
//     ruedas : 4,
//     traccion : "trasera",
//     vehiFunc : function(){
//         return this
//     },
//     vehiDescFunc : function() {
//         return `El vehículo es un ${this.tipo} y tiene ${this.ruedas} ruedas y tracción ${this.traccion}`
//     }
// }

// console.log(vehiculo.vehiFunc())
// console.log(vehiculo)
// console.log(vehiculo.vehiDescFunc())


// // Metodos vinculates 

// // call(), permite hacer uso de propiedades de un objeto en otro.
// const moto = {
//     descripcion : function() {
//         return `La moto es marca ${this.marca} y es de cilindraje ${this.cinlindraje}`
//     }
// }
// console.log(moto.descripcion())

// const motoDesc = {
//     marca : "BMW",
//     cinlindraje : "1000 cc"
// }

// console.log(moto.descripcion.call(motoDesc))


// // bind(), es una función de prestamo
// const curso = {
//     nombre : "BackEnd",
//     estudiantes : 120,
//     descripcion : function(){
//         return `El curso de ${this.nombre} tiene ${this.estudiantes} inscritos`
//     }
// }
// console.log(curso.descripcion())

// const cursoFront = {
//     nombre : "FrontEnd",
//     estudiantes : 50,
//     intensidad : 12.5

// }
// let frontFuncPrestamo = curso.descripcion.bind(cursoFront)
// console.log(frontFuncPrestamo())

// // apply(), permite hacer uso de argumentos como array

// const cursoApply = {
//     descripcion : function(modalidad, modulos){
//         return `El curso de ${this.nombre} tiene ${this.estudiantes} inscritos, con una modalidad ${modalidad} y ${modulos} modulos`
//     }
// }
// console.log(cursoApply.descripcion())

// const cursoFrontApply = {
//     nombre : "FrontEnd",
//     estudiantes : 50,
// }
// console.log(cursoApply.descripcion.apply(cursoFrontApply, ["virtual", 15]))

// // Ejemplo
// const pokemonGolem = {
//     tipo : "Tierra",
//     nombre : "Golem",
//     poder : "Super Puño"
// }
// console.log(`El pokemon ${pokemonGolem.nombre} es de tipo  ${pokemonGolem.tipo}`)

// const pokemonTierra = {
//     pokemonTipo : function() {
//         return "Este pokemon es de tipo " +this.tipo
//     }
// }

// console.log(pokemonTierra.pokemonTipo())

// console.log(pokemonTierra.pokemonTipo.call(pokemonGolem))


// console.log("============================ Exports/Imports ============================")

// // Revisar el archivo de export_test.js para validar como se exportan
// import { nombreCurso, cursoFunc } from "./export_test.js"
// console.log(nombreCurso)
// console.log(cursoFunc())

// console.log("============================ Debugging ============================")

// // Debugging es el proceso mediante el cual podemos evidenciar comportamientos dentro del código.

// // Tipos de Debug en JS

// // console.log()
// let a = 1
// let b = 2
// let c = a + b
// console.log("Referencia resultado operación en C")
// console.log(c)
// let x = 1
// let y = 2
// let z = x * y
// console.log("Referencia resultado operación en Z")
// console.log(z)

// // BreakPoints
// // Son puntos de referencia donde el código va detenerse para empezar el proceso de debug de forma controlada


// // Debugger palabra reservada que me premite establer un endpoint dentro del propio código js

// debugger
// let text1 = "Esto es el texto 1"
// console.log(text1)
// let text2 = "Esto es el texto 2"
// console.log(text2)



// console.log("============================ Style Guide ============================")

// // Nombre de variables

// // Los nombres de las variables deben estar en camelCase, dende la primera palabra empieza en minúscula y las que le siguen empiezan con mayúscula

// let primeraVariable = "Variable con camelCase"
// let camel = "camelCase"

// // Espacios en las operaciones (*, +, -, /, =, % etc) y procesos que sean separados por coma
// let x = 1
// let y = 2
// let z = x + y
// const arrayTest = [1, 2, 3, "Hola"]
// const objTest = { numero1: 1, numero2: 2, numero3: 3 }

// // Indentación, se debería hacer con dos espcios, el profe carlos usa tab
// const objTest1 = {
//     numero1: 1,
//     numero2: 2,
//     numero3: 3,
//     numero4: 4,
//     numero5: 5,
//     numero6: {
//         letraa: "a",
//         letrab: "b",
//     }
// }

// function testFunc(test) {
//     return test
// }

// // Reglas de sentencias
// // Se puede o no usar el ; para finalizar la sentencia, sin embargo si se va a usar, usarlo siempre y sino no usarlo nunca.
// // Siempre colcar un espacio antes de abrir un corchete
// // Colocar la apertura del corchete d eun bloque siempre la misma linea de la definición
// // Colocar el corchete de cerrado del bloque siempre en un linea aparte y sin espacion


// for (let i = 0; i < 2; i++) {
//     console.log(i)
// }

// if (x < 2) {
//     curso = "Back"
// } else {
//     curso = "Front"
// }

// // Reglas de objetos
// // Colocar la apertura del corchete d eun bloque siempre la misma linea de la definición
// // Colocar el corchete de cerrado del bloque siempre en un linea aparte y sin espacion
// // Despues de los 2 puntos colocar un espacio para definir el valor de una propiedad
// // Para valores de tipo string, usar comillas dobles y no sencillas
// // No usar coma cuando se tiene la ultima propiedad-valor
// // Para objetos cortos, sus propiedades y valores se pueden definir en una sola linea
// let objStatemens = {
//     objeto1: 1,  
//     objeto2: {
//         objetoa: "a",
//         objetob: "b"
//     }
// }

// const objRule = {numero1: 1, numero2: 2, numero3: 3}

// // Longitud máxima de la linea debería ser de 80 caracteres

// const lenghtRule = {numero1: 1, numero2: 2, numero3: 3, numero4: 4, numero5: 5,
//     numero6: 6
// }

// //Convención de nombres
// // Variables y funciones en camelCase
// // Variables Globales en MAYÚSCULA SOSTENIDA
// // Constantes de objetos conocidos (como PI) en MAYÚSCULA SOSTENIDA

// // Extensiones de archivos
// // HTML la extensión es .html o .htm
// // CSS la extesión  es .css
// // JavaScript la extensión es .js

// console.log("============================ Buenas Prácticas ============================")

// // Evitar el uso de variables globales, porque se pueden realizar sobreescrituras de las mismas y cambiar su comportamiento.
// // Siempre declarar las variables y constantes con las palabras reservadas var, let y const, ya que de no hacerlo, dichas variables serán globales.
// // Todas las declaraciones se deberían hacer al principio del bloque o del script

// // =============================== Inicio Código ==========================================
// let nombre1, nombre2, nombre3
// const constante1 = "Esto es constante" 

// // Usar más adelante
// nombre1 = "Carlos"
// nombre2 = "Dario"
// nombre3 = "Pedro"

// // Inicializar todas las variables
// let nombre11 = "Carlos"
// let nombre22 = "Dario"
// let nombre33 = "Pedro"
// let numero1 = 1
// const arrayTest = []
// const objectTest = {}
// let nullVar = null
// let textTest = ""

// // Declarar los objetos y los array's como const, esto previene que un cambie accidentamente de tipo ese array o objeto
// // Ejemplo mal array
// let motos = ["S1000R", "M1", "GSR750"]
// console.log(motos)
// motos = "motos"
// console.log(motos)
// // Ejemplo bien  array
// const motosConst = ["S1000R", "M1", "GSR750"]
// console.log(motosConst)
// motosConst[3]="H2r"
// console.log(motosConst)
// // motosConst = "motos"

// // Ejemplo mal objeto
// let vehiculoDesc = {tipo: "Carro", ruedas: 4, tranccion: "Trasera"}
// console.log(vehiculoDesc)
// vehiculoDesc = "Un gato"
// console.log(vehiculoDesc)

// // Ejemplo bien objeto
// const vehiculoDesc1 = {tipo: "Carro", ruedas: 4, tranccion: "Trasera"}
// console.log(vehiculoDesc1)
// // vehiculoDesc1 = "Un gato"
// vehiculoDesc1.licencia = "B1"
// console.log(vehiculoDesc1)

// // Hay que tratar de evitar usar el "use Object()", es decir, la inicialización a través de new

// // Definir un string

// let stringMal = new String() // Mal
// let stringBien = "" // forma primitiva de String
// let numberMal = new Number() // Mal
// let numberBien = 0 // forma primitiva de Number
// let boolMal = new Boolean() // Mal
// let boolBien = false // forma primitiva de Boolean
// const objectMal = new Object() // Mal
// const objectBien = {} // Objeto nuevo
// const arrayMal = new Array() // Mal
// const arrayBien = [] // Array nuevo
// const regexMal = new RegExp() // Mal
// const regexBien = /()/ // Regex nuevo
// const fucntionMal = new Function() // Mal
// const fucntionBien = function() {} // Regex nuevo


// // Ser muy conscientes de la conversión automática en JS

// let x = "Test" // Tipo de dato string
// x = 5 // Cambio a tipo number

// // Importante tener en cuenta que los datos de tipo number se pueden cambiar a strings o NaN, cuando se hacen operaciones matemáticas
// let y = 5 + "7" 
// console.log(typeof y)
// let z = 5 - "7" 
// console.log(typeof z)
// let w = 5 - "x" 
// console.log(typeof w)
// console.log(w)
// let text = "Back" - "End"
// console.log(typeof text)
// console.log(text)

// // Usar siempre comparaciones estrictas

// console.log(0 == '')
// console.log(1 == '1')
// console.log(0 === '')
// console.log(1 === '1')
// console.log(1 !== '1')

// // Hacer uso de parámetros por default, o tener siempre presente que se deben polular todos los argumentos de una función, mientras esos argumentos no tengan valores por default

// function argsDefault(value1 = 1, value2 = 2) {
//     return value1 + value2
// }
// console.log(argsDefault())

// // Recomendación personal profesor, es siempre tener en cuenta los argumentos de la función
// function fillArgs(value1, value2) {
//     return value1 + value2
// }
// console.log(fillArgs(1, 3))


// // Switch con valores por defecto
// let day 
// switch (new Date().getDay()) {
//     case 0:
//         day = "Domingo"
//     case 1:
//         day = "Lunes"
//     default:
//         day = "Cualquier Día"
// }
// console.log(day)

// // tipos de datos (number, string, boolean) como objetos

// let stringOk = "Carlos"
// let stringObje = new String("Carlos")
// console.log(stringOk===stringObje)
// console.log("Tipo de datos para stirngOK: ", typeof stringOk)
// console.log("Tipo de datos para stirngObje: ", typeof stringObje)
// let stringObje2 = new String("Carlos")
// console.log(stringObje2===stringObje) // Los objetos no se pueden compara 



// console.log("============================ JS Asíncrono ============================")
// // Asíncrono en programación es un proceso que se da luego de una ejecución y no en tiempo real.
// // Los procesos asíncronos se dan cuando exisite un proceso que tarda mucho tiempo o que depende de otros procesos.

// // Callbacks, signifca ques una función usado como un argumento de otra función. Donde usar una función corriendo otra
// // Tipos de callback

// // Función de secuencia, esto significa que la función se ejecutará cuando sea llamada y no en la secuencia en la que se define.
// function sequenceFirst() {
//     return "Función definida primero"
// }

// function sequenceSecond() {
//     return "Función definda segundo"
// }

// console.log(sequenceSecond())
// console.log(sequenceFirst())

// //  Control de la secuencia, haga uso de un callback para controlar en que momento se hace uso de una función u otra.
// // Secuencia normal
// function returnAlgo(algo) {
//     return algo
// }
// function descripcion(tipo, marca) {
//     return `El vehículo es de tipo ${tipo} y marca ${marca}`
// }

// let descripcionString = descripcion("Carro", "BMW")
// console.log(returnAlgo(descripcionString))

// // Secuencia controlada
// function controlSequence(tipo, marca) {
//     let texto = `El vehículo es de tipo ${tipo} y marca ${marca}`
//     return returnAlgo(texto)
// }

// console.log(controlSequence("Carro", "BMW"))

// // Callbacks

// function callbackFunc(value) {
//     console.log(value)
// }
// function callbackFunc1(value) {
//     console.log(value+ "esto es otro callback")
// }

// function descripcionCallback(tipo, marca, callbackArg) {
//     let text = `El vehículo es de tipo ${tipo} y marca ${marca}`
//     callbackArg(text)
// }

// descripcionCallback("Carro", "BMW", callbackFunc1)

// // Ejemplo callback

// const numbers = [1, 20, -15, 2, -3]

// function validarPositivos(individualNumber) {
//     if (individualNumber >= 0) {
//         return individualNumber
//     }
//     return 
// }

// function quitarNegativos(callback, arrayNumbers) {
//     const positiveNumbers = []
//     for (const number of arrayNumbers) {
//         if (callback(number)) {
//             positiveNumbers.push(number)
//         }
//     }
//     return positiveNumbers
// }

// console.log(quitarNegativos(validarPositivos, numbers))


// // const positiveNumbers1 = []
// // for (let i = 0; i < numbers.length; i++) {
// //     if (validarPositivos(numbers[i])) { 
// //         positiveNumbers1.push(numbers[i])
// //     }
// // }
// // console.log(positiveNumbers1)

// const motos = ["S1000R", "GSR750", "Afrika Twin", "Husqvarna 701", "Streetfighter", "Multiestrada"] 

// function selectMotos(value) {
//     if (value.startsWith("S")) {
//         return value
//     }
//     return 
// }
// console.log(quitarNegativos(selectMotos, motos))

// // Proceso Asíncrono
// // Es un proceso que se ejecuta luego del runtime, no es inmediato y puede tardar un poco más que un proceso síncrono
// // Todas funciones que corran en paralelo con otras funciones son llamadas asíncronas.

// // Función asíncrona setTimeout(), ejecuta un proceso después de un tiempo asignado.
// function setTimeFunct() {
//     console.log("Este ese el curso de BackEnd intermedio")
// }
// // //setTimeFunct()
// // setTimeout(setTimeFunct, 3000)
// // console.log(typeof setTimeFunct)

// // // Uno podría en vez de pasar el nombre de la función como argumento de otra función, se podría pasar el la función como tal definida.
// // function setTimeFunct2(value) {
// //     console.log(value)
// // }
// // console.log(typeof setTimeFunct2("HOla"))
// // //setTimeout(setTimeFunct2("test"), 3000) //Es un error porque no se pueden pasar el resultado de una fu nción all callback
// // setTimeout(function() {setTimeFunct2("Este es el curso de BackEnd")}, 3000)

// // Función asíncrona setInterval, va a ejecutar el callbak para cada intervalo 

// // function horaUTC() {
// //     let hora = new Date()
// //     console.log( `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`)
// // }

// // setInterval(horaUTC, 5000)



// // Promesas en java script

// // Existen dos definiciones dentro de una promesa.
// // * Código productor que es un código que puede tomar cierto tiempo de ejecución
// // * Código consumidor, que es un código que debe esperar por el resultado.
// // entonces las promesas son un objeto que permite contectar el código productor con el consumidor.

// // Definición de un promersa
// let promiseDefinition = new Promise(function(myResolve, myReject) {
//     //Código Productor
//     myResolve()
//     myReject()
// })


// // Código consumidor
// promiseDefinition.then(
//     function(value) {/* Cuando la lógica sea correcta */},
//     function(error) {/* Cuando la lógica sea incorrecta */}
// )

// // La promesa me arroja 2 propiedades de respuesta.
// // * El resultado donde yo puedo tener 2 estados "Success" o "Error"
// // * El estado como tal de la promesa:
// //      - "pending" (cuando el proceso sigue en ejecución), 
// //      - "fulfilled" (cuando el proceso terminó satisfactoriamente)
// //      - "rejected" (Cuando el proceso falló)

// // las promesas son un objeto que tiene como propiedades los valores "state" y "result"

// // Ejemplo de promesa

// function displaySomething(text) {
//     console.log(text)
// }

// let eje1Promise = new Promise(function(myResolve, myReject) {
//     let x = 5
//     if (x == 0) {
//         myResolve("OK")
//     }else if (x == 1){
//         myResolve("OK pero con 1")
//     }else if (x == 2){
//         myReject("Error pero con 2")
//     } else {
//         myReject("Error")
//     }
// })

// eje1Promise.then(
//     function(value) { displaySomething(value) },
//     function(error) { displaySomething(error) },
// )

// // setTimeOut usando promesas

// let timeOutPromise = new Promise(function(myResolve, myReject) {
//         setTimeout(function() {myResolve("Este curso es el mejor de Todos a la U")}, 1)
// })


// function displaySomething1(text) {
//     console.log(text) 
// }

// timeOutPromise.then(
//     function(error) { displaySomething1(error) },
// )

// // Waiting for response 
// // Callback PENDIENTE

// // function displaySomething2(text) {
// //     console.log(text) 
// // }
// // function getResponse(callback) {
// //     const https = require('https');
// //     const options = {
// //         host:"https://pokeapi.co/api/v2/pokemon/pikachu",
// //         method:'GET'
// //     }
// //     var req = https.request(options, (res) => {
// //         callback(res.statusCode)
// //     }

// //     )
// //     req.end()
// //     //let req =  new XMLHttpRequest()
// //     //let response  = fetch("https://www.google.com/")
// //     //req.request("get", "mycar.html")
// //     // req.open("get", "mycar.html")
// //     // req.onload = function() {
// //     //     if (req.status == 200) {
// //     //         callback(req.responseText)
// //     //     } else {
// //     //         callback("Error: " + req.statusText)
// //     //     }
// //     // }
// //     // req.send()
// // }

// // getResponse(displaySomething2)

// // Async y Await

// // Async hace que una función retorne una promesa
// function displaySomething2(text) {
//     console.log(text) 
// }

// async function asyncFunction() {
//     return "Test Async"
// }

// asyncFunction().then(
//     function(value) {displaySomething2(value)}
// )
// // Por defecto cuando la promesa no tiene definida le nombre de la funcion de respuesta correcta
// // Js entiende la palabra "resolve" como el nombre de dicha función
// function withoutAsyncFunc() {
//     let x = 1
//     if (x == 0){
//         return Promise.resolve("Success Without Async")
//     } else {
//         return Promise.reject("Error Without Async")
//     }
// }
// withoutAsyncFunc().then(
//     function(value) {displaySomething2(value)},
//     function(value) {displaySomething2(value)}
// )

// // Await
// // Hace que una funcion espere la promesa, es decir, pausa al proceso que esté ejecutando el método hasta obtener una respuesta.
// // await siempre se usa dentro de una función async

// async function awaitFunc() {
//     let awaitPromise = new Promise(function(myResolve, myReject) {
//         setTimeout(function() {myResolve("Esperando respuesta")}, 1000)
//     })
//     console.log(await awaitPromise)
//     console.log("Otra cosa"+await awaitPromise)
// }   

// awaitFunc()


console.log("============================ AJAX ============================")

// AJAX = Asynchronous JavaScript And XML
// NO es un lenguaje de progración, simplemente es la combinación de JS y el DOM de HTML, poder construir desde un navegador una petición http request.
// AJAX  nos permite actualizar de forma asíncorna las paginas web intercambiando data con el servicio  por detrás, esto represtnta que también puedo cambiar
// partes del front (No todo el front) sin refrescar la pagina web

// Como funciona

// * Lo primero se da en el página web, donde algún proceso se ejecuta (click a algún componente por ejemplo)
// * Se crea un objeto XMLHttpRequest, el cual es creado por JS
// * Luego de creado el request es enviado al servicio web
// * El servidor procesa esa petición
// * Para luego enviar la resputa de la lógica hacia la página web
// * La información de respuesta es proesado por JS
// * Se ejecuta la acción pertinente según la respuesta dada.


// XMLHttpRequest, es basado en callbacks

// // Pasos a seguir para la creación de una petición

// // Crear el objeto XMLHttpRequest
// const objXMLHttpReq = new XMLHttpRequest()

// // Se debe definir el callback function, para que procese la respuesta a la petición
// objXMLHttpReq.onload = function() {

// }

// // Se debe hacer el envio de la petición y acá se presenta 2 pasos
// // Se abre la conexión el servicio web o el servicio del que esperamos una respuesta
// objXMLHttpReq.open("GET", "www.google.com")
// // Se envia la petición al servicio web
// objXMLHttpReq.send()


// Métodos del objeto http request

// abort(), me permite cancelar el request actual
// getAllResponseHeaders(), permite leer todos los datos asociados a un header
// getResponseHeader(), Me retorna un header específico
// open() Detalles del apeticíon
// -> método, url, async (true (asíncrono) y false (síncrono)), user, psw
// send(), enviar el request
// setRequestHeader(), Permite añadir headers a la petición


// Propiedades del objeto http request
// onload, me permite definir la función que va a recibir y procesar mi response
// onreadystatechange, definir la función del proceso cuando la propiedad readyState cambie
// readyState, me indica los estados del request
// -> 0:  La petición no ha sido inicializada
// -> 1: Conexión con el servidor fue establecida
// -> 2: La petición fue recibida por el servicio web
// -> 3: Se está procesando la petición
// -> 4: La petición terminó y la respuesta está disponible
// responseText, devuelve la respuesta a mi petición en string
// responseXML, devuelve la respuesta en formato XML
// responseType, permite definir el tipo de respuesta que viene.
// status, retorna los poisbles estados de la petición a nivel http (200, 301, 500, 403, 404)
// statusText, retorna el status a nivel de texto ("OK", "Redirect", "Server Interal Error", "Forbidden", "Bad Request")

// // Ejemplo de AJAX implementado
// const reqPokemon = new XMLHttpRequest()
// reqPokemon.responseType = "json"
// reqPokemon.onload = () => {
//     if (reqPokemon.readyState == 4 && reqPokemon.status==200){
//         const data = reqPokemon.response.effect_changes[0].effect_entries
//         //console.log(reqPokemon.responseText)
//         document.getElementById("api").innerHTML = JSON.stringify(data)
//     } else {
//         console.log(`Error: ${reqPokemon.statusText}` )
//     }
// } 
// reqPokemon.open("GET", "https://pokeapi.co/api/v2/ability/1/")
// reqPokemon.send()


// // Ejemplo post con xmlhttprequest

// const postReq = new XMLHttpRequest()
// postReq.open("POST", "https://dummyjson.com/products/add")
// postReq.setRequestHeader('Content-Type', 'application/json')
// let dataObj = JSON.stringify(
//     {
//         title: "Objeto Nuevo"
//     }
// ) 
// //postReq.responseType = "json"
// postReq.onload = function() {
//     if (postReq.status == 200) {
//         document.getElementById("api2").innerHTML = postReq.responseText
//     } else {
//         console.log(`Error: ${postReq.statusText}` )
//     }
// }
// postReq.send(dataObj)

// // Multiple Callback functions

// function pokemonFunc(url, callback) {
//     const pokemonHttp = new XMLHttpRequest()
//     pokemonHttp.responseType = "json"
//     pokemonHttp.onload = function() {callback(this)}
//     pokemonHttp.open("GET", url)
//     pokemonHttp.send()
// }

// function callbackBerry(httpObj) {
//     if (httpObj.readyState == 4 && httpObj.status==200){
//         const data = httpObj.response.berries[2]
//         //console.log(reqPokemon.responseText)
//         document.getElementById("berries").innerHTML = JSON.stringify(data)
//     } else {
//         console.log(`Error:  Berries fail with status ${httpObj.statusText}` )
//     }
// }
// function callbackEncounter(httpObj) {
//     if (httpObj.readyState == 4 && httpObj.status==200){
//         const data = httpObj.response.condition
//         document.getElementById("encounter").innerHTML = JSON.stringify(data)
//     } else {
//         console.log(`Error:  encounter fail with status ${httpObj.statusText}` )
//     }
// }

// pokemonFunc("https://pokeapi.co/api/v2/berry-flavor/1/", callbackBerry)
// pokemonFunc("https://pokeapi.co/api/v2/encounter-condition-value/2/", callbackEncounter)


// // Fetch api basada en promesas

// // Provee una interfaz para acceder y manipular partes del protocolo http, como lo son la petición y la respuesta.
// // el metodo fetch() permite encpasular toda la lógica detrás que puede el xmlhttprequest y ejecutarla de forma asycrona.

// // Definición

// async function fetchDef() {
//     const response = await fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
//     const jsonRender = await response.json()
//     document.getElementById("fetch").innerHTML = JSON.stringify(jsonRender.next)
// }
// fetchDef()

// // Ejemplo post

// async function postFetchFunc(url, data) {
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//     })
    
//     return response.json()
// }

// postFetchFunc("https://dummyjson.com/products/add", {title: "Objeto Fetch"}).then((data) => {
//     document.getElementById("fetchPost").innerHTML = JSON.stringify(data)
// })

let nombre = "Carlos"
nombre =123
nombre = true