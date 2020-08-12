// important theory

// // closure is an inner function  which has access to
// // 1 global scope
// // 2 parent function argument
// // 3 parent function scope
// // 4 own argument
// // 5 own scope
// var welcome = 'welcome';

// function warmWelcome(name) {
//     let to = 'to';

//     function hello(place) { // hello is closure
//         let abc = 'abc';
//         let text = welcome + ' ' + name + ', ' + to + ' ' + place;
//         console.log('text ...', text);

//         function hi() {
//             let hiText = 'hello ';

//             function sayHello() {
//                 let sayhelloText = 'say hello';
//             }
//         }

//     }
//     hello('bhaktapur');
// }

// warmWelcome('ramesh');

function welcome(name) {

    function setPlace(location) {
        let innerMsg = 'welcome ' + name + ', to ' + location;
        return innerMsg;
    }

    function test() {

    }

    function hi() {

    }
    // var innerRes = setPlace('butwal');
    // console.log('innerRes >>', innerRes);
    return setPlace;

}
var res = welcome("ram")('nepal');
console.log('what comes out .>>', res);

// setPlace('tinkune');

// prepare a functin to multiply two numbers 

var res = multiply(3)(3)(3);
console.log('res >>>', res) // should print 27;