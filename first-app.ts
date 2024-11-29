//***BASIC TYPES***//
let userName = 'Max';

// userName = 'Max';
userName = 'Max';

let userAge = 34;
let isValid = true;

//***UNION TYPES***//
//string, number, boolean

let userID: string | number = 'abc1'
userID = 123; 

// userID = true;

//***OBJECT TYPES***//
// let user: object;

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string; //123 | 'abc' | true | false | null | undefined
};

//user = 'Max';

user = {
  name: 'Max',
  age: 34,
  isAdmin: true,
  id: 'abc' //123
}

// user = {};

//***ARRAY TYPES***//
// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

// {name: string; age: number}[]

hobbies = ['Sports', 'Cokking', 'REading']
// hobbies = [1, 2, 3]

//***FUNCTIONS WITH TYPES***//
function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}