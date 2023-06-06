// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

// never - throw exception
function error(message: string): never{
   throw new Error(message);
};
console.log(error('Error message!'));

// never inferido automaticamente
function rejectMessage(){
   return error('erro de mensagem');
};

console.log(rejectMessage());

// função que contém loop infinito retorna o tipo never
/*const loopInfinito = function loop(){
   while(true){ 
      console.log('olá, desenvolvedores!');
   };
};
console.log(loopInfinito());*/ //não executar este exemplo já que se trata de um lopp infinito.

// diferenças entre never x void
//const algumaCoisaVoid: void = null;
//const algumaCoisanever: never = null; o null não é assignado para o tipo never, só para o tipo void.