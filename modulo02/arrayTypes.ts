// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

// uso de colchetes
let frutas: string[] = ['🍍', '🍇', '🍒', '🍓', '🍌'];
//console.log(frutas[3]);

// array object
let frutas1: Array<string> = ['🍍', '🍇', '🍒', '🍓', '🍌'];
//no typescript o mais comum é como este exemplo acima.

// adicionar mais strings com o método push
let idiomas: Array<string> = ['Portguês', 'Inglês', 'Alemão', 'Grego', 'Chinês'];
idiomas.push('Japonês');

// método length
let idiomas1: Array<string> = ['Portguês', 'Inglês', 'Alemão', 'Grego', 'Chinês', 'Galego'];
//console.log(idiomas1.length);

// spreade operator
let listaNumeros: Array<number> = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10]; //o spread pega a variável que já contém os dados e adiciona ou agrega os novos


// laço de intereação
//também é uma forma de declarar array object:
let linguagensArray: string[] = new Array('JavaScrpit', 'Java', 'PHP', 'Rust');

function linguagensFunction(linguagens: string[]){
   for (let i = 0; i < linguagens.length; i++) {
       console.log(linguagensArray[i]);
   }
};

linguagensFunction(linguagensArray);