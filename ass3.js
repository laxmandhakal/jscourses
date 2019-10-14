//to display time 33m33s in format {minutes:33,seconds:33}
var time = "33m33s"

function calculateTime(str) {
    ab = {}
    var str = "33m33s"
    a = str.trim();
    m = a.split("m")
    a
    minute = Number(m[0])
    secs = m[1]
    k = secs.split("s")
    second = Number(k[0])
    ab.minutes = minute
    ab.seconds = second
return ab;

}
console.log(calculateTime(time));