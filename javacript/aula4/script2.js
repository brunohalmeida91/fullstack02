const prompt = require("prompt-sync")();

const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((num) => num * 2);

console.log(numeros);
console.log(dobro);
console.log(" ---- par -----  ↓↓↓↓");

function numerospares(num) {
  return num % 2 === 0;
}

const par = numeros.filter(numerospares);
console.log(par);

console.log(" ---- soma -----  ↓↓↓↓");
const soma = numeros.reduce((num) => num + num);
console.log(soma);

const idade = [10, 20, 5, 35, 45, 72];

function anos(idade) {}

const maiorvalor = Math.max(...idade);
console.log ("maior valor : " + maiorvalor)
/*
function soma (a , b ){
    return a + b ;
}

let resultado = soma(5, 3);
console.log(resultado);


console.log("-------------------------");


function par (numero){
    return numero % 2 ===0 ;
}

console.log(par (5));
console.log(par (8));
console.log(par (4));


console.log("-------------------------");

function mult (a , b){
    return a * b ;
}

console.log(mult (2 , 8));
*/
