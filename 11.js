//What is the result of the following code:

function a() {
    return 1;
}
console.log(a);

//And what of the following? What's the difference and why?
(function g() {
    return 1;
});
try {
    console.log(g);
} catch(err) {
    console.log(err);
}
//Above is not a function declaration, so it is unknown outside its own scope. It's just a function expression
//However, it can be executed:
(function g() {
    console.log('inside g');
    return 1;
})();

//If given a name, it will become a declaration:
var b = (function g() {
    console.log('inside g');
    return 1;
});
console.log(b);