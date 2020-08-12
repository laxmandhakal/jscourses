// theory 

// promise
// promise is an object that represents future result value
// promise has 3 state
// 1. pending
// 2 onRejection
// 3 onFuffiled
// 4 settled

// promsie has three methods
// then,catch,finally
// then  is an method which is used to handle both success and failure of promise

// object is collection of key value pair


// syntax of promise

// promise can hanlde single values
// promsie will not change its state once settled

// var a = new Promise(function(success, failure) {
// success or 1st argument is callback for success
// failure or 2nd argument is callback for failure
//     setTimeout(function() {
//         failure();
//         failure();
//         success();
//     }, 5000);


// });
// console.log('a is >>>', a);

// function success(data) {
//     console.log('success in promise >>', data);
// }

// function failure(err) {
//     console.log('failure in promsie >>', err);
// }
// a
//     .then(success) // recommended to use for success only
//     .catch(failure)
//     .finally(function(){
//     	console.log('promise is settled');
//     })


function askMoney(amt) {
    var a = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(amt + 1000);
        }, 2000);
    })
    return a;
}

console.log('i want buy mobile');
console.log('i dont have money so ask with parent');
var res = askMoney(12222);
res
    .then(function(data) {
        console.log('success in promsie >>', data);
        console.log('i have money now');
    })
    .catch(function(err) {
        console.log('err in promsie >>', err);
        console.log('i dont have money');
    })
console.log('perfrom non blocking task');