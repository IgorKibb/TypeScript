// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export {};

// exemplo 01
function descontoCompra(preco: number, desconto = 0.08){ //desconto está como padrão, ou seja, o default
   return preco * (1 - desconto);
};

console.log(descontoCompra(100)) // jã não somos mais obrigados a passar o segungo parâmetro, pois já fora aplicado na função como default.

// exemplo 02
function exibirMensagem(nome: string, saudar = 'Fala,'){
   return saudar + ' ' + nome + '!';
};

console.log( exibirMensagem('Mikey Moore'));