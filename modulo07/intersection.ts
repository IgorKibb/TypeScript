// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

// Exemplo 01
interface DadosBancario {
   conta: number;
   agencia: number;
   banco: string;
};

interface Cliente {
   nome: string;
   email: string;
};

interface DadosPessoaFisica {
   cpf: number;
};

//intersection = &
type DadosCliente = DadosBancario & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
   conta: 123456,
   agencia: 123,
   banco: "Caixa Econômica",
   nome: "Igor Fonseca",
   email: "uhuh@gygygyg.com",
   cpf: 123456789,
};

console.log(dadosCliente);