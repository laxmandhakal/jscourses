//to display key and values
ram = {
    lax: 2,
    ram: 3,
    hari: 4
}
for (x in ram) {
    console.log(x, ram[x])
}
//map method

x = [1, 2, 3]
l = x.map(function(n) {
    return n + 2
})
console.log(l)