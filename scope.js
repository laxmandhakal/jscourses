// theory

// scope is visibility (accessibilty) of memory allcoation(var,const, function and function argument)
// scope have three types
// global scope
// local scope (functional scope)
// block scope
// "use strict"

// var name = 'brodway infosys nepal'; //global scope

// function welcome() { // global scope
//     welcomeText = 'welcome to brodway infosys nepal';
// }
// welcome();


// function sayHello() { 
// "use strict"
// abc= 'hi';
// // global scope
//     console.log('name inside sayHello ??', name);
//     // console.log('text in sayHello .>>', text); local scope are not accessible 

// }
// sayHello();
// console.log('welcomeText outside .>>', welcomeText);

// functional scope
let text = 'hi';

function welcome(name) {
    let text = 'hello from welcome';
    // falsy 0,'',null, undefiend, NaN,false,

    if (name) { // truthy and falsy property
        console.log('if block')
        let text1 = 'i am if block';
        console.log('text in if ', text)
    } else {
        console.log('else block')
        let text = 'i am else block';
        console.log('text in esle ', text);

    }

    console.log('text now after if else', text);

}
welcome();