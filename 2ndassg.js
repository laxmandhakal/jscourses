//task to count number of items in array
var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pineappl', 'banana', 'apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana']
var a = {}
fruits.forEach(function(item) {
    let t = 0;
    ``
    fruits.forEach(function(items) {

        if (item == items) {
            t = t + 1;
        }
    })
    a[item] = t;

})
console.log(a)