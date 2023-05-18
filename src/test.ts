const numeros=[1, 2, 3, 4, 5]
console.log(typeof numeros)
let getNumber = numeros[1]
console.log(typeof getNumber)

// Tuplas nombradas
const datos: [x:number, y:number] = [20, 21]
const [x] = datos
console.log(x)
console.log(datos[0])