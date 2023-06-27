// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export {};

// exemplo 01
function somarNumeros(...numeros: number[]){ //... res parameter útil para tratar n dados, por exemplo um formulário.
   let total = 0;
   numeros.forEach((numero) => (total += numero));
   return total;
};

console.log(somarNumeros(80, 30, 3, 4, 5, 6, 89), '...') //perceba, vários dados para somar.

// exemplo 02
function listarFrutas(frase: string, ...frutas: string[]) {
   return frase + ' ' + frutas.join(', ');
 }
 
 console.log(
   listarFrutas(
     'Igor, você precisa ir na feira para comprar...:',
     '🥥',
     '🍓',
     '🍌',
     '🍍',
   ),
 );

 // exemplo 03
 class Produtos {
   public exibirProdutos(...produtos: string[]): void {
     for (const produto of produtos) {
       console.log(produto);
     }
   }
 }
 
 const departamentoInformatica: Produtos = new Produtos();
 console.log(
   'Todos os produtos do departamento de Informatica disponíveis no estoque...: ',
 );
 
 departamentoInformatica.exibirProdutos(
   'Mouse',
   'Notebook',
   'USB',
   'Monitor',
   'Teclado',
   'WebCam',
 );