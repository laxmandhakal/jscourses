var k = ['apple', 'banana', 'orange', 'kiwi', 'pineappl','hghg', 'banana', 'apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana']


// 1st task
// find unique array of elemnts from above fruits
function lax(fruits) {
    var uniq = [];
    var x = fruits[0];
    uniq.unshift(x);
    fruits.forEach(function(item) {
        let t = 0;
        uniq.forEach(function(items) {

            if (items == item) {
                t = t + 1;
            }
        })
        if (t == 0) {
            uniq.unshift(item);
        }
    })
    uniq.pop();
    return uniq
}
console.log(lax(k));