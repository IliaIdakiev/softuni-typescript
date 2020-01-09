import userModel from './user-model';

// userModel.find(1).then(user => console.log(user));

// userModel.add({ username: 'test', age: 1000 }).then(console.log);

// userModel.remove(1).then(console.log);

//userModel.add(null as any).then(console.log).catch(console.error);

Promise.all([
  userModel.add({ username: 'test 1', age: 1000 }),
  userModel.add({ username: 'test 2', age: 1000 }),
  userModel.add({ username: 'test 3', age: 1000 })
]).then(console.log);

// process.nextTick()

// Promise.resolve().then(() => {
//   this.wirte()
// })