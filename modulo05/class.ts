// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

// classes
class Pessoa {
   nome: string;
   sobrenome: string;

   //construor
   constructor(nome: string, sobrenome: string) {
      this.nome = nome;
      this.sobrenome = sobrenome;
   };

   //método
   nomeCompleto(): string{
      return `${this.nome} ${this.sobrenome}`;
   };
};

const pessoa = new Pessoa('Igor', 'Fonseca');
console.log(pessoa.nomeCompleto());

// exemplo 02 (sem constructor)
class Estudante {
   codigoEstudante: number;
   nomeEstudante: string;
};

// criar um objeto ou istancia. tem que ser fora da classe.
const estudante = new Estudante();

//inicializar o objeto:
estudante.codigoEstudante = 987765;
estudante.nomeEstudante = 'Paulo José'

// acessar os campos
console.log('código do estudante' + estudante.codigoEstudante);
console.log('nome do estudante' + estudante.nomeEstudante);

// exemplo 03 (com constructor)

class Estudante_1 {
   codigoEstudante: number;
   nomeEstudante: string;

   // defenir o conctructor
   constructor(codigoEstudante: number, nomeEstudante: string){
      this.codigoEstudante = codigoEstudante;
      this.nomeEstudante = nomeEstudante;
   };

   //criar o método
   listarEstudante(): void{
      console.log('Código do estudante' + ' ' + this.codigoEstudante);
      console.log('Nome do estudante' + ' ' + this.nomeEstudante);
   };
};

// acessar os campos
const estudante_1 = new Estudante_1(987675, 'José Ferreira');
console.log(estudante_1.codigoEstudante + ' ' + estudante_1.nomeEstudante);