// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

// exemplo 01
abstract class Funcionario {
   constructor(private nome: string, private sobrenome: string){};

   abstract retornarSalario(): number;
   get retornarNomeCompleto(): string {
      return `${this.nome} ${this.sobrenome}`;
   };

   emitirContraCheque(): string {
      return `${this.retornarNomeCompleto} - Salario:
      ${this.retornarSalario()}`;
   };
};
//let funcionario = new Funcionario('Igor', 'Fonseca'); // não pode criar instancia para classes abstratas

//podemos trabalhar com heranças para resolver o problema do let acima.
class FuncionarioCLT extends Funcionario {
   constructor(nome: string, sobrenome: string, private salario: number) {
     super(nome, sobrenome);
   }
 
   retornarSalario(): number {
     return this.salario;
   }
 }
 
 class FuncionarioPJ extends Funcionario {
   constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
     super(nome, sobrenome);
   }
 
   retornarSalario(): number {
     return this.valorHora * this.horasTrabalhadas;
   }
 }
 
 const glaucia = new FuncionarioCLT('Glaucia', 'Lemos', 18000);
 const joao = new FuncionarioPJ('João', 'Silva', 150, 160);
 
 console.log(glaucia.emitirContraCheque());
 console.log(joao.emitirContraCheque());