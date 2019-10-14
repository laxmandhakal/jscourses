// var fruits = ['apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana']

// console.log('array lenght', fruits.length);
// console.log('find index', fruits.indexOf('kiwi'));
// // console.log('find last index',fruits.lastIndexOf('kiwi'));

// // adding item in array
// // at frist at last or somewhere between
// fruits.unshift('kiwi');
// var a = fruits.push('watermelon');
// console.log('fruits now >>', a);

// // remove from array
// // from first last and somewhere between
// var firstItem = fruits.shift();
// var lastItem = fruits.pop();
// console.log('remvied item..', firstItem)
// console.log('remvied item..', lastItem)
// console.log('remove from first', fruits);

// // splice
// fruits.splice(2, 1, 'papaya'); // 1st argument is index 2nd argument number of item to be removed
// // 3rd argument item to be added
// console.log('fruits after spplice>>', fruits);

// loop
// forEach,filter,map,reduce,every,some,find
var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pineappl', 'banana', 'apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana']

var unique = [];
fruits.forEach(function(item, i) {
    if (unique.indexOf(item) == -1) {
        unique.push(item);
    }
})
console.log('unique >>', unique);

// 1st task
// find unique array of elemnts from above fruits

//2 task
// find count of item of the fruits array
// {
//     apple: 3,
//     kiwi: 1,
//     banana: 9
// }
var count = {};
fruits.forEach(function(item, i) {
    // if (count[item]) {
    //     count[item] = count[item] + 1;
    // } else {
    //     count[item] = 1;
    // }
    // count[item] = (count[item] || 0) + 1;
    count[item] = count[item] ?
        count[item] + 1 :
        1;
});
console.log('count >>', count);

// fruits.forEach(function(item, index) {
//     console.log('item is .>', item);
//     console.log('index is >', index)
// });

// {
//     title: 'abcd',
//     duration: '34m2s' // 2m2s 2m22s
// }

// prepare function calculate minute and sec from above duration
// function calculateTime(arg) {
//     return {
//         // minute:minvalue
//         sec: secValue
//     }; // your logic

// }
// calculateTime('33m33s');
// var a = '3m334s';
// var res = a.split('m');
// var minute = res[0];
// var sec = res[1].split('s')[0];
// console.log('minute >',minute);
// console.log('sec >',sec);

var students = [{
    name: 'ram',
    class: 2,
    house: 'blue'
}, {
    name: 'shyam',
    class: 5,
    house: 'green'
}, {
    name: 'ramesh',
    class: 2,
    house: 'green'
}, {
    name: 'sita',
    class: 3,
    house: 'blue'
}, {
    name: 'gita',
    class: 2,
    house: 'green'
}, {
    name: 'abcd',
    class: 5,
    house: 'green'
}]

// task
// you have to group data from property that is received as an argument

function groupBy(arr, prop) {
    // logic here
}

groupBy(students, 'house')
var res = {
    green: [{
        name: 'gita',
        class: 2,
        house: 'green'
    }, {
        name: 'abcd',
        class: 5,
        house: 'green'
    }, {
        name: 'shyam',
        class: 5,
        house: 'green'
    }],
    blue: [{
        name: 'sita',
        class: 3,
        house: 'blue'
    }, {
        name: 'ram',
        class: 2,
        house: 'blue'
    }]
}


// reduce// it is used to reduce large value into single value

// syntax

// let i = 1;
// fruits.reduce(function(acc, item, index, orignalArray) {
//     console.log('acc>>>', acc);
//     console.log('item>>>', orignalArray);
//     return i++;
// }, [])

var numbers = [1, 3, 4, 5, 6, 67, 44, 3, 3];
var res = numbers.reduce(function(acc, item) {
    acc += item;
    console.log('acc>>', acc);
    return acc;
}, 0);
console.log('res >>', res);