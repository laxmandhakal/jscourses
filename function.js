//theory 

// function
// function is reusuable block of code  that perfoms specific task.
// syntax 
// function() {

// }

// two way of writing function in javascript
// 1.expression syntax
// 2. declarative syntax

// 1.expression syntax
// var name;
// name = 'sdlkfjsa';
// name=333;
// name = true;
// name = function(){

// }
// console.log('wlecom >>', welcome);
// welcome();
// var welcome = function() {
//     console.log('i am expression syntax function')
// }

// welcome();

// expression syntax function

// declarative syntax
// sayHello();

function sayHello() {
    console.log('i am declarative syntax function');
}


// hoisting
// hoisting is a mechanism that moves all the declaration at top before executing any js file

// types of functions
// named function
// unnamed function (anynanmous function)
// function with argument
// function with return type
// IIFE
// named function
// function welcome(){

// }
// var hello = function(){

// }

// unnamed function
// function() {
//     console.log('i am unnamed function');
// }

// IIFE // immediately invoked functional expression
// syntax
// ()() //iife block
// sayHello();
// (
//     function() {
//         console.log('anynanmous function')
//     }
// )()
// taking help of IIFE to execute anynamous function

// function with argument
// JAVASCRIPT IS LOOSELY TYPED PROGRAMMING LANGUAGE

// function welcome(name, address) {

//     // console.log('what comes in >>>', name);
//     var text = 'Hello ' + name + ', welcome to ' + address;
//     console.log('text >>', text);
// }

// welcome(null, 'broadway')

// function sendMail(details) {

//     console.log('sender is >>', details.sub);
//     // console.log('receiver is >>', receiver);
//     // console.log('msg is >>', msg);
//     // console.log('subject is >>', subject);
// }

// sendMail({
// 	sender:'',
// 	receiver:'',
// 	msg:'',
// 	sub:'sdfsdklf'
// });

// function with return type

function buyVegitables(amount) {

    let finalAmount = amount - 100;
    let potato = 'potato';
    let tomato = 'tomato';
    // JAVASCRIPT IS LOOSELY TYPED PROGRAMMING LANGUAGE
    return {
        name: 'broadway'
    };

    console.log('i am here');
}
var result = buyVegitables(200);
console.log('result >>>', result);