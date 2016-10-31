// Last value of the loop
// What will be the last value of the loop? Why?

var i = 3;

while (i) { // == while(i != 0), btw this is a dangerous shorthand, safer would be `while (i > 0)` because i could be negative
    console.log(i--); // post-decrementation, so first it will be printed, next decremented, last value will be '1'.
}

// Answer is: 1