/*
// creación de prototipo
const sueter = new Object({
    color:'rojo',
    materal:'algodon',
    gorro: false,
    estampado: true,
})

// con el prototype se agrega la función cubrirDefrio a todos los sueter(clase)
Object.prototype.cubrirDeFrio = function() {console.log('cubriendo del frío...')}

const ismael = Object(sueter)
ismael.cubrirDeFrio()


const human = new Object({
    eyes:true,
})

// con ...human, se heredan las propiedades de human a persona
const persona = new Object({
    ...human,
    name:'',
    age:''
})

const ismael = persona


console.log(ismael)

// de esta forma se añaden valores a las plantillas pero sobre objeto-ismael
ismael.name = 'ismael'
ismael.age = 31

console.log(ismael)
// como agregar métodos a una variable ismael
ismael.dormir = function() {console.log('Dormir............')}

console.log(ismael.dormir())

// para copiar propiedades
const copia = new Object({
    ..persona
})
*/

let str = 'hola mundo'
console.log(str.split(' '))
console.log(str.toUpperCase())
console.log(str.replace(' ','$'))

console.log(str.replace(' ','').toUpperCase().split(''))