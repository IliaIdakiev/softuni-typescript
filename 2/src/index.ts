interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// class User {

//   private _myProp!: string;

//   constructor(public id: number, public username: string) { }

//   set myProp(value: string) {
//     this._myProp = value;
//   }

//   get someProp() {
//     return this._myProp;
//   }
// }

const usernameInput = document.getElementById('username') as HTMLInputElement;
const addButton = document.getElementById('add-btn') as HTMLButtonElement;
const userList = document.getElementById('user-list') as HTMLUListElement;

function createLiElement(value: string) {
  const li = document.createElement('li');
  li.innerHTML = value;
  return li;
}

function createAndAppendLi(value: string) {
  const li = createLiElement(value);
  userList.appendChild(li);
}

addButton.addEventListener('click', () => {
  createAndAppendLi(usernameInput.value);
  usernameInput.value = '';
});


fetch('https://jsonplaceholder.typicode.com/users')
  .then((res: Response) => res.json())
  .then((users: IUser[]) => {
    users.forEach(user => {
      createAndAppendLi(user.username);
    });
  });


abstract class Test {
  abstract test(): void;
}

console.log(1);


// const [name1, name2]: string[] = 'Pesho Gosho'.split(' ');

function doSomething([name1, name2]: [string, string]): void {

}

doSomething(['1', '2']);
