// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPubished: boolean = true;
let x: any = 'Hello';

// Arrays
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
];

// Union
let pid: string | number;

pid = 22;

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

enum Direction3 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Left);
console.log(Direction2.Up);
console.log(Direction3.Down);

// Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'John',
};

type Student = {
  id: number;
  name: string;
};

const student: Student = {
  id: 1,
  name: 'John',
};
