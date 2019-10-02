const fruits = ['apple', 'banana', 'grape'];

const vegitables = ['potato', 'pumpkin'];

const bikes = ['honda', 'suzuki', 'bajaj'];

// export syntax
// es5

console.log('i will be executed');

module.exports = {
    fruits,
    bikes: bikes,
    vegitables,
    a: 'b',
    c: 'd'
};

// es6 feature
// object short hand

// object destruct