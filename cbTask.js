function askForNote(topic, cb) {
    console.log('friend received call and insit to callback after he finds note');
    setTimeout(function() {
        console.log('note found after 2 hour');
        cb(null, {
            pdfNote: topic

        })
    }, 2000);
}

function printNote(pdfNote, cb) {
    console.log("note is in stationary");
    console.log('shopkeeper promise to callback after he finish printing note');
    var electricity = true;
    if (electricity) {
        setTimeout(function() {
            cb(null, 'printedNote');
        }, 3000);
    } else {
        cb('no-electricity');
    }
}

function entertainment(cb) {
    console.log('entertainment started')
    setTimeout(function() {
        cb();
    }, 2000);
}

function servicing(cb) {
    console.log("bike is at servicing");
    setTimeout(function() {
        cb();
    }, 1000);
}


module.exports = {
    servicing,
    entertainment,
    askForNote,
    printNote
}