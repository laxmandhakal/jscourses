function preparechow(data) {
    console.log("task prepare chowmein")
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
            reject();

        }, 1000);
    });
}

function getingred(val) {
    console.log("get ingredient");
    new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("got ingredient");
            resolve();
        }, 1000);
    });
}

function make() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("chowmein ready");
            console.log("eat chowmein");

        }, 2000);

    });
}

//execution
preparechow(400)
    .then(function() {
        console.log("got money");
        return getingred(true);
    })
    .then(function() {

        return make();
    })

.catch(function() {
    console.log("error in task");
})