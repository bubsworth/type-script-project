//***BASIC TYPES***//
let userName = "Max";

// userName = 'Max';
userName = "Max";

let userAge = 34;
let isValid = true;

//***UNION TYPES***//
//string, number, boolean

//another allias
type StringOrNumb = string | number;

let userID: StringOrNumb = "abc1";
userID = 123;

// userID = true;

//***OBJECT TYPES***//
// let user: object;
//another allias
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string; //123 | 'abc' | true | false | null | undefined
};

let user: User;

//user = 'Max';

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", //123
};

// user = {};

//***ARRAY TYPES***//
// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

// {name: string; age: number}[]

hobbies = ["Sports", "Cokking", "REading"];
// hobbies = [1, 2, 3]

//***FUNCTIONS WITH TYPES***//
function add(a: number, b: number) {
  const result = a + b;
  return result;
}

//***type alliases***//
type AddFn = (a: number, b: number) => number;

//***Defining Function Types***//
function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

//***Defining Object Types with Interfaces***//

interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@example.com",
};

//***Interfaces vs Custom Types***//
class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials());

//*** Merging Types **///

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ["login"],
//   userName: "Max",
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Max",
};
