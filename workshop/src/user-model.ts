import { Model, IEntity } from "./model";
import { Validate } from './validate';


const userAddSchema = [
  {
    'Required': (user: IUser) => !!user,
    'Username min length': (user: IUser) => user?.username?.length > 3,
  }
];


interface IUser extends Partial<IEntity> {
  username: string;
  age: number
}

class UserModel extends Model<IUser> {
  constructor() {
    super('users.json', {
      entities: [{
        id: 1,
        username: 'Ivan',
        age: 20
      }], lastId: 1
    });
  }

  @Validate(userAddSchema) add(entity: IUser) {
    return super.add(entity);
  }
}

const userModel = new UserModel();

export default userModel;