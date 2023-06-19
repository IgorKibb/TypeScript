// Transpilação do arquivo : CRTL + SHIFT + B -> tsc: build/wath

// loop for

for (let i = 0; i < 10; i++){
   console.log(i);
};

// for... of (retorna matriz, lista, tuplas)
const arrayNumeros = [10, 20, 30, 40, 50];
for (const i of arrayNumeros){
   console.log(i);
};

// for in (retorna matriz, lista, tuplas)
const arrayNumeros01 = [5, 4, 3, 2, 1, 0];

for (const i in arrayNumeros01) {
  console.log(i);
};

// sort()
const ordemNumerica: number[] = arrayNumeros01.sort();
console.log(ordemNumerica);