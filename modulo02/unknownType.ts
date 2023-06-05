// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

// tipo unknown
let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Olá, mundo!';

// erro ao tentar atribuir 'unknown' a outros tipos
let valor: unknown;

//let valor1: boolean = valor; //erro

// diferença entre 'any' vs 'unknown'
let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed(2)); //toFixed espera um number.prototype [rever]

//console.log(algumaCoisaUnknown.toFixed(2)); //erro pelo mesmo motivo acima. quando der um erro
// o aconselhavél é fazer uma verificação. por exemplo:
if(typeof algumaCoisaUnknown === 'number'){
   console.log(algumaCoisaUnknown.toFixed(2));
};