// task part
function askForNote(topic) {
    console.log('inside ask note');
    return new Promise(function(resolve, reject) {
        console.log("1 new");
        resolve()
    })
}
function printNote(pdfNote) {
    return new Promise(function(resolve, reject) {
        console.log("in print note");

        var electricity = true;
        if (electricity) {

            resolve('printedNote');

        } else {
            reject('no-electricity');
        }
    })
}
function entertainment() {
    return new Promise(function(resolve, reject) {
        console.log('entertainment started')
        resolve();
 })
}
function servicing() {
    return new Promise(function(resolve, reject) {
        console.log("bike is at servicing");
        resolve();
    })
}
askForNote('web-technology')
    .then(function(data) {
        console.log("1 then")

        return printNote('pdfNote');
    })
    .then(function(data) {
        console.log("2 then")

        return servicing();
    })
    .then(function(data) {
        console.log("3 then")

        return entertainment();
    })
    .then(function(data) {

        console.log('last then');
    })
    .catch(function(err) {
        console.log('err in promise >>>', err);
    })