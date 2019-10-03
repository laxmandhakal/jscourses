//arrange array in ascending order
var array = [10, 20, 5, 8, 75, 45, 55, 12, 9, 0, 1, 3];

function sort(passed) {
    let l = passed.length
    for (i = 0; i < l; i++) {
        let m = 0;
        passed[i]
        for (j = m; j < l; j++) {
            if (passed[j] > passed[i]) {
                let a = passed[i];
                passed[i] = passed[j];
                passed[j] = a;


            }

        }
        m = m + 1;
    }
    console.log(passed);
}
//execution
sort(array);