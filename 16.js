// Create a function unique to return array contains only unique values.

var strings = ['apple', 'carrot', 'pie', 'orange', 'apple', 'juice', 'pie'];

function unique(array) {
    return array.filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    });
}

console.log(unique(strings)); // apple, carrot, pie, orange, juice