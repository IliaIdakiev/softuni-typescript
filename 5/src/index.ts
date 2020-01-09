
type WithLogProps = {
  logProps?: () => void
}

function sum1(a: number, b: string, c: [number, string]) {

}

let t: GetFunctionArgs<typeof sum1>;



export type GetFunctionArgs<T> = T extends (...args: infer U) => any ? U : never;






function withLogProps<T extends { new(...args: any[]): {} }>(target: T): T {

  // target.prototype.logProps = function () {
  //   Object.getOwnPropertyNames(this).forEach(name => {
  //     console.log(this[name]);
  //   });
  // }

  // return target;

  return class extends target {
    logProps(this: any) {
      Object.getOwnPropertyNames(this).forEach(name => {
        console.log(this[name]);
      });
    }
  };
}


function debugLogging(target: any, key: string, descriptor?: PropertyDescriptor): any {
  if (descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const result = originalMethod(...args);
      console.log(`Args: ${args} and result is ${result}`);
      return result;
    }
    return descriptor;
  }
  let _val: any;
  Object.defineProperty(target, key, {
    set(newValue) {
      console.log(`Old value: ${_val}, New value: ${newValue}`, this);
      _val = newValue;
    },
    get() {
      return _val;
    }
  });
}


// function Validate(validations: any) {
//   return function (target: any) {
//     Object.keys(validations).forEach(key => {
//       Object.defineProperty()
//     })
//   }
// }

function argDec(target: any, key: string, descriptor: any) {
  console.log('argDec', target, key, descriptor);
}


@withLogProps
// @Validate({
//   name: (name: string) => name.length > 20
// })
class User {

  @debugLogging test: any;

  @debugLogging test2: any;

  // @debugLogging set test3(value: any) {
  //   console.log(value);
  // }

  @debugLogging myMethod(arg1: number, arg2: number) {
    return arg1 + arg2;
  }

  constructor(@argDec private name: string, @argDec private age: number) { }
}


const ivan = new User('ivan', 20);


const a = ivan.test = 123;
console.log('a is: ', a);

ivan.myMethod(1, 2);

// expect(ivan.test).to.equal(123);



ivan.test2 = 4124213;

setTimeout(function () {
  ivan.test = 456;
  ivan.test2 = 442114256;
}, 2000);


type FunctionArgs<T> = T extends (...args: (infer U)[]) => number ? U : any;

function sum(one: number, two: string): string {
  return '1000';
}

// let t: ReturnType1<typeof sum>;

type a = typeof sum;

type b = FunctionArgs<typeof sum>

// let y: FunctionArgs<typeof sum> = null;
// let y: FunctionArgs<typeof sum> = null;



// ivan.
// ivan.


// const mixin = <T extends { new(...args: any[]): {} }>(base: T) => class extends base {

// }


// class MyClass extends mixin(User) {

// }