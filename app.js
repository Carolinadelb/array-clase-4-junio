let names = [];
//let names = new Array;
names [0] = 'Paula'
//Cambia un valor... si ya existe un elemento en la posición 1:
names [1] = 'Majo'

        //PUSH

//Otra manera de agregar elementos(datos) al final de mi arreglo: 
names.push ('Majo', 'teresita', 20, true, false)


      //POP
//Quitar (siempre) el último elemento:
name.pop()

      //SLICE

//  slice (quiero q me copies desde eñl indice tanto al indice tanto).
// número negativo hace correr desde atrás hacia adelante.

const names = ['ale', 'aggretsuko', 'hello kitty', 'violeta', 'caro', 'otronombre'];
//para hacer slice
// names.slice(0, 4), tomara desde ale hasta violeta porque no toma el último valor 4  (0 si la incluye)

// si solo pongo:
//name.slice(2)  ira desde comienza la posición q pide el n°2 hasta el final

const newNames = names.slice(2) //hará que la nueva variable sea del arreglo del nuevo slice.


      //INDEX OF
//busca la posición o indice del elemento que estoy buscando

const cats = ['chica', 'jaspe', 'rubio', 'nena'];
cats.indexOf('rubio'); //devuelve su posicion (2)
cats.indexOf('mori'); // devuelve -1 porque no lo encuentra

      // CONCAT
//crea una copia del arreglo original, pero jámas toca el arreglo original verdadero:
  cats.concat('Morri', 'canela', 'peluso');
//si uno quiere esta version debe guardarlo en una variable:
const newCats = cats.concat('Morri', 'canela', 'peluso');

      //ARREGLO DE OBJETOS 
//los arreglos tmb pueden tener en su interior objetos ejemplo:
const students = [
  {
    names: 'violeta',
    track: 'common core',
    status: true
  },
  {
    names: 'alejandra',
    track: 'common core',
    status: true
  },
  {
    names: 'vane',
    track: 'common core',
    status: true
  },
  {
    names: 'nataly',
    track: 'common core',
    status: true
  }
]
//para acceder a un status ejemplo de vane, se debe 
students[2].status //primero va la posicion, y luego la propiedad de esa posición.
//otro ejemplo
students[0].names

//va a recorrer arreglo, posicion por posicion y va a sacar el nombre (porque pedimos name:

for (let i = 0; i<students.length; i++){
  console.log(students[i].name)
}


//por ejemplo si quiero hacer nueva variable que contenga los mismos nombres de students hago 1° una variable y 2° un for:
let newNamesNew = [] //tiene que ser con arreglo vacío   de ahi esto con push:
for (let=0; i <students.length; i++){
  newNames.push(students[i].name)
}

//sumen los número 10, 20, 30, 40, 50
//primera version
const addition = (n1, n2, n3, n4, n5)=> {
  return n1 + n2 + n3 + n4 + n5
}
//segunda version 
const addition = (...sumandos) => {
  console.log(sumandos)
}

//SPREAD OPERATOR (...) OPERAADOR DE PROPAGRACION LO CONVIERTE EN ARREGLO LO QUE ANTES ESTABA COMO DATOS SUELTOS

//si es mas de un parametro tiene que ir con: (), si es uno solo puede ir solo o con parentesis este esta con ()

const addition = (arr) => {
    let suma = 0;
    for(let i = 0; i<arr.length; i++){
      suma += suma + arr[i];
      //suma = suma + arr [i]
  }
}

//REDUCE
const arr = [1, 2, 3, 4, 5];
const addition = (arr) => {
  //parametros: previousValue, currentValue, index, array 
  const reduceArr = arr.reduce((previousValue, currentValue)) => {
    return previousValue + currentValue

    console.log('el valor previo es: ${previousValue}')
    console.log('el valor actual es: ${currentValue}')
  }); 

