// Write a function that accepts a number as an argument and check the number is prime or not.


function isPrime(n) {
    if(isNaN(n)) return NaN;
    if (n > Number.MAX_SAFE_INTEGER) return undefined;
    n = Math.abs(n);
    if (n % 2 == 0) return false;
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

[1, 2, 3, 4, 5, 7, 10, 13, 101, -1, -2, -4, -7, 105943, 15487469, 179426549, 32416190071, 2147483647, 67280421310721, 170141183460469231731687303715884105727, 'test']
    .forEach(function (e) {
        console.log(e, isPrime(e));
    });
