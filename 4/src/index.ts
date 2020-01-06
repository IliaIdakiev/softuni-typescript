
import MyClass from './geolocation';

const a = new MyClass('42.6984439', '23.3321413');


// type MyType = { name: string, age: number }[];

// const b: MyType = [{ name: 'sdada', age: 12 }];
// console.log(a);


type Something = {
  name: string;
};


const c: Something = {
  name: 'sdadsada'
}

console.log(c);

setTimeout(() => {
  a.showCoordinates();
}, 5000);
