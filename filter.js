var a = [{
    name: "man",
    course: "ccna",
    time: "10am"
}, {
    name: "lax",
    course: "web",
    time: "12am"
}, {
    name: "caman",
    course: "mean",
    time: "8am"
}]
arr1 = a.filter(function(item, index) {
    if (item.name) {
        return item
    }
})
console.log(arr1)