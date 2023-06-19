// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export {}; //pra caso já tenha usado alguma variável em outro módulo.

// Uso do switch case
let flor = 'tulipa';

switch (flor) {
   case 'rosa':
      console.log('Rosas são vermelhas!');
      break;
   case 'violeta':
      console.log('Violetas são azuis');
      break;
   case 'tulipas':
      console.log('Violetas são brancas');
      break;

   default:
      console.log('por favor, selicione outra flor.');
}