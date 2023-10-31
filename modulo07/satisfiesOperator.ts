// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

export{};

// Capacidade de atribuir tipos mais específicos.
// Impor uma restrição numa variável sem alterar seu tipo.

// exemplo 00:
type Cidade = NomeCidade | CidadeCoodernadas;

type NomeCidade = 'Recife'| 'Jaboatão dos Guararapes' | 'Olinda';

type CidadeCoodernadas = {
   x: number;
   y: number;
};

type Pessoa = {
   localNascimento: Cidade;
   residencia: Cidade;
};

const pessoa = {
   localNascimento: 'Recife',
   residencia: {x: 8, y: 89},
} satisfies Pessoa;

console.log(pessoa.localNascimento.toUpperCase());

// exemplo 01:
type Connection = {};

declare function createConnection(
  host: string,
  port: string,
  reconnect: boolean,
  poolsize: number
): Connection;

type Configuration = {
  host: string;
  port: string | number;
  tryReconnect: boolean | (() => boolean);
  poolSize?: number;
};

const config = {
  host: "localhost",
  port: 3306,
  tryReconnect: () => true,
  poolSize: 10,
} satisfies Configuration;

function connect() {
  let { host, port, tryReconnect } = config;

  createConnection(host, `${port}`, tryReconnect(), 10);
}