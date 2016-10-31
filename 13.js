// There is an object with salaries.
// Write a code to print the sum of all salaries. If the given object is empty - return 0.

var salaries = {
    "Andrew": 10000,
    "Peter": 12300,
    "John": 14500
};

function countSalariesSum(o) {
    var sum = 0;
    for (var prop in o) {
        if (Object.prototype.hasOwnProperty.call(o, prop)) {
            if(isNaN(o[prop])) return NaN;
            sum += (+o[prop]); // unary plus for string to number conversion
        }
    }
    return sum;
}

console.log(countSalariesSum(salaries)); // 36800
console.log(countSalariesSum({})); // 0
console.log(countSalariesSum([10,20,30])); // works with arrays -> 60
console.log(countSalariesSum(['x',20,30])); // arrays with string
console.log(countSalariesSum({'x':20,y:-10,'z':'test'})); // object mix of add and concat
console.log(countSalariesSum({'x':20,y:-10,'z':'10'})); // object with number as string
console.log(countSalariesSum({'x':20.5,y:10.3,'z':'10.2'})); // floats
console.log(countSalariesSum({'x':20,y:-10,'z':'0x10'})); // object with hex!!! number as string
