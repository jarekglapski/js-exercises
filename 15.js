//Create a function toCamelCase to transform strings like border-top-left into borderTopLeft.

function toCamelCase(s) {
    if(null === s) return null;
    var chunks = s.split('-');
    var ret = chunks[0];
    for (var i = 1; i < chunks.length; i++) {
        ret += chunks[i].charAt(0).toUpperCase() + chunks[i].slice(1);
    }
    return ret;
}

console.log(toCamelCase('to-camel-case')); // toCamelCase
console.log(toCamelCase('border-top-left-radius')); // borderTopLeftRadius
console.log(toCamelCase('border'));
console.log(toCamelCase(''));
console.log(toCamelCase(null));
console.log(toCamelCase('-border'));
console.log(toCamelCase('--border'));
console.log(toCamelCase('border-'));
console.log(toCamelCase('b-border-g-r'));
