/*function groupBy(arr, prop) {
    // logic here
}
*/
 /*output format :groupBy(students, 'house')
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
}*/
function groupBy(arr, prop) {
    store = {};
    next = arr.filter(function(item, index) {
        for (x in item) {
            if (item[x] == prop) {
                return item;
                break;
            }
        }
    })
    store[prop] = next;
    return store;
}
var students = [{
    class: "xii",
    name: "hari",
    section: "A",
    faculty: "science"
}, {
    class: "xi",
    name: "shyam",
    section: "B",
    faculty: "management"
}, {
    class: "xi",
    name: "hari",
    section: "A",
    faculty: "management"
}, {
    class: "xii",
    name: "shyam",
    section: "B",
    faculty: "science"
}]
console.log(groupBy(students, "xi"));