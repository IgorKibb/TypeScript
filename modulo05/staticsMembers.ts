// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

// exemplo 01
class Funcionario {
   static contratacoes = 0;

   constructor(
      private nome: string,
      private sobrenome: string,
      private titulo: string,
   ){
      //para acessar: className.propertyName
      Funcionario.contratacoes++;
   };
};

const funcionario_01 = new Funcionario(
   'Igor',
   'Fonseca',
   'Desiludido',
);

const funcionario_02 = new Funcionario('Moni', 'Melo', 'Desenganada');
console.log(Funcionario.contratacoes);
//resultado: 02

//metodo estático
class Funcionario_metodo {
   private static contratacoes = 0;

   constructor(
      private nome: string,
      private sobrenome: string,
      private titulo: string,
   ){
      //para acessar: className.propertyName
      Funcionario_metodo.contratacoes++;
   };

   public static retornarContracoes(){
      return Funcionario_metodo.contratacoes;
   };
};

const funcionario_03 = new Funcionario_metodo(
   'Igor',
   'Fonseca',
   'Desiludido',
);

const funcionario_04 = new Funcionario_metodo('Moni', 'Melo', 'Desenganada');
console.log(Funcionario_metodo.retornarContracoes());

// Propriedades estáticas
type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
  public nome: string;
  public idade: number;
  public racas: Raca[];
  public static QTD_CACHORRO_VENDIDO = 0;

  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome;
    this.idade = idade;
    this.racas = racas;

    Cachorro.QTD_CACHORRO_VENDIDO++;
    console.log(Cachorro.QTD_CACHORRO_VENDIDO);
  }

  public exibirInformacao(): void {
    console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
  }
}

const cachorro_01 = new Cachorro('Pipoca', 4, ['Spitz Alemão']);
const cachorro_02 = new Cachorro('Farofa', 6, ['Yorkshire']);