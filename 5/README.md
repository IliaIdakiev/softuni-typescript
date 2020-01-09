1. Setup a new typescript project, install the nodejs type definition file and configure the tsconfig to use this files.

2. Create an abstract class Base that users fs and implements read/write functionality to read/write some content to a file and has a property called `content` (not publicly visible) that contains the data that we have inside the file but loaded in memory. The abstract class should have abstract methods `add`, `remove`, `find`. The `add` and `remove` should not be publicly visible. The constructor will receive one argument - filename that you will have to read upon instantiation and parse the content if it exists (if it exists the content of the file will always be JSON).

3. Create a class Model that will inherit the abstract class and implement the `add`,`remove` and `find` methods. The Model class will receive one argument - structure - an object representing the structure of the file. The structure should always be { entities: T[], lastId: number }. The `add` and `remove` will have to use Promises and the inherited read/write functionality. Whenever we call the `add(obj)` we add an entity to the array of entities and if we call `remove(id)` we remove the entity with the provided id. Keep in mind that you will have to update the inherited `content` property every time we have a successful `write`/`delete`. The `find(id)` method should return a promise as well but instead of reading from the file and searching the entities we will use the data that we have inside the memroy.

4. Create a method decorator factory function called validate that we can apply to different class methods (`add`, `remove`, `find`). The decorator should validate if the arguments that the method is being called match certain criteria. The criteria will be provided as first argument in the decarator factory. 

class Model inherits Base {
  constructor(defaultStructure) {
    super('user.json');
  }

  find(id) {

  }

  @validate({ }) add(obj) {

  }

  remove(id) {

  }
}

const userModel = new Model({ ... });

userModuel.add({ ... }).then(user => console.log(user.id) && user).then()


