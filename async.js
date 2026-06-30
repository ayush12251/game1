h1= document.querySelector("h1");
function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve(color);
        }, delay);
});}

 async function changeColors() {
    await colorChange("red", 1000);
    await colorChange("blue", 1000);
    await colorChange("green", 1000);
    await colorChange("yellow", 1000);
}

// function randomNumber() {


//     return new Promise((resolve, reject) => {
//         setTimeout(() => {  
//         const rand = Math.floor(Math.random() * 10) + 1;    
     
//             console.log(rand);
//             resolve(rand);
       
//     }, 1000);
// });
// }
// async function greeting() {
   
//     // throw is used to create a custom error and stop the execution of the function. In this case, it will throw an error with the message "Something went wrong" and the function will not return "Hello World". The catch block in the promise will handle this error and log it to the console.
//    await randomNumber();
//    await randomNumber();
//    await randomNumber();
   
// }
// greeting();

// The code defines an asynchronous function called greeting that returns a promise which resolves to the string "Hello World". The then method is used to handle the resolved value and log it to the console, while the catch method is used to handle any potential errors that may occur during the execution of the promise.