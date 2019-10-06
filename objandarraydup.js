a = {
    a: 'ram',
    b: 'hari',
    c: 'lax'
}
b = JSON.parse(JSON.stringify(a)) //to duplicate object
delete b.a
console.log(a)
c = ["har", 1, 2, 'lax']
m = [...c] //to duplicate array
delete m[0]
console.log(m);