const frutas = ['Maça' , 'Banana' , 'Uva'];
const [primeira, segunda] = frutas

console.log(primeira) // maça
console.log(segunda) // banana

const [, , terceira] = frutas ; // uva

console.log(terceira);

console.log("---------------------------------------------")
const pessoa = {
    nome: 'Ana',
    idade: 25,
    cidade: 'fortaleza'
};

const { nome , idade } = pessoa
console.log(nome);

// Renomear variavel
const {cidade: local} = pessoa;
console.log(local);


console.log("---------------------------------------------")
console.log("---------------------------------------------")

const nome1 = 'Pedro';
const idade1 = 25;

console.log (`ola  ${nome1} voce tem ${idade1} anos`)

console.log("---------------------------------------------")
console.log("---------------------------------------------")


const usuario = {
    perfil: {name: 'Rafael'}
};

// Seguro e limpo

const cidade = usuario.endereco?.cidade;
console.log('cidade');

const name = usuario.perfil?.name;
console.log(name);

const primeiroAmigo = usuario.amigo?.[0];
