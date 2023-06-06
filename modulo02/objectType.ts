// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

// básico
const individuo = {
   nome: 'Igor',
   sobrenome: 'Fonseca',
   funcao: 'desempregado',
   idade: 31
};

// parâmetro de função anônima)
function onboarding01(funcionario: { nome: string }){
   return 'Seja bem-vindo' + funcionario.nome;
};

console.log(onboarding01({nome: 'Igor Fonseca'}));

// object nomeados
interface Pessoa{
   nome: string,
   sobrenome: string,
   funcao: string,
};

function onboarding02(individuo: Pessoa){
   return (
      'Seja bem-vindo' +
      individuo.nome +
      '!'+
      'Sua função aqui é:' +
      individuo.funcao +
      '.'
   );
};

console.log(onboarding02({ nome: 'Igor', sobrenome: 'Fonseca', funcao: 'procurador' }));

// object como type alias
//no type precisa colocar o igual
type Pessoa03 = {
   nome: string;
   funcao: string;
   linguagem: string
};

function onboarding03(individuo: Pessoa03){
   return (
      'Seja bem-vindo' +
      individuo.nome +
      '!'+
      'Sua função aqui é:' +
      individuo.funcao +
      '.' +
      'você irá trabalhar com a linguagem' +
      individuo.linguagem
   );
};

console.log(onboarding03({ nome: 'Igor', funcao: 'procurador', linguagem: 'typescript' }));

// usando optional no object
interface Pessoa04{
   nome: string,
   funcao: string,
   linguagem: string,
   email ?: string //? significa o osptional
};

function onboarding04(individuo: Pessoa04){
   return (
      'Seja bem-vindo' +
      individuo.nome +
      '!'+
      'Sua função aqui é:' +
      individuo.funcao +
      '.' +
      'você irá trabalhar com a linguagem' +
      individuo.linguagem
   );
};

console.log(onboarding04({ nome: 'Igor', funcao: 'procurador', linguagem: 'typescript' }));

// propriedade readonly
interface Pessoa05{
   nome: string,
   funcao: string,
   linguagem: string,
   readonly email: string //como o próprio nome diz, só leitura.
};

function onboarding05(individuo: Pessoa05){
   return (
      'Seja bem-vindo' +
      individuo.nome +
      '!'+
      'Sua função aqui é:' +
      individuo.funcao +
      '.' +
      'você irá trabalhar com a linguagem' +
      individuo.linguagem +
      'seu email é:' +
      individuo.email
   );
};

console.log(onboarding05({ nome: 'Igor', funcao: 'procurador', linguagem: 'typescript', email: 'if@qualquer.com.br' }));

// tipos de extensões (herança)
interface Mae{
   nome: string,
};

interface Pai{
   sobrenome: string,
};

//não preciço colocar a chave 'nome' pois já herdou (extends) da mae e pai.
interface Filha extends Mae, Pai {
   idade: number,
};

const filha: Filha = {
   nome: 'Igor',
   sobrenome: 'Fonseca',
   idade: 31,
};

// tipos de interseções
interface Cachorro{
   tipo: string,
};

interface Gato{
   tipo: string,
};

type Animal = Cachorro & Gato;

// Generic Objects
type Usuario = {
   nome: string,
   email: string,
};

type Admin = {
   nome: string,
   email: string,
   admin: true,
};

const admin: Admin = {
   nome: 'Igor Fonseca',
   email: 'if@algumacoisa.com.br',
   admin: true,
};

const usuario: Usuario = {
   nome: 'Igor Fonseca',
   email: 'if@algumacoisa.com.br',
};

function acessarSistema<T>(usuario: T): T{
   return usuario;
}; //<T> = generics

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

/*function acessarSistema(usuario: Usuario): Usuario{
   return usuario;
};

console.log(acessarSistema(usuario);)*/