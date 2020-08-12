//more on nested promise with function

// task part
function askForNote(topic) {
    console.log('friend received call and insit to callback after he finds note');
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('note found after 2 hour');
            resolve({
                pdfNote: topic

            })
        }, 2000);
    })

}

function printNote(pdfNote) {
    return new Promise(function(resolve, reject) {
        console.log("note is in stationary");
        console.log('shopkeeper promise to callback after he finish printing note');
        var electricity = true;
        if (electricity) {
            setTimeout(function() {
                resolve('printedNote');
            }, 3000);
        } else {
            reject('no-electricity');
        }
    })

}

function entertainment() {
    return new Promise(function(resolve, reject) {
        console.log('entertainment started')
        setTimeout(function() {
            resolve();
        }, 2000);
    })

}

function servicing() {
    return new Promise(function(resolve, reject) {
        console.log("bike is at servicing");
        setTimeout(function() {
            resolve();
        }, 1000);
    })

}


// task part///////


// execution
console.log('start preparation');
askForNote('web-technology')
    .then(function(data) {
        console.log('note arrived');
        return printNote('pdfNote');
    })
    .then(function(data) {
        console.log('print note success');
        return servicing();
    })
    .then(function(data) {
        console.log('result of sservicing');
        return entertainment();
    })
    .then(function(data) {
        console.log('resul of entertainment');
        console.log('now start preparation');
    })
    .catch(function(err) {
        console.log('err in promise >>>', err);
    })