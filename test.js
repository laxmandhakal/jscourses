//to find subarray that adds upto given number
//eg if number is 15 consecutive array element  should give 15
a = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 30, 20, 1, 40];
var no = 0;
c = 5;
l = a.length;
a.forEach(function(item, index) {
    let d = 0;
    for (i = index; i < l; i++) {
        d = d + a[i];
        if (c == d && d <= c) {
            console.log("index is");
            console.log(index + 1);
            console.log(i + 1);
            no = -1;
            break;
        }
    }
})
if (no != -1) {
    console.log("no answer");
}