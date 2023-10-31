// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

//exemplo tipo casting:
const valor: unknown = 'Olá pessoal!';
console.log((valor as string).length); // converte um tipo para outro.
// podemos usar as ou <com o tipo>

const nome: unknown = 'Igor Fonseca';
console.log((nome as string).toLowerCase());

// ==> Exemplo 02 - Type Casting: '<>'
const carro = 'Corolla';

const tamanhoString: number = (<string>carro).length;

console.log('O tamanho da string é...: ', tamanhoString);