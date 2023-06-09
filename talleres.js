/*************** / TALLER 1 *********Variables
 

Para declarar una variable, se puede hacer uso de las palabras reservadas var o let como se ve a continuación.
La sintaxis que se usará para declarar una variable será:
    var / let nombreVariable = valorVariable.
Para ver el valor que se almacena en la variables en JavaScript se puede utilizar el método console.log(nombreVariable) como se ve a continuación*/

var Nombre="andres" 


/*Las variables pueden cambiar de valor en el transcurso del código cómo se ve a continuación*/

var Edad=40
console.log("Mi nombre es "+ Nombre, " y  tengo  "+Edad ," Años")

/*************** TALLER 2*****************
/* En JavaScript se pueden declarar variables con las palabras reservadas var o let
    -let se usa para ambito de bloque o local.
    -var se usa para ambitos globales
El ambito de bloque de manera sencilla es todo lo que esta encerrado por corchetes {}.
*/

//Definición variable global
var pelicula="Interestelar"
//Para concatenar el texto con una variable / constante se utiliza la coma, como se ve a continuación
console.log("Variable pelícu1la antes del bloque:", pelicula)

//Definición variable local.
let musica="Rock"
console.log("Variable música antes del bloque:", musica)

//esto es un bloque
{
    var pelicula="Matilda"
    console.log("Variable película en el bloque:", pelicula)

    let musica="Salsa"
    console.log("Variable música en el bloque:", musica)
}

console.log("Variable película despues del bloque:", pelicula)
console.log("Variable música despues del bloque:", musica)