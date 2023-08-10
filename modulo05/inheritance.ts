// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

// exemplo 01
class Animal {
   mover(distancia = 0) {
      console.log(` Animal se moveu ${distancia} metros`);
   };
};

class Cachorro extends Animal {
   latir(){
      console.log('Au Au');
   };
};

const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover(10);
cachorro.latir();

// exemplo 02
class Pessoa {
   constructor(private nome: string, private sobrenome: string){
      this.nome = nome;
      this.sobrenome = sobrenome;
   };

   retornarNomeCompleto(): string {
      return `${this.nome} ${this.sobrenome}`;
   };

   apresentarPessoa(): string {
      return `Meu nome é ${this.nome} ${this.sobrenome}`;
   };
};

class Funcionario extends Pessoa {
   constructor(nome: string, sobrenome: string, private funcao: string){
      super(nome, sobrenome);
   };

   retornarNome_02(): string{
      return super.apresentarPessoa() + `E sou ${this.funcao}`; //para puxar os dados privados do funcionario
   };
};

const funcionario = new Funcionario('Igor', 'Fonseca', 'Desenganado');