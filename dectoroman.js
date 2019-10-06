//to convert decimal to roman numbers upto 3999 
c = 222;
b = c
k = ['I', 'II', "III", 'IV', 'V', 'VI', 'VII', 'VIII', "IX"]
r = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'XXC', 'XC']
z = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', "CCM", 'CM']
t = ['M', 'MM', 'MMM']

h = c.toString(10)
g = h.split("")
m = g.length
if (m == 1) {
    let p = c - 1;
    console.log("The required number is ")
    console.log(k[p])

}
if (m == 2) {
    let p = parseInt(g[0], 10);
    let w = r[p - 1]
    p = parseInt(g[1], 10);
    let x = k[p - 1];
    console.log("The required number is ")
    if (g[1] == 0 && g[2] == 0) {
        aa = w
    } else(g[2] == 0) {
        aa = w + x
    }
    console.log(aa)
}
if (m == 3) {
    let p = parseInt(g[0], 10);
    let w = z[p - 1]
    p = parseInt(g[1], 10);
    let x = r[p - 1];
    p = parseInt(g[2], 10);
    let v = k[p - 1]
    console.log("The required number is ")
    if (g[1] == 0 && g[2] == 0) {
        aa = w
    } else if (g[2] == 0) {
        aa = w + x
    } else {
        aa = w + x + v
    }

    console.log(aa)
}
if (m == 4) {
    let p = parseInt(g[0], 10);
    let w = t[p - 1]
    p = parseInt(g[1], 10);
    let x = z[p - 1];
    p = parseInt(g[2], 10);
    let v = r[p - 1]
    p = parseInt(g[3], 10);
    let o = k[p - 1]
    console.log("The required number is ")
    if (g[1] == 0 && g[2] == 0 && g[3] == 0) {
        aa = w
    } else if (g[2] == 0 && g[3] == 0) {
        aa = w + x
    } else if (g[3] == 0) {
        aa = w + x + v
    } else {
        aa = w + x + v + o
    }


    console.log(aa)
}