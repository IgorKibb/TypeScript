// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath
export{};

// while
let contador = 0;

while(contador < 5){
   console.log(contador);
   contador++;
};

let numero = 1;

while ( numero <= 20){
   if(numero % 5 == 0){
      console.log('O primeiro número multiplo de 5 entre 0 e 20 é', numero);
      break;
   };
   numero++;
};

// exemplo mais prático
const contadorUsuario = 0;

const usuario: string[] = ['Igor', 'Fonseca', 'Taís', 'Santiago'];

while(usuario[contadorUsuario]){
   console.log('Usuários:', usuario[contadorUsuario]);
   contadorUsuario;
};

// do... while
let contador_01 = 0;

do {
   console.log(contador_01);
   contador_01++;
} while (contador_01 < 5);