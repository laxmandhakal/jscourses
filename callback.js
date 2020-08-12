//important theory 

// function buyMobile(model) {
//     console.log('i am at mobile shop');
//     console.log('shopkeeper insist me to wait 2 hours');
//     setTimeout(function() {
//     	console.log('mobile arrived at shop');
//         //return model;

//     }, 2000);
// }

// console.log('i want to buy mobile');
// console.log('go to shop');
// var res = buyMobile('s10');
// console.log('i have mobile >>', res);
// console.log('take photo');
// console.log('post it in instagram');



// callback 
// callback is a function which is passed as an argument to another function
// callback is used to handle result of asynchronous call


// function that accepts another function as parameter is higher order function in javascript
// task part /////
function takeSelfie() {
    console.log('selfie taken');
}

function askMoney(amt, callback) {
    // console.log('what comes in >>', callback);
    console.log('mom told me to wait for few days till salary arrived')
    setTimeout(function() {
        // return '3333';
        // ram(89499);
        console.log('salary arrived');
        callback();
    }, 3000)
}


// execution part
console.log('i want to buy cycle');
console.log('i dont have money, so ask money with parent ');
askMoney(4000, function() {
    console.log('result of ask money arrived');
    console.log('now i should perform all the blocking work which needs money');
    console.log('now go to cycle shop');
});
takeSelfie();
console.log('eat food');
console.log('take bath');
console.log('go to college');

// summarize
// asynchronous
// time consuming task where return wont work
// divide code in task part and execution

// execution part is always important
// during execution cycle if you think some task are time consuming and you should handle their result you have to use callback
// callback is nothing but a function which is passed as an argument in another function(task);

// we will have block of task which we will categorieze as blocking or non blocking to speific task
// all blcoking task should be perfomed inside call back block

// non blocking task can be done without waiting result


// buy ko kaam

// ask money