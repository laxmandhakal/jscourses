////task part///////

////task part///////
const task = require('./cbTask');

console.log('start preparation for exam');
console.log('call friend for note');
task.askForNote('database', function(err, done) {
    if (err) {
        console.log("error getting note", err);
    } else {
        console.log('note received from frined', done);
        console.log('note is in pdf now print note');
        task.printNote('pdfNote', function(err, done) {
            if (err) {
                console.log('printing failed', err);
            } else {
                console.log("printing completed", done);
                task.entertainment(function() {
                    console.log('entertainment finsihed');
                    task.servicing(function() {
                        console.log('bike servicing finished');
                        console.log('now start preparation');
                    });
                    console.log('i got phone call');
                });
                console.log('mom arrives home');
                console.log('it started raining');
            }
        });
        console.log('meet friend');
        console.log('have coffee');


    }
});
console.log('clean room');
console.log('prepare pen pencils papers');

//#######Execution Part############
//#######Execution Part############