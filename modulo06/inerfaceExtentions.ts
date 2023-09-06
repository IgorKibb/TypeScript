// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

//exemplo 01
interface Animal {
   nome: string;
   idade: number;
   tamanho: string;
};
//extensão da interface animal
interface Cachorro extends Animal {
   raça: string;
};

const cachorro: Cachorro = {
   nome: 'Prince',
   idade: 2,
   tamanho: 'Médio',
   raça: 'Splitz Alemão',
};

console.log(cachorro);

// extensão com multiplas interfaces
interface Bairro {
   habitantes: number,
   nome: string,
};

interface Cidade {
   habitantes: number,
   nome: string,
};
//extensão de multiplas basta adicionar vírgula 
interface País extends Bairro, Cidade {
   tamanho: number;
};

const país: País = {
   habitantes: 877489, //não corresponde ao dados reais, apenas demostração.
   nome: 'Brasil',
   tamanho: 9099, //não corresponde ao dados reais, apenas demostração.
};

console.log(país);

// exemplo 3 Omit
interface Funcionario {
   id: number;
   nome: string;
   salario: number;
 }
 //Omit serve para modificar uma propriedade de uma interface extendida.
 interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
   id: string;
   salario: string;
   linguageProgramacao: string;
 }
 
 const desenvolvedor: Desenvolvedor = {
   id: 'js-123',
   nome: 'Glaucia Lemos',
   salario: '10k',
   linguageProgramacao: 'JavaScript',
 }
 
 console.log(desenvolvedor)