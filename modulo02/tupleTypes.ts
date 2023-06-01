// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

// Tuplas em Typescript
let pessoa: [string, string, number];
pessoa = ['igor Fonseca', 'desempregado', 31];
console.log(pessoa);

// acessando o valor da Tupla
let pessoa1: [string, string,  number];
pessoa1 = ['igor Fonseca', 'desempregado', 31];
console.log(pessoa1[1]); //para acessar é igual numa array.

// Tuplas com labels
let pessoa2: [nome: string, posicao: string, idade: number] = ['igor Fonseca', 'desempregado', 31];
console.log(pessoa2);

//tuplas com spread operator
let listaFrutas: [string, ...string[]] = ['🍍', '🍇', '🍒', '🍓', '🍌'];
console.log(...listaFrutas);

// Lista heterogênea de tuplas
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2);

// função com tuplas
function listarPessoas(nomes: string[], idades: number[]){
   return[...nomes, ...idades];
};

let resultado = listarPessoas(['Igor Fonseca'], [31]);

// Labeled tuples com spread opaerator numa função
type Nome =
         | [primeiroNome: string, sobrenome: string] //o pipe | significa "ou"
         | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome){
   return [...nome];
};

console.log(criarPessoa('Igor', 'Fonseca'));