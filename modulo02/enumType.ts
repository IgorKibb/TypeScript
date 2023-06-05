// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

// Enums Numéricos
// O mais recomendado é sempre usar o enum mumeric.
enum Idioma {
   Portugues,
   Ingles,
   Espanhol,
   Galego
};
console.log(Idioma);

// Enum String
enum Dia{
   Segunda = 'SEG',
   Terca = 'TER',
   Quarta = 'QUA',
   Quinta = 'QUI',
   Sexta = 'SEX',
   Sabado = 'SAB',
   Domingo = "DOM"
};
console.log(Dia.Quinta);

// Como podemos acessar um valor de um Enum com uma chave (usando const)
const enum Comida{
   Hamburguer = 'Hamburguer',
   Massa = 'Massa',
   Sorvete = 'Sorvete',
   Churrasco = 'Churrasco',
   Bolo = 'Bolo'
};

function comida(c: Comida){
   return 'Comidas saborosas!';
};

// Quando usar Enum?
enum Tarefa{
   Todo,
   Progress,
   Done
};

const concluidaTarefa = {
   id: 1,
   status: Tarefa.Done,
   descricao: 'Parabéns! tarefa concluída!'
};

if(concluidaTarefa.status == Tarefa.Done){
   console.log('Enviar e-mail: tarefa concluída.');
};