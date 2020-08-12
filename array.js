// task to sort array by unique elements in javascript
var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pineappl', 'banana', 'apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana']

var unique = [];
fruits.forEach(function(item, i) {
    if (unique.indexOf(item) == -1) {
        unique.push(item);
    }
})
console.log('unique >>', unique);


// task to count number of repeated element in array and store in object
var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pineappl', 'banana', 'apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana']
var count = {};
fruits.forEach(function(item, i) {

    count[item] = count[item] ?
        count[item] + 1 :
        1;
});
console.log('count >>', count);



// illustrating use of reduce function in javascript
var numbers = [1, 3, 4, 5, 6, 67, 44, 3, 3];
var res = numbers.reduce(function(acc, item) {
    acc += item;
    console.log('acc>>', acc);
    return acc;
}, 0);
console.log('res >>', res);