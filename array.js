// var fruits = ['apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana']

// console.log('array lenght', fruits.length);
// console.log('find index', fruits.indexOf('kiwi'));
// // console.log('find last index',fruits.lastIndexOf('kiwi'));

// // adding item in array
// // at frist at last or somewhere between
// fruits.unshift('kiwi');
// var a = fruits.push('watermelon');
// console.log('fruits now >>', a);

// // remove from array
// // from first last and somewhere between
// var firstItem = fruits.shift();
// var lastItem = fruits.pop();
// console.log('remvied item..', firstItem)
// console.log('remvied item..', lastItem)
// console.log('remove from first', fruits);

// // splice
// fruits.splice(2, 1, 'papaya'); // 1st argument is index 2nd argument number of item to be removed
// // 3rd argument item to be added
// console.log('fruits after spplice>>', fruits);

// loop
// forEach,filter,map,reduce,every,some,find
var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pineappl', 'banana', 'apple', 'banana', 'orange', 'banana', 'apple', 'banana', 'orange', 'banana']


// 1st task
// find unique array of elemnts from above fruits

//2 task
// find count of item of the fruits array
// {
//     apple: 3,
//     kiwi: 1,
//     banana: 9
// }


// fruits.forEach(function(item, index) {
//     console.log('item is .>', item);
//     console.log('index is >', index)
// });

{
    title: 'abcd',
    duration: '34m2s' // 2m2s 2m22s
}

// prepare function calculate minute and sec from above duration
function calculateTime(arg) {
	return {
		// minute:minvalue
		sec:secValue
	}; // your logic

}
calculateTime('33m33s');