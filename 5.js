//Write a function min(a, b) to return the smaller number of the given arguments a and b.

function min1(a, b) {
    if (a < b) return a;
    else return b;
}

function min2(a, b) {
    if (a <= b) return a;
    return b;
}

function min3(a, b) {
    return (a <= b) ? a : b;
}

function min4(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    return (a <= b) ? a : b;
}

function min5(a, b) {
    return Math.min(a,b);
}


[[1,2],[2,1],[0,0],[-1,1],[undefined,1]].forEach(function (e) {
    console.log(e[0],e[1],'=>',min1(e[0],e[1]),min2(e[0],e[1]),min3(e[0],e[1]),min4(e[0],e[1]), min5(e[0],e[1]));
});
