// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export {}; //pra caso já tenha usado alguma variável em outro módulo.

// uso do if
const numeroMax = 100;
let contador = 100;

if(contador <  numeroMax){
   contador++;
};

console.log(contador);

// uso de if
const permissaoDirigir = 18;

if(permissaoDirigir >= 18){
   console.log('Você está habilitado a dirigir!');
};

// uso if... else
if(permissaoDirigir <= 17){
   console.log('Você está habilitado a dirigir!');
}else{
   console.log('Você nao tem idade para ser habilitado a dirigir!');
};
console.log(permissaoDirigir);

// uso if... else if
let desconto: number;
let itemContador: number = 14;

if(itemContador > 0 && itemContador <= 5){
   desconto = 5;
}else if(itemContador > 5 && itemContador <= 10){
   desconto = 10;
}else{
   desconto = 15;
};

console.log(`Você teve um desconto de...: ${desconto}%.`);

// uso do ternário
/*const idadeVotacaoo = 18;

if(idadeVotacaoo >= 18){
   console.log('Você é elegível para votar!');
}else{
   console.log('Você não é elegível para votar!');
};*/

const idadeVotacaoo = 18;

const podeVotar = (idadeVotacaoo >= 18) ? 'Você é elegível para votar!':'Você não é elegível para votar!';
//ternário do códiogo acima.