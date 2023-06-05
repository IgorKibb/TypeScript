// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

// funções
function logError(errorMessage: string) {
   console.log(errorMessage);
};

logError('Required field - Name!');

// arrow funcion
const logErrorExample2 = (errorMessage: string): void => {
   console.log(errorMessage);
};

logErrorExample2('Required field - Surname!');

// variáveis
//só conseguimos se desativamos no tsconfig o strictnullcheck. 
let variavelExampleVoid: void;
/*variavelExampleVoid = 1;
variavelExampleVoid = null;
variavelExampleVoid = underfined;*/