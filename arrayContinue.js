// learning the use of forEach,map,filter in JS
var mobiles = [{
    brand: 'samsung',
    model: 's10',
    price: 3333,
    color: 'silver'
}, {
    brand: 'sony',
    model: 'xperia',
    price: 33,
    color: 'black'
}, {
    brand: 'motorolla',
    model: 'motog4plus',
    price: 22,
    color: 'black'
}, {
    brand: 'htc',
    model: 'a',
    price: 33,
    color: 'silver'
}, {
    brand: 'gionee',
    model: 's6s',
    price: 223,
    color: 'golden'
}, {
    brand: 'mi',
    model: 'note7pro',
    price: 2,
    color: 'black'
}, {
    brand: 'samsung',
    model: 's8',
    price: 3333,
    color: 'black'
}, {
    brand: 'lava',
    model: 'irish',
    price: 11,
    color: 'golden'
}, {
    brand: 'samsung',
    model: 's9',
    price: 3333,
    color: 'black'
}, {
    brand: 'nokia',
    model: '3300',
    price: 333,
    color: 'white'
}];

mobiles.forEach(function(item, i) {
    item.status = 'availabel';
})



var samsungsMobile = mobiles.filter(function(item, i) {
    if (item.brand === 'samsung') {
        return true;
    }
});

var blackMobile = samsungsMobile.filter(function(item, i) {
    if (item.color == 'black') {
        return item;
    }
});
var s9 = blackMobile.filter(function(item, i) {
    if (item.model == 's9') {
        return true;
    }
})

console.log('orginal array >>', mobiles);
console.log('samsung array >>', samsungsMobile);
console.log('black mobiles', blackMobile);
console.log('s9 >>', s9);
console.log('orginal before map >>', mobiles)

mobiles.map(function(item, i) {
    if (item.model == 's9') {
        item.status = 'sold';
        return item;
    }
})
console.log('orginal after map >>', mobiles.length)

mobiles.forEach(function(item, i) {
    if (item.status == 'sold') {
        mobiles.splice(i, 1);
    }
})
console.log('mobiles.lenght', mobiles.length)