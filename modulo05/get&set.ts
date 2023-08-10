// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};


// exempo 01 get
class Quadrado {
   private _altura = 6;
   private _largura = 12;

   get calculaQuadrado(){
      return this._altura * this._largura;
   };
};

console.log(new Quadrado().calculaQuadrado); //saída 72

// exemplo 02 set
class Pessoa {
   nome: string;

   retornarNomePessoa(setNomePessoa: string){
      this.nome = setNomePessoa;
   };
};

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Igor Fonseca');

// exemplo 03 get
class Estudante {
   private _nome = 'Igor Fonseca';
   private _semestre: number;
   private _curso: string;

   public get nomeEstudante(){
      return this._nome;
   }
};

//pra acessara propriedade do estudante
const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);

// exemplo 04 get/set
class Estudante_01 {
   nome: string;
   semestre: number;
   curso: string;
 
   constructor(nomeEstudante: string, semestreEstudante: number, cursoEstudante: string) {
     this.nome = nomeEstudante;
     this.semestre = semestreEstudante;
     this.curso = cursoEstudante;
   }
 
   public get cursos() {
     return this.curso;
   }
 
   public set cursos(setCurso: string) {
     this.curso = setCurso;
   }
 }
 
 const estudante_01 = new Estudante_01('Glaucia Lemos', 5, 'Sistema da Informação');
 console.log(estudante_01);
 
 // Setter call
 estudante_01.cursos = 'Análise e Desenvolvimento de Sistemas';
 
 // Getter call
 console.log('Curso atualizado...:', estudante_01.cursos) 