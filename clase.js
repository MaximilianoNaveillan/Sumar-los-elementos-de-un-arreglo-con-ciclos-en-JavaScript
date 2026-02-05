//for (inicio;condición;incremento){bloque}
for (let i = 1; i <= 7; i++) {
  console.log(i);
}
console.log('**** WHILE ******');
// ciclos WILE DO/WHILE
let contador = 1;

while (contador <= 3) {
  console.log('Contador:', contador);
  contador++;
}
console.log('***** DO/WHILE');
// cilcos DO/WHILE
//do {} while ()
let numero = 'puedes pasar';
do {
  console.log('Número:', numero);
  console.log('si eres menor de 18 no puedes pasar');
} while (numero !== 'puedes pasar');

console.log('****** forHeach ***********');
// arr.forEach(function (pops o parametros ...) {})
// Ejecuta una acción por cada elemento del arreglo

// Parametros que recibe
// 1- elemento (e) --> (ele) --> (elemento)
// 2- index (opcional) --> posición del elemento
// 3- array (opcional) --> arreglo original

let nombres = ['Felipe', 'Josseline', 'Guillermo'];

nombres.forEach((e, i, arr) => {
  console.log('elemento', e);
  console.log('index', i);
  console.log(arr);
});

console.log('********* map() **********');
// es un método de los arreglos de JS
// recorre cada elemento
// retorna un nuevo arreglo

// Parametros que recibe
// 1- elemento (e) --> (ele) --> (elemento)
// 2- index (opcional) --> posición del elemento
// 3- array (opcional) --> arreglo original

const numeros = [1, 2, 3, 4, 5, 6];

const duplicados = numeros.map((e) => {
  return ` ${e * 2}`;
});

const pares = numeros.map((e) => {
  if (e % 2 === 0) {
    return e;
  } else {
    return 0;
  }
});

const solopares = numeros.map((e) => e).filter((e) => e % 2 === 0);
console.log(numeros);
console.log(duplicados);
console.log(pares);
console.log(solopares);

console.log('****matriz****');

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

console.log('largo de array', matriz.length);

for (let i = 0; i < matriz.length; i++) {
  console.log('array de matriz:', matriz[i]);
  for (let j = 0; j < matriz[i].length; j++) {
    console.log('Elemento:', matriz[i][j]);
  }
}

// Uso de break y continue

// pasos para un for
//for (inicio;condición;incremento){bloque}
for (let i = 1; i < 6; i++) {
  if (i === 4) break; // sale del ciclo cuando i es igual 5
  console.log(i);
}
console.log('______________________');
for (let i = 1; i < 10; i++) {
  if (i === 5) continue; // salta del ciclo cuando i es igual a 5
  console.log(i);
}

// Ejemplo menos recomendado (for)
console.log('menos recomendado (for)');

const n = [1, 2, 3, 4];
console.log(n);
console.log('forma no recomendada (for)');
const duplicado_de_n = [];
for (let i = 0; i < n.length; i++) {
  duplicado_de_n.push(n[i] * 2);
}
console.log(duplicado_de_n);

console.log('forma recomendada (usar map() y no for())');
const duplicadi_recomendado_de_n = n.map((numero) => numero * 2);
console.log(duplicadi_recomendado_de_n);

/* 
Idea clave:
 - si necesitas transformar datos, usa map()
 - si necesitas filtrar datos, usa filter()
 - si necesitas reducir a un solo valor, usa reduce()
*/
