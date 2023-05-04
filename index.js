"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPubished = true;
let x = 'Hello';
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 1] = "Up";
    Direction3[Direction3["Down"] = 2] = "Down";
    Direction3[Direction3["Left"] = 3] = "Left";
    Direction3[Direction3["Right"] = 4] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction1.Left);
console.log(Direction2.Up);
console.log(Direction3.Down);
// Objects
const user = {
    id: 1,
    name: 'John',
};
const student = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
