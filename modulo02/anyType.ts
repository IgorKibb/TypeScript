// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

// Tipo Any
const a: any = 888;
const b: any = 'Olá mundo';
const c: any = a + b;

console.log(c);

// Quando o tipo Any é inferido implicitamente
let frase;
frase = 'Oi, sumida!';

// Quando devemos usar o tipo Any?
const formulario: {[campoFormulario: string]: any} = {
   nome: 'Igor',
   sobrenome: 'Fonseca',
   idade: 31,
};