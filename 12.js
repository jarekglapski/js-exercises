//Create function isEmpty(obj) to return true if the given object doesn't have any properties,
// and return false if it have any props.

//ECMAScript 3 implementation
function isEmpty(obj) {
    for(var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return true;
}

//ECMAScript5 implementation
function isEmpty1(obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
}

console.log('== isEmpty tests ==');
var schedule = {};
console.log(isEmpty(schedule)); // true
schedule["12:30"] = "lunch";
console.log(isEmpty(schedule)); // false

console.log(isEmpty({})); // true
console.log(isEmpty({foo:'bar'}));  // false

// tricky one!
console.log(isEmpty({hasOwnProperty:'boom'}));  // false

//non enumerable property !
var test = {};
Object.defineProperty(test, 'test', { value: 'testVal',
    enumerable: false,
    writable: true,
    configurable: true
});
console.log(isEmpty(test)); // true, wrong!!
console.log(test.hasOwnProperty('test')); // true, the property exist!!

console.log('== isEmpty1 tests ==');

var schedule = {};
console.log(isEmpty1(schedule)); // true
schedule["12:30"] = "lunch";
console.log(isEmpty1(schedule)); // false

console.log(isEmpty1({})); // true
console.log(isEmpty1({foo:'bar'}));  // false

// tricky one!
console.log(isEmpty1({hasOwnProperty:'boom'}));  // false

//non enumerable property !
console.log(isEmpty1(test)); // true, wrong!!
console.log(test.hasOwnProperty('test')); // true, the property exist!!
