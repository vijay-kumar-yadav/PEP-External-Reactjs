// function hello() {
//   if (true) {
//     //block
//     let a = "aho"; //block scope
//     var b = "bye"; //valid but the value || function scope
//   }
//   //console.log(a)
//   console.log(b);
// }
//hello()

/*
let a = 2;
let a = 2; // redeclaration not possible

var b = 3;
var b = 3; // redeclaration is possible

const c = 3;
c = 4; // cannot be reassigned and redeclared
*/

//<--------------------------------------------------------------------------------------------------------------->
// //hoisting
// //hoisting using variable/function before declaration
// x = 10;
// y = 30;
// // z=40;
// console.log(x); // 10 global-scope
// console.log(y); // reference error local-scope

// console.log(foo());
// var x;
// let y;
// // const z;//const must be initialized when declared

// function foo() {
//   console.log("hello");
// }
//<--------------------------------------------------------------------------------------------------------------->
// //global scope(var)/redeclaration and local scope(let,const)/no redeclaration
// let x = 10;
// var y = 10;
// {
//   let x = 20;
//   var y = 20;
// }
// console.log(x); // 10
// console.log(y); // 20

//<--------------------------------------------------------------------------------------------------------------->
// // function variable cannot be hoisted
// console.log(x());
// var x = function foo() {
//   console.log("hello");
// };
//<--------------------------------------------------------------------------------------------------------------->
// passing function as an arguments
// function add(a, b, calculate) {
//   return calculate(a, b);
// }

// function calculate(a, b) {
//   return a * b;
// }

// console.log(add(4, 5));
//<--------------------------------------------------------------------------------------------------------------->
// Array
let a = [1, 2, 3, 4, 5];
//push insert at end
a.push(6);
console.log(a);
//unshift insert at start
a.unshift(0);
console.log(a);
//pop remove at end
let x = a.pop();
console.log(a, x);
//shift remove at start
let y = a.shift();
console.log(a, y);
//splice it can add and remove element from the array at any index
//parameter splice(from where to delete/insert, no of element to delete,element to be added)
//insert using splice
a.slice();
