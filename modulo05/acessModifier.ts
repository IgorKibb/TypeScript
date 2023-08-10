// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

// exemplo 1: modificador publico
class Estudante {
   codigoEstudante: number;
   nomeEstudante: string;
};

const estudante = new Estudante();
estudante.codigoEstudante = 201;
estudante.nomeEstudante = 'Igor Fonseca';

// exemplo 2: privado
class Estudante_02 {
   codigoEstudante: number;
   nomeEstudante: string;
   private idade: number;

   constructor(codigoEstuadante: number, nomeEstudante: string, idade: number ){
      this.codigoEstudante = codigoEstuadante;
      this.nomeEstudante = nomeEstudante;
      this.idade = idade;
   };

   retornarDadosEstudantes(){
      return ` Código aluno: ${this.codigoEstudante}`;
   };
};

const estudante_02 = new Estudante_02(9879778, 'Igor Fonseca', 31);
console.log(estudante_02);
console.log(estudante_02.retornarDadosEstudantes());

// exemplo 03: protegido
class Estudante_03 {
   codigoEstudante: number;
   protected nomeEstudante: string;


   constructor(codigoEstuadante: number, nomeEstudante: string ){
      this.codigoEstudante = codigoEstuadante;
      this.nomeEstudante = nomeEstudante;
   };

};


//herdando. toda classe estudante_03 vai pertencer também à classe Pessoa.
class Pessoa extends Estudante_03{
   private curso: string;

   constructor(codigoEstuadante: number, nomeEstudante: string, curso: string ){
      super(codigoEstuadante, nomeEstudante); //herança da classe pai.
      this.curso = curso;
   };

   retornarDadosAluno(){
      return `Olá seu curso é ${this.curso}`; //acessar a propriedade protegida.
   };
};

const estudante_03 = new Pessoa(98987, 'Wandeléia Simone', 'Gastronomia.');

console.log(estudante_03);