// LOS OBJETOS NO SON ITERABLES
const persona = {
  name: 'ismael',
  age: 31,
  height: 1.87,
  gender: 'male',
  alive: true,
  food: ['frutas', 'verduras', 'semillas'],
  eyes: {
    color: 'brown',
    shape: 'circle'
  },
  // forma de crear una función en una clase u objeto
  dormir: function () { console.log('estoy durmiendo') },
  comer: function () { console.log('estoy comiendo......') }
}

// formas de llamar a las propiedades de un objeto
// Con variable dinamica
const dynamic = 'height'
console.log(persona[dynamic])

// con propiedades y punto
console.log(persona.age)

// varias propiedades al mismo tiempo
// console.log(persona['eyes']['color'])

// Acceder a los métodos de una clase u objeto
persona.comer()
persona.dormir()
