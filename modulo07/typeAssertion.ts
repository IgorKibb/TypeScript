// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

//Exemplo 01 - Type Assertions (as / < >)

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
   const precoComDesconto = preco * (1 - desconto);
 
   return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
 }
 
 // const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;
 const descontoFinal = <number>exibirPrecoFinal(100, 0.05, false);
 console.log(descontoFinal);


//exemplo 02
type Humano = {
   nome: string;
   idade: number;
   idioma: string;
};

const humano = {
   idade: 36,
   idioma: 'Portugues',
};

//const humano2: Humano = humano; // dá erro pois o tipo Humano exisge o nome e nao foi colocado acima.
//console.log(humano2.nome.toUpperCase());

/*const humano2 = humano as Humano;
console.log(humano2.nome.toUpperCase());*/
//Error: TypeError: Cannot read properties of undefined (reading 'toUpperCase').