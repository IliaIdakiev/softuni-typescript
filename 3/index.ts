// // function getAge<T extends IBase>(a: T): number {
// //   const { age } = a;
// //   return age;
// // }

// // interface IBase {
// //   name: string
// //   age: number
// // }

// // class User implements IBase {
// //   skills: any[];

// //   constructor(public name: string, public age: number) { }
// // }

// // class Animal implements IBase {
// //   type: string;

// //   constructor(public name: string, public age: number) { }
// // }

// // const ivan = new User('Ivan', 20);
// // const dog = new Animal('Bari', 10);

// // const userAge = getAge(ivan);
// // const dogAge = getAge(dog);


// // function add<T = string | number>(a: T, b: T): T {
// //   if (typeof a === 'string' && typeof b === 'string') {
// //     return a.concat(b) as any;
// //   }

// // }

// function pickOne<T>(items: T[]) {
//   return items[2];
// }

// const a = pickOne([1, 2, 3]);

// // ['Fruits', 5, 'Dogs', 10] -> { 'Fruits': 5, 'Dogs': 10 }

// function test(items: (string | number)[]): { [key: string]: number } {
//   return items.reduce((acc, item, index, currentArray) => {
//     if (index !== 0 && index % 2 === 0) {
//       acc[currentArray[index - 1]] = item;
//       return acc;
//     }
//     return acc;
//   }, {});
// }


// const t = test(['Fruits', 5, 'Dogs', 10]);





// function echo(message: string): { test: string };
// function echo(message: number): { best: number };

// function echo(message: any) {
//   console.log(message);
//   return message;
// }

// const at = echo(321);








// interface ISomething {
//   a: number;
//   b: number;
//   c: number;
//   d: number;
//   m: number;
// }


// function getProperty<T, K extends keyof T, PO_OPISATELNO>(obj: T, key: K) {
//   return obj[key];
// }

// let x: ISomething = {} as any;

// getProperty(x, 'a'); // okay
// getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 



// function fullName<T extends { name: string, age: number }>(arg: T) {
//   return `${arg.name} ${arg.age}`;
// }

// fullName({ name: 'dsad', age: 12321, phone: 123 });




// class Collection<T> {
//   private data: T[];
//   constructor(items?: T[]) {
//     this.data = items || [];
//   }

//   push(item: T) {
//     this.data.push(item);
//   }

//   remove(item: T) {
//     this.data = this.data.filter(i => i !== item);
//   }
// }

// const numberCollection = new Collection();
// numberCollection.push('dsadas');

