//As diretrizes de codificação do TypeScript sugerem que as interfaces não devem começar com a letra I.

interface Dados {
   name: string,
   idade?: number, //? = opcional
   readonly email: string, //apenas leitura, só será criado ao ar[tribuir esse dado.
};

//=========//
interface IceCream {
   flavor: string;
   scoops: number;
   instructions?: string;
};

let myIceCream: IceCream = {
   flavor: 'vanilla',
   scoops: 2,
};

console.log(myIceCream.flavor);

function toManyScoops(dessert: IceCream) {
   if (dessert.scoops >= 4) {
      return dessert.scoops + ' ' + 'too many scoops';
   } else {
      return 'Your order will be ready soon!';
   };
};

console.log(toManyScoops({ flavor: 'vanilla', scoops: 5 }));

//extendendo uma interface
interface Sundae extends IceCream {
   sauce: 'chocolate' | 'caramel' | 'strawberry',
   nuts?: boolean,
   whippedCream?: boolean,
   instructions?: string,
};

//podemos usar iterface para Criar tipos indexáveis:
// interface IceCreamArray {
//    [index: number]: string;
// }

// let myIceCream: IceCreamArray;
// myIceCream = ['chocolate', 'vanilla', 'strawberry'];
// let myStr: string = myIceCream[0];
// console.log(myStr);