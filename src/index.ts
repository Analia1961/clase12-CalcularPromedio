//Clase 12 - Ejercicios de Repaso - viernes 27 de mayo de 2022

//Ejercicio – Calcular Promedio
/*
• El DT de los infantiles del equipo de fútbol desea
saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las
edades son cargadas al azar (use la función
aleatorio(menorValor, mayorValor), es decir
aleatorio(3,7))
• Muestre todas las edades y el promedio de las
mismas
*/

let numeroAleatorio = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let cantidadChicos: number = Number(prompt("Ingrese cantidad de chicos"));
let edadMin: number = Number(prompt("Ingrese la edad mínima"));
let edadMax: number = Number(prompt("Ingrese la edad máxima"));
let edades: number[] = new Array(cantidadChicos);
let suma: number = 0;

for (let i: number = 0; i < cantidadChicos; i++) {
  edades[i] = numeroAleatorio(edadMin, edadMax);
  suma = suma + edades[i];
}
console.log("Las edades son:", edades);
console.log(
  "El promedio de las edades es: ",
  (suma / cantidadChicos).toFixed(0),
  " años"
);
