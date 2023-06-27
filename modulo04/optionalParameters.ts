// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export {};

// optional parameter
//parâmetros opcionais devem estar por último dentro da função.
function informarDadosPessoas (idPessoa: number, nome: string, email?: string){
   console.log('Funcionário:', idPessoa, 'Nome', nome);
   if(email != undefined) console.log('Email do funcionário:', email);
};

informarDadosPessoas(776677, 'Igor Fonseca'); //note que não reclama pelo email.

//Exemplo 02
function mensagemLog(mensagem: string, usuarioId?: number) {
   const horaLog = new Date().toLocaleTimeString();
 
   console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
 }
 
 mensagemLog('Atualizar Página');
 mensagemLog('Usuário(a) logado(a) com sucesso');
 
 //Exemplo 03
 
 type Pessoa = {
   idFuncionario: number;
   nome: string;
   idade?: number;
   email?: string;
 };
 
 let pessoa: Pessoa;
 
 pessoa = {
   idFuncionario: 112233,
   nome: 'Glaucia Lemos',
 };
 
 console.log(pessoa);