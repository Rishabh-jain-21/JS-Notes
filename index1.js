// console.log("we are connected");

// // var let and const: var let and const are the javascript datatypes which can be used to initilize vairable but we know JS is loosely typed language so let const and vars have no relation with integer, string and all

// // declaration

// // // var can be declared multiple times without any issue in the same scope
// // var a;
// // var a;

// // // let and const can not be declared in the same scope
// // let b;
// // let b;

// // const c;
// // const c;

// // IN Summary:
// // 1) vars can be reclared multiple times inside the same scope, not applicable for let and const;
// // 2) it is necessary to intialize some value while using const, not applicable for var and let


// // scope : Basically scope is the area/chunk of code in which the following variable and functions are acessable

// // two types of scopes global and block

// // global scope: The variables decleared as var are known as global scope, accessible throughout the complete file

// // function scope: the variables like var, let and const are only accessable inside the function

// // function x() {
// //     let a = 15;
// //     var b = 16;
// //     console.log("my age is", a, b);
// // }
// // x();

// // console.log("my age is", b); // will throw the Referance error

// // Block scope same as the function scope: but here variable like var is accessable outside the scope because var is global scope

// // {
// //     let a = 15;
// //     var b = 16;
// //     console.log("my age is", a, b);
// // }

// // console.log("my age is", a, b); // will throw the Referance error

// // now it comes about shadowing: So when a variable declared outside the block scope and inside the block scope have same name and the variable declared
// // outside the scope contains same value as the variable inside the scope is called shadowing

// // in this example the a will be update to 10, because var it refering to the memory location is updated in the block scope

// // console.log("shadowing");

// // var a = 100;
// // {
// //     var a = 10;
// //     let b = 11;
// //     const c = 12;
// // }

// // console.log(a);


// // in the below example nothing will change the ouput's will be 300 & 100 because let and const are block scoped

// // let b = 100;

// // {
// //     var a = 10;
// //     let b = 300;
// //     const c = 30;
// //     console.log("b1", b);
// // }

// // console.log("b2", b);

// // illegal shadowing: you can not shadow var's with let, but the opposite way is correct
// // console.log("illegal shadowing");
// // let a = 10;
// // {
// //     var a = 100;
// //     console.log(a);
// // }

// // console.log(a);

// // //  Hoisting: it is a phenomina where you can use the variable and functions even before declaring them

// // //  How ?
// // //  This can be explained using how javascript works, so javascript goes from two phases one is intializatino phase and the other is execution phase
// // //  so even before executing javascrip tintialize variables in the intialilzation state. so that is why the hoisting phenomina is posssible

// // console.log(h); // output will be undefined
// // var h = 10;

// // console.log(k);
// // let h = 10;

// // console.log(z);
// // let z = 10;

// // Summary:
// // 1) hoising is a phenomina in which you can use the variables even before decalring them
// // 2) var is hoisted, but let and const are not

// // Note: let and const are hoisted in teh temporal dead zone

// // // Map, Filter and Reduce

// // // What is Map()?
// // // map() is a method which takes a callback function as an input
// // // map() creates a new array from calling a function for every array element.
// // // map() does not execute the function for empty elements.
// // // map() does not change the original array.
// // //  Important: the call back function takes 3 inputs fist is the element, index and the array itself

// // const arr = [1, 2, 3, 4];
// // const emptyArray = [];

// // // No iteration over empty elements
// // emptyArray.map((elm) => {
// //     console.log("empty", elm);
// // })

// // // Let us understand using some examples
// // arr.map((elm, index, arr) => {
// //     console.log(elm, index, arr);
// // })

// // // Example two: Multiple with 3
// // const multiple = arr.map((elm) => {
// //     return elm * 3;
// // })
// // console.log("multiple", multiple);

// // // What is Filter()?
// // // The filter() return those elements from an array which fulfill the provided criteria.
// // // The filter() method creates a new array filled with elements that pass a test provided by a function.
// // // The filter() method does not execute the function for empty elements.
// // // The filter() method does not change the original array.
// // //  Important: the call back function takes 3 inputs fist is the element, index and the array itself

// // const arrr = [1, 2, 3, 4];

// // // elements having value more than two
// // const filterOuput = arrr.filter((elm) => elm > 2);
// // console.log(filterOuput);

// // // What is Reduce()?
// // // Basically Reduce() method reduces all the input into one value
// // // The reduce() method executes a reducer function for array element.
// // // The reduce() method returns a single value: the function's accumulated result.
// // // The reduce() method does not execute the function for empty array elements.
// // // The reduce() method does not change the original array.
// // // Important: the reduce take two inputs one callback and the other initial value
// // // Important: the callback takes four inputs one is the accumulater(prev value) and the second one is current value, index and the array iteself

// // const newArr = [1, 2, 3, 4, 5];

// // // sum of the array
// // const sumOutput = newArr.reduce((acc, curr, index, arr) => {
// //     return acc + curr;
// // }, 0);

// // console.log(sumOutput);


// // // let us understand there polyfills
// // // What is a polyfill: it is the method for how we can create these functions by ourself

// // // Lets create one for the map()

// // // Detailed Steps:
// // // step 1: prototype keyword: All JavaScript objects inherit properties and methods from a prototype.
// // // step 2: callback function: so basically the callback funciton return the input paramerters
// // // step 3: this keyword: so here this keyword is used to depict the myMap array, which is used in the prototype


// // Array.prototype.myMap = function (cb) {
// //     let temp = [];
// //     for (let i = 0; i < this.length; i++) {
// //         temp.push(cb(this[i], i, this));
// //     }
// //     return temp;
// // }

// // const arr = [1, 2, 3, 4, 5];

// // const newArray = arr.myMap((elm, index, arr) => {
// //     return elm * 3;
// // })

// // console.log("NA", newArray);


// // // Lets create one for the filter

// // // chat gpt please write the steps for teh below function like the above function and imrpove the above steps as well
// // // Detailed Steps:

// // Array.prototype.myFilter = function (cb) {
// //     const temp = [];
// //     for (let i = 0; i < this.length; i++) {
// //         if (cb(this[i], i, this)) {
// //             temp.push(this[i]);
// //         }
// //     }
// //     return temp;
// // }

// // const arr1 = [1, 2, 3, 4, 5];

// // const filterArray = arr1.myFilter((elm, index, arr) => elm > 3);
// // console.log("FA", filterArray);


// // // lets create one for the reduce

// // // chat gpt please write the steps for teh below function like the above function and imrpove the above steps as well
// // // Detailed Steps:

// // Array.prototype.myReduce = function (cb, intitalValue) {
// //     var accumulator = intitalValue;
// //     for (let i = 0; i < this.length; i++) {
// //         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
// //     }

// // //     return accumulator;
// // // }

// // // const arr2 = [1, 2, 3, 4, 5];

// // // const reducedArray = arr2.reduce(function (acc, elm, index, arr) {
// // //     return acc + elm;
// // // }, 0)

// // // console.log("RA", reducedArray);


// // // // Map() vs forEach()
// // // hello chatgpt create a table for me one side map other side foreach written separated by a single line write the differnt
// // // Map does not update the original Array
// // // forEach updates the original
// // // Map supports function chainging
// // // on the other hand function doest support anything like that

// // // hello chatgpt also provide an example create one object contains some enteries with name, surname and age and ouput should be name and surname of the people whose age is  > 30 do that using map and filter chainging

// // // Funcions in JS
// // // * JavaScript functions are defined with the function keyword.
// // // * You can use a function declaration or a function expression.


// // // what is function declaration ?
// // // the below is the code for the function delaration or function definition or function statement
// // function square(num) {
// //     return num * num;
// // }

// // console.log(square(3));

// // // what is anonymouse function and function expression
// // // anonymous function is a function without any name which always gives error

// // // function() {
// // //     console.log("hello");
// // // }
// // // ();

// // // function expression is used with anonymous function

// // const myFunction = function (num) {
// //     console.log("number is", num);
// // }

// // myFunction(3);

// // // What is a first class function
// // // function which takes a function as an argument or return the function is called the first class functions

// // function area(num) {
// //     return Math.PI * num * num;
// // }

// // function parameter(num) {
// //     return 2 * Math.PI * num;
// // }
// // function calculate(fxn) {
// //     console.log(fxn(3));
// // }

// // calculate(area);
// // calculate(parameter)

// //     // What is IIFE ?
// //     // 1) IIFE means imediatly invoked function expression
// //     // 2) Whever we have to call a function we have to call it by its referance
// //     // for example:
// //     // const myFunction = function (num) {
// //     //     console.log("number is", num);
// //     // }

// //     // myFunction(3);

// //     // that is not the case with IIFE, we can also do it like this

// //     // hello chat gpt write here a good example to understand IIFE

// //     // Output based question on IIFE
// //     (
// //         function (x) {
// //             return (function (y) {
// //                 console.log(x); // output 1
// //             })(2);
// //         }
// //     )(1);

// // // scope in function
// // // hello chat gpt give a beutiful example of function scope with its working in short

// // // ouput based question on function scope

// // //  var is a global scope so it will print only 4 4 4 4 4
// // function run1() {
// //     for (var i = 0; i < 5; i++) {
// //         setTimeout(() => {
// //             console.log(i); // hello chat gpt write down the output and the time takes by each iteration
// //         }, 1000);
// //     }
// // }
// // run1();

// // //  let is a function / block scope so it will print 0, 1, 2, 3, 4
// // function run1() {
// //     for (var i = 0; i < 5; i++) {
// //         setTimeout(() => {
// //             console.log(i); // hello chat gpt write down the output and the time takes by each iteration
// //         }, 1000);
// //     }
// // }
// // run1();

// // // Hoisting
// // // hello chat gpt give the example of hoisting for both funciton declartion and fcuntion expression


// // // interview question on hoisting
// // //  hello chatgpt explain the working of the below code how the output is undefined
// // var x = 10;
// // function a() {
// //     console.log(x);
// //     var x = 20;
// // }
// // a();


// // // spread and rest operator
// // // hello chatgpt give the defination and example of the spread and rest operator


// // // interview question
// // // hello chat gpt explain the output of the below code

// // const fn = (a, x, y, ...numbers) => {
// //     console.log(x, y, numbers);
// // }

// // fn(5, 6, 7, 8, 9, 10)

// // // Hello chat gpt please provide a explainatino about arrow functions and a normal function
// // // hello chat gpt create a table to mark the differnce with epxplaining like syntax, implcit return keyword, arguments keyword and this keyword also write their examples

// // // Closure in JS
// // // in javascript closure is a function bundled with its lexical enviroment is called clousure, a closure is created every time a function is created.
// // // let us discuss about the scopes
// // // There are total three type of scopes global, local and lexical

// // // Global Scope: chatgpt please provide the easy definition
// // // local scope: chatgpt please provide the easy definition

// // // Lexical Scope: a variable defined outside the function can be accessible inside the function after variable declaration but the reverse is not true
// // // chat gpt pleas give a good example of lexical enviroment and closure with proper comments

// // // Closure scope chaining: So a closure basically is the function bundled with its lexical enviroment right, so it includes the local scope, the outer function scope and the global scope
// // // so let us say we have a function inside of three nested funcitons with variables declared so the inner most function will have the access to the the parent functions and the global fucntions.
// // // chat gpt please give a good example of this also so let us say we have a function inside of three nested funcitons with variables declared so the inner most function will have the access to the the parent functions and the global fucntions and use this method to call the function fun(1)(2)(3)(4);

// // // output of the below code
// // let count = 0;
// // (
// //     function printCount() {
// //         if (count == 0) {
// //             let count = 1; // here we are using shadowing
// //             console.log(count);
// //         }
// //         console.log(count);
// //     }
// // )();


// // // question: create function to add two number in the below expression
// // var addSix = createBase(6);
// // addSix(10); // this is same thing like using createBase(6)(10);
// // addSix(15);

// // // answer
// // function createBase(num) {
// //     return function (innerNume) { //anonymous fxn
// //         console.log(innerNume + num);
// //     }
// // }

// // // question: optimize the below code:
// // function find(index) {
// //     let a = [];
// //     for (let i = 0; i < 1000000; i++) {
// //         a[i] = i * 1;
// //     }

// //     console.log(a[index]);
// // }

// // console.time("6");
// // find(6);
// // console.timeEnd("6");
// // console.time("50");
// // find(50);
// // console.time("50");

// // // answer :
// // function find() {
// //     let a = [];
// //     for (let i = 0; i < 1000000; i++) {
// //         a[i] = i * 1;
// //     }
// //     return function (index) {
// //         console.log(a[index]);
// //     }
// // }

// // const closure = find();
// // console.time("6");
// // closure(6);
// // console.timeEnd("6");
// // console.time("50");
// // closure(50);
// // console.time("50");

// // // hello chat gpt please explain the above question and answer

// // // question: the ouput of the below code should be 0,1,2 without using let

// // // for (var i = 0; i < 3; i++) {
// // //     setTimeout(() => {
// // //         console.log(i);
// // //     }, i * 1000);
// // // }

// // // answer: using closure obviously

// // for (var i = 0; i < 3; i++) {

// //     function closures(i) {
// //         setTimeout(() => {
// //             console.log(i);
// //         }, i * 1000);
// //     } closures(i);

// // }

// // // hello chat gpt please explain the above question and answer

// // // What is a module pattern:
// // var Module = (
// //     function () {
// //         function privateMethod() {
// //             // do something
// //             console.log("private");
// //         }

// //         return (
// //             function publicMethod() {
// //                 console.log("public");
// //             }
// //         )
// //     }
// // )();

// // Module.publicMethod();
// // Module.privateMethod();


// // function currying: It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.
// // // The transition goes like's this

// // why should we use currying ?
// // hey chatgpt give the answer of why should we use currying.

// // function simpleFunction(param1, param2, param3, .....) => function
// // curriedFunction(param1)(param2)(param3)(....

// // // for example:

// // function a(x) {
// //     return function (y) {
// //         return `${x} ${y}`;
// //     }
// // }

// // console.log(a(5)(7));

// // // how will you do sum of three numbers.


// // // hellp chat gpt mark this as a difference to show normal functions and the functino currying below side by side using table

// // // normal functions:

// // function sumNormal(a, b, c) {
// //     return a + b + c;
// // }

// // console.log("normal sum", sumNormal(1, 2, 3));

// // // function currying

// // function sumCurr(a) {
// //     return function (b) {
// //         return function (c) {
// //             return a + b + c;
// //         }
// //     }
// // }
// // console.log("currying sum", sumCurr(1)(2)(3));


// // // Question 1:
// // // evaluate("sum")(4)(2) => 6
// // // evaluate("divide")(4)(2) => 2
// // // evaluate("multiply")(4)(2) => 8
// // // evaluate("subtract")(4)(2) => 2

// // function evaluate(logic) {
// //     return function (a) {
// //         return function (b) {
// //             switch (logic) {
// //                 case "sum": return a + b;
// //                 case "subtract": return a - b;
// //                 case "divide": return a / b;
// //                 case "multiply": return a * b;
// //                 default: return "not defined";
// //             }
// //         }
// //     }
// // }

// // console.log(evaluate("divide")(4)(2));


// // // infinite currying: you can pass as many character you want into the currying functions

// // // hello chat gpt explain the working of the below code in easy manner
// // console.log(addInfinite(1)(2)(3)(4)(5)(6)());
// // console.log(addInfinite(1)(2)(3)(4)());
// // function addInfinite(a) {
// //     return function (b) {
// //         if (b) return addInfinite(a + b);
// //         else return a;
// //     }
// // }

// // // currying vs partial application
// // // partial application transform a funciton into another function with small arity(number of arguments a function recieves)
// // // hello chatgpt give a simple example of currying and partial application with mentioning there differences

// // // curry implementation:
// // // hello chatgpt explain the below code as well in easy manner
// // console.log("curry implementation");

// // function curry(func) {
// //     console.log(func);
// //     return function curriedFunc(...args) {
// //         console.log(args, args.length);
// //         if (args.length >= func.length) {
// //             return func(...args);
// //         } else {
// //             return function (...next) {
// //                 return curriedFunc(...args, ...next);
// //             };
// //         }
// //     };
// // }


// // const sum = (a, b, c, d) => a + b + c + d;
// // const totalSum = curry(sum);

// // console.log(totalSum(1)(6)(5)(6));

// // // object in javascript:
// // // 1) Objects are the most important collection of javascript.
// // // 2) objects are collection of keys and values corresponding to that keys

// // // print an object
// // const obj = {
// //     name: "Thunder",
// //     age: "22"
// // }

// // console.log(obj);

// // // update the object

// // obj.name = "Rishabh";
// // console.log(obj);

// // // delete the property
// // delete obj.name;
// // console.log(obj);

// // // Shallow Copy vs Deep Copy
// // // hello chatgpt provide the definations in easy language

// // console.log("marker");

// // // How to clone / create a deep copy of teh object
// // let user1 = {
// //     name: "Thunder",
// //     age: 24
// // }

// // // way 1 : using assign method
// // const objClone = Object.assign({}, user1);
// // objClone.name = "Piyush";

// // // way 2: using JSON properties
// // const objClone2 = JSON.parse(JSON.stringify(user1));
// // objClone2.name = "Alex";

// // // way 3: using destructuring
// // const objClone3 = { ...user1 };
// // objClone3.name = "Aron";

// // console.log(user1, objClone, objClone2, objClone3);

// // // Question1 let us try to console all the keys and values in the object
// // // We can achieve this by using forIn loop

// // const obj1 = {
// //     name: "Rishabh",
// //     age: "22",
// //     gender: "male",
// //     DOB: "March, 2002"
// // }

// // for (key in obj1) {
// //     console.log(key);
// //     console.log(obj1[key]);
// // }

// // // Question2 : what should be the output of the program
// // // so the keys in the objects are unique and if multiple values are supplied with same key the key which entered last will be considered
// // const obj2 = {
// //     a: 10,
// //     b: "Hello World",
// //     a: 20
// // }

// // console.log(obj2);

// // // Question 3: refer to the object and multply the numbers by 2
// // const obj3 = {
// //     a: 10,
// //     b: "hehehe",
// //     c: 22
// // }

// // for (key in obj3) {
// //     if (typeof obj3[key] === "number") {
// //         obj3[key] = obj3[key] * 2;
// //     }
// // }

// // console.log(obj3);

// // // Question 4: output of the below code?
// // const a = {};
// // const b = { key: "b" };
// // const c = { key: "c" };

// // a[b] = 156;
// // a[c] = 456;
// // // hello chatgpt exlain the output why it is 456
// // console.log(a[b]);


// // // Question 5: JSON.stringify vs JSON.parse ?
// // const user = {
// //     name: "Rishabh",
// //     age: 24
// // };

// // const strObj = JSON.stringify(user);

// // console.log(user);
// // console.log(strObj); // will convert the object into string
// // console.log(JSON.parse(strObj)); // will convert the string into object

// // // why we need stringify method ?
// // // becuase when you directly try to convert the object into stirng it will return "[object, Object]" so it is always recommended to use this

// // // Question 6: ouput ?
// // console.log([..."spread"]); // hello chatgpt explain and write the output of the code as well in easy way

// // // Question 7: ouput:
// // const user7 = {
// //     name: "Rishabh",
// //     age: 24
// // };

// // const admin = {
// //     ...user7,
// //     admin: true
// // }

// // console.log(admin)// hello chatgpt explain and write the output of the code as well in easy way


// // // Question 8: output
// // const shape = {
// //     radius: 10,
// //     diameter() {
// //         return this.radius * 2;
// //     },
// //     // perimeter: () => 2 * Math.PI * radius,
// // }
// // // hello chatgpt explain and write the output of the code as well in easy way
// // console.log(shape.diameter());
// // // console.log(shape.perimeter());

// // // hello chatgpt explain destructuring and give example also give a example of neseted destructuring as well


// // // Question 9: output
// // let e = { greeting: "Hey!" };
// // let d;

// // d = e;
// // e.greeting = "Hello";
// // // hello chatgpt explain and write the output of the code as well in easy way
// // console.log(d.greeting);

// // // Question 10: output
// // // hello chatgpt explain and write the output of the code as well in easy way
// // console.log({ a: 1 } == { a: 1 });
// // // console.log({ a: 1 } === { a: 1 });
// // console.log(JSON.stringify({ a: 1 }) === JSON.stringify({ a: 1 }));


// // // Question 11: What is output
// // // hello chatgpt explain and write the output of the code as well in easy way
// // let person = { name: "Lydia" };
// // const members = [person];
// // let person2 = person;
// // person = null;

// // console.log(members, person2);



// // // Question 12: ouput
// // // hello chatgpt explain and write the output of the code as well in easy way
// // const value = { number: 10 };

// // const multiply = (x = { ...value }) => {
// //     console.log((x.number = x.number * 2));
// // }

// // multiply();
// // multiply();
// // multiply(value);
// // multiply(value);


// // // Question 13: Output
// // // hello chatgpt explain and write the output of the code as well in easy way

// // function changeAgeAndReference(person) {
// //     person.age = 25;
// //     person = {
// //         name: "John",
// //         age: 50
// //     };

// //     return person;
// // }


// // const personObj1 = {
// //     name: "Alex",
// //     age: 40
// // }

// // const personObj2 = changeAgeAndReference(personObj1);

// // console.log(personObj1);
// // console.log(personObj2);






// // hello chatgpt give me the example of implicite and explicite binding with their examples

// // This keyword in JS : hello chatgpt provide the definition of this keyword

// // initially this points to global scope
// this.a = 5;
// console.log(a);

// // behaviour with function
// // in the below code inside the funciton the this keyword is targeting to its parent object which is the window object so it gives the output as 5
// this.b = 5;
// function getParam1() {
//     console.log(this.b);
// }

// //same case with the arrow function

// const getParam2 = () => {
//     console.log(this.b);
// }
// getParam1();

// // let check for the below case:
// // Here in the below code the this keyword is targeting to its parent which is the object's proprties giving us the value as piyush
// let user = {
//     name: "Piyush",
//     age: 24,
//     getDetails() {
//         console.log(this.name);
//     }
// }

// user.getDetails();

// // let us nest this object even more and check for the output
// // here the ouput is undefined for name cause in the immediate parent there is not thing like name
// let user1 = {
//     name: "Piyush",
//     age: 24,
//     contact: {
//         newName: "Alex",
//         getDetails() {
//             console.log(this.name + " " + this.newName);
//         }
//     }
// }

// user1.contact.getDetails();

// // let us check the same with arrow functions
// // so here the this keyword is not pointing to its parent object it is pointing to the window object
// // in arrow functions this keywords values comes from its parent function only
// // let us try using nested functions for the same

// let user2 = {
//     name: "Piyush",
//     age: 24,
//     getDetails: () => {
//         console.log(this.name, this);
//     }
// }

// user2.getDetails();



// // using nested functions
// // hey chat gpt explain the working of the below function why this nestedarrow is refering to the object name property
// let user3 = {
//     name: "Piyush",
//     age: 24,
//     getDetails: () => {
//         const nestedArrow = () => {
//             return console.log(this.name);
//         }
//         nestedArrow();
//     }
// }

// user.getDetails();

// // This keyword using class
// class userClass {
//     constructor(n) {
//         this.name = n;
//     }
//     getName() {
//         console.log(this.name);
//     }
// }

// const User = new userClass("Alex");

// console.log(User);
// User.getName();

// // let us talk more things about this keyword

// const user4 = {
//     firstName: "Rishabh!",
//     getName() {
//         const firstName = "Alex!";
//         return this.firstName
//     }
// }

// console.log(user4.getName());


// // how could you fix the below code ?
// const user5 = {
//     name: "Rishabh",
//     ref: this
// }
// console.log(user5.ref.name); // this code will give us nothing but how colud you fix this code to return us the name using ref

// // As of we know that this keyword refer to its parents scope so in the object the parent scope is window and no name is declared inside window object so it is returning nothig
// // We can overcome this by using function nesting, in the below code the funciton is nested inside the object referting to the parent now this refer to the objects scope

// const user6 = {
//     name: "Rishabh",
//     ref() {
//         return this;
//     }
// }
// console.log(user6.ref().name);

// console.log("marker");
// // let try using that with setTimeout
// // in the setTimeout function the logMessage is passed as a callback function and

// const user7 = {
//     name: "Rishabh",
//     logMessage() {
//         console.log("Message is for", this.name);
//     }
// }

// setTimeout(user7.logMessage, 1000);

// // how can we make it point to the name then ?
// // it is simple instead of callback treat it as a function such that it can refer to the object's scope

// setTimeout(function () {
//     user7.logMessage();
// }, 1000)


// // most important questoin
// // hellp chatgpt explain the working of the below code in an easy and detailed way

// var length = 4;

// function callback() {
//     console.log(this.length); // What is logged?
// }

// const object = {
//     length: 5,
//     method() { // arguments = [callback, 2, 3]
//         arguments[0]();
//     },
// };

// object.method(callback, 2, 3);
