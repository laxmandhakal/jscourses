// important theory

// data type is classification of data
// primitive data type
// String // any single quote ('') or double quote("") enclosed value are string
// Number // float int any numeric value are number
// Boolean // true or false
// Null // non existing allocation
// Undefined // memory allocated but value not defined is undefined
// Symbol // to be continued

// non primitive data type
// Array and Object

var name;
name = 'brodway'
name = 333;
name = true;


console.log('name >>' + name);
// JAVASCRIPT IS LOOSELY TYPED PROGRAMMING LANGUAGE

// non primitive data type
// non primitive data type is mainly focused for multiple values
// array
var name = 'kisor';
var addr = 'tinkune';
var hobbies = 'coding,debugging,testing';
// array
// syntax
// array is a data type holding multiple values
// two way of defining array
// 1.constructor method
// 2.bracket notation
var hobbies = new Array(); // constructor syntax
var inrests = [] // bracket notation 
var bikes = ['yamaha', 'honda', 'xyz', 3333, true, []];
console.log('bikes >>>', bikes);
console.log('bikes index >>', bikes[1]);
// array in javascript is hetregenous array
// data type can be diffrent
// array sang sangai aaune kura vaneko index ho
// naming convention
// PascalCase = EmailAddress
// camelCase emailAddress // recommended
// snake_case email_address
// skewer-case email-address


// object
// if you understand object you will understand javascript
// object is collection of key value pairs(name value pairs) (property value pairs)

// syntax two way of defining a object
// constructor syntax
// bracket notation
var ram = new Object(); // constructor syntax
var shyam = {}; // bracket notation
//
var brodway = {
    name: 'bordway infosys nepal', //name is key string is value 
    email: 'brodway@gmail.com',
    phone: 33333,
    address: ['tinkune', 'pokhara', 'usa'],
    name: 'hi'
}
brodway.name = 'hello and welcome';
brodway.xzy = 'new value'
    // accessing property of object
    // two way of accessing property of object
    // dot notation and bracket notation
    // console.log('value of object ',brodway.address);
    // bracket notation use bracket notation to work with refrences
console.log('value of objec tin bracket notation', brodway);

//code base will be function
//