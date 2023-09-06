// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

// exemplo 01 interface simples
interface Pessoa {
   nome: string;
   sobrenome: string;
   idade: number
};

function exibirNome( pessoa: Pessoa){
   return `
   Nome: ${pessoa.nome}
   Sobrenome: ${pessoa.sobrenome}
   Idade: ${pessoa.idade}
   `;
};

const igor = {
   nome: 'Igor',
   sobrenome: 'Fonseca',
   idade: 31,
};

console.log(exibirNome(igor));

// exemplo 02 interfaces com propriedades opcionais
interface Livro{
   titulo: string;
   autor: string;
   paginas?: number;
};

const livro: Livro = {
   titulo: 'qualquer coisa',
   autor: 'qualquer um',
};

// exemplo 03 interface com propriedades somente leitura e opcioanal
interface Carro{
   readonly modelo: string;
   ano: number;
   valor?: number;
};

const carro: Carro = {
   modelo: 'Kombi',
   ano: 1900,
};

// exemplo 04 interface com implements class
interface IAnimal {
   nome: string;
   idade: number;
   estaVivo: boolean;
   //funcões dentro de interface
   comer(tipoComida: string): void;
};

class Gato implements IAnimal{
   nome: string;
   idade: number;
   estaVivo: boolean;

   //sempre rcomenda-se trabalhar com construtores em classes
   constructor( nome: string, idade: number, estaVivo: boolean){
      this.nome = nome;
      this.idade = idade;
      this.estaVivo = estaVivo;
   };

   comer(tipoComida: string){
      console.log(`$(this.nome) comeu ${tipoComida}`);
   };
};

const gato = new Gato('Miaw', 10, true);
console.log(gato);
gato.comer('Ração');


// exemplo 05 Interfaces vs Alias Type

interface Pessoa_02 { //sem '='
   nome: string;
   sobrenome: string;
   idade: number;
 }
 
 type Pessoa_03 = { //com '='
   nome: string;
   sobrenome: string;
   idade: number;
 }