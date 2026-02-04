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

// forEach(pops o parametros ...)
// Ejecuta una acción por cada elemento del arreglo

// Parametros que recibe
// 1- elemento (e) --> (ele) --> (elemento)
// 2- index (opcional) --> posición del elemento
// 3- array (opcional) --> arreglo original
