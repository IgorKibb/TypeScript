// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

// exemplo 01:
class Funcionario{
   readonly dataNascimento: Date;

   constructor(dataNascimento: Date){
      this.dataNascimento = dataNascimento;
   };
};

const funcionario = new Funcionario(new Date(1991, 11, 6));

// exemplo 02

class Funcionario_01{

   constructor(readonly dataNascimento: Date){
      this.dataNascimento = dataNascimento;
   };
};

// exemplo 03 - interface
interface IFuncionario {
   codigoFuncionario: number;
   nomeEmpregado: string;
 }
 
 const funcionario_01: Readonly<IFuncionario> = {
   codigoFuncionario: 506699,
   nomeEmpregado: 'Jurema',
 };
 
 // funcionario_01.codigoFuncionario = 887653;
 // funcionario_01.nomeEmpregado = 'Lemos';
 
 const funcionario_02: IFuncionario = {
   codigoFuncionario: 506699,
   nomeEmpregado: 'Jurema',
 };
 
 funcionario_02.codigoFuncionario = 887653;
 funcionario_02.nomeEmpregado = 'Lemos';