// type StringOrNull = string | null | undefined;

// enum UserType {
//   ADMIN = 'Admin',
//   BASIC = 'Basic'
// }

// class User {
//   public name: string;
//   public age: number;
//   public type = UserType.ADMIN;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getUserInfo(header: StringOrNull = null) {
//     return `${header ? header : ''}${this.name} ${this.age} ${this.type}`;
//   }
// }

// class Animal {
//   constructor(public bread: string) { }
// }


// const test: User & Animal = {
//   bread: '',
//   age: 1,
//   name: '',
//   type: UserType.ADMIN,
//   getUserInfo: function() { return ''; }
// } 


// const aa = new Animal('a');

// const ivan = new User('Ivan', 20);
// const userInfo = ivan.getUserInfo();

// console.log(userInfo);

// const userNames: string[] = [];
// userNames.push('Ivan');

// const userAges: number[] = [20];

// userNames.forEach((name, index) => {
//   const age = userAges[index];
//   const myUser = new User(name, age);
// });

// const a: [string, number, boolean] = ['', 1, true];



// enum Operations {
//   ADD,
//   MULT,
//   LARGEST
// }

// function operationExecutor(items: number[], op: Operations) {
//   return items.reduce((acc, currentValue, index) => {
//     if (op === Operations.LARGEST) {
//       return acc < currentValue ? currentValue : acc;
//     }
//     if (op === Operations.ADD) {
//       return index === 0 ? currentValue : acc + currentValue
//     }
//     return index === 0 ? currentValue : acc * currentValue
//   }, items[0]);
// }

// const resultAdd = operationExecutor([1, 2, 3, 4], Operations.ADD);
// const resultMult = operationExecutor([1, 2, 3, 4], Operations.MULT);
// const resultLargest = operationExecutor([1, 2, 3, 4], Operations.LARGEST);

// console.log(resultAdd, resultMult, resultLargest);


// function sort(items: number[], direction: 'asc' | 'desc' = 'asc') {
//   return items.sort((a, b) => {
//     if (direction === 'asc') {
//       return a - b;
//     }
//     return b - a;
//   });
// }

// const result1 = sort([3, 5, 1, 2, 3]);
// const result2 = sort([3, 5, 1, 2, 3], 'desc');

// console.log(result1, result2);

import * as fs from 'fs';

function changeArray(source: string) {
  const [str, ...ops] = source.split('\n');
  let items = str.split(' ');
  ops.forEach(currentOp => {
    const [op, value, index = items.length] = currentOp.split(' ');
    if (op === 'Delete') {
      items = items.filter(i => i !== value);
    } else if (op === 'Insert') {
      items = [...items.slice(0, +index), value, ...items.slice(+index)];
    }
  });
  return items;
}

const result = changeArray(`1 2 3 4 5 5 5 6\nDelete 5\nInsert 10 1\nDelete 5\nend`);

const result1 = changeArray('20 12 4 319 21 31234 2 41 23 4\nInsert 50 2\nInsert 50 5\nDelete 4\nend');

console.log(result1);

