// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath


// Variáveis
let nome: string = 'Igor Fonseca';

// Arrays
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
// para arrays é preciso colocar esses colchetes no typeAnootation.

// Objetos
let carro: {
   nome: string;
   ano: number;
   preco: number
};

carro = {nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 };

// Functions
function multiplicarNumeros(num1: number, num2: number){
   return num1 * num2;
};

multiplicarNumeros(2,5);