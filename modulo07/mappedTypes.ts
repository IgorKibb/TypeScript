// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

//exemplo 01:
interface Pessoa {
   nome: string,
   idade: number,
   email: string,
};

type PessoaOpcional = {
   [P in keyof Pessoa]?: Pessoa[P];
};

const pessoa: Pessoa = {
   nome: 'Igor Fonseca',
   idade: 31,
   email: 'email@email.com',
};

const pessoaOpcional: PessoaOpcional = {
   nome: 'Qualquer Coisa',
};



//exemplos Github
// ==> Exemplo 01: Mapped Types

type Usuario = {
   nome: string;
   endereco: string;
   telefone: string;
   idade: number;
 };
 
 type UsuarioOpcional = {
   nome?: string;
   endereco?: string;
   telefone?: string;
   idade?: number;
 };
 
 type UsusarioSomenteLeitura = {
   readonly nome: string;
   readonly endereco: string;
   readonly telefone: string;
   readonly idade: number;
 };
 
 // { [P in K]: T }
 
 type UsuarioMappedType = {
   [P in keyof Usuario]?: Usuario[P]; // for in
 };
 
 // 'nome' | 'endereco' | 'telefone' | 'idade'
 
 const usuarioMapped: UsuarioMappedType = {
   nome: 'Glaucia Lemos',
   endereco: 'Rua 01, 123',
 }
 
 console.log(usuarioMapped);
 
 // ==> Exemplo 02: Outros Tipos Avançados
 
 interface Livro {
   titulo: string;
   autor: string | null;
   preco: number;
   numeroPaginas: number;
 }
 
 type Artigo = Omit<Livro, 'numeroPaginas'>;
 
 type LivroModelo = Readonly<Livro>;
 
 const livro: LivroModelo = {
   autor: 'Boris Cherny',
   numeroPaginas: 324,
   preco: 19.99,
   titulo: 'Programming Typescript: Making Your JavaScript Applications Scale'
 }