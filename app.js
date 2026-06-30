// object literals tutorial

// Creating an object literal
// const person = {
//    jon:{
//     name: "Jon Doe",
//     age: 30,
//     occupation: "Developer"
//    }
//     , jane:{    
//     name: "Jane Smith",
//     age: 25,
//     occupation: "Designer"   },
//     bob:{
//     name: "Bob Johnson",
//     age: 40,
//     occupation: "Manager"
//     }
// };
// for ( key in person) {
//     console.log( person[key].name);
// }
// math objects
// task = 'y';
// while (task === 'y') {
//     var num= Math.floor(Math.random() * 5) +1;
//     console.log(num);
//     task = prompt('Do you want to generate another number? (y/n)');
// }
// function high(func, n){
//     for (let i = 0; i < n; i++) {
//         func();
//     }
// }
// function generateRandomNumber() {
//     var num= Math.floor(Math.random() * 5) +1;
//     console.log(num);
// }
// high(generateRandomNumber, 6);


// function higher(ar, key){
//     let arr = [];
//     for (let i = 0; i < ar.length; i++) {
//         if (ar[i]>key) {
//             arr.push(ar[i]);
//         }
//     }
//     return arr;
// }
// let arr = [1, 5, 3, 8, 2];
// let key = 3;
// console.log(higher(arr, key));
// function unique( str){
//     let unichars= "";
//     for (let i = 0; i < str.length; i++) {
//         if (!unichars.includes(str[i])) {
//             unichars += str[i];
//         }
//     }
//     return unichars;
// }
// let str = "hello world";
// console.log(unique(str));
// obj={
//     sum(a,b){
//         return a+b;
//     }
// }
// console.log(obj.sum(5, 3));
// try{
//     console.log(result);
// }
// catch(error){
//     console.log("An error occurred: " + error.message);
// }
// code runs without error becauase try block is executed and if there is an error it will be caught by catch block and error message will be displayed. and rest code will continue to execute without interruption.
// let num = function sum(a, b) {
//     return a + b;
// }
// console.log(num(5, 3));
// function sum1(a, b) {console.log(a + b);}
// const sum = (a, b) => {console.log(a + b);};
// // aarrow function with implicit return meaning that the return statement is not needed and the function will return the result of the expression automatically.
// const sum2 = (a, b) => a + b;
// setTimeout(() => sum1(7, 8), 3000);
// var name="John Doe";
// const person = {
//     name: "Jane Smith",
//     age: 25,
//     occupation: "Designer",
//     getName: function() {
//         return this.name;
//     },
//     get: () => this.name
// }
// console.log(person.getName()); // Output: "Jane Smith"
// k = person.get();
// console.log(k); // Output: "John Doe"
//  obj={
// message: "Hello, World!",
// A:()=>{
//     return this.message;
// }
// }
// k= obj.A();
// console.log(k); // Output: undefined
// setTimeout(obj.A, 3000);
// arr=[-1, 7, 2, 9, 5]; 
// arr.forEach((num) => console.log(num));
// // forEach method executes a provided function once for each array element. In this case, it logs each number in the array to the console.
// let squared = arr.map((num)=>  num*num);
// map method creates a new array populated with the results of calling a provided function on every element in the calling array. In this case, it returns a new array where each element is the square of the corresponding element in the original array.
// console.log(squared);
// let evenNumbers = arr.filter((num) => num % 2 === 0); 
// console.log(evenNumbers);
// // gives us an array of elements that satisfy the condition specified in the callback function. In this case, it returns an array of even numbers from the original array.
// p= arr.every((num) => num%2==0);
// console.log(p);
// t = arr.reduce((acc, num) => acc - num, 0);
// console.log(t);
// // reduce method executes a reducer function on each element of the array, resulting in a single output value. In this case, it adds each number to the accumulated value, starting with 0. The final result is the sum of all the numbers in the array.
// min= arr.reduce((min, num) => {
  
//     if(num >min) {
//         return min;
//     }
//     else {
//     return num;
//     }
// });
// console.log(min);
// // In this case, it compares each number in the array to the current maximum value and updates the maximum accordingly. The initial value for max is set to the first element of the array (arr[0]). After processing all elements, max will hold the largest number in the array.
// console.log(...arr);
// // The spread operator (...) allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In this case, it expands the elements of the array arr into individual arguments for the console.log function, resulting in each number being printed separately.
// names=["John", "Jane", "Bob", "Alice"        , "ayush", "tanamay"];
// let[a,b, ...r]=names;
// console.log(a); // Output: "John"
// console.log(b); // Output: "Jane"
// console.log(r); // Output: ["Bob", "Alice", "ayush", "tanamay"]
// In this example, we use array destructuring to assign the first two elements of the names array to variables a and b, and the rest of the elements are collected into a new array r using the rest operator (...). The output will show the values of a, b, and r as expected.
    // const person={
    //     name: "John Doe",
    //     age: 30,
    //     occupation: "Developer"
    // }
    // let {name: n, age, occupation} = person;
// In this example, we use object destructuring to extract the values of the name, age, and occupation properties from the person object and assign them to variables with the same names. The name property is renamed to n using the syntax name: n. The output will show the values of n, age, and occupation as expected.
doubleAndReturnArgs=(arr, ...args) => [...arr, ...args.map(x => x * 2)];
arr1=[1, 2, 3];
