//let a = 1, b = -4, c = 7, d = 12;
let x = 0;

function addPositive(a, b, c, d) {
    if (a < 0) {
        a = x;
    } if (b < 0) {
        b = x;
    } if (c < 0) {
        c = x;
    } if (d < 0) {
        d = x;
    }
    return a + b + c + d;
};



function includeNegative(a, b, c, d) {
    return a + b + c + d;
};

function myFunc(a, b, c, d) {
    if (confirm('ignore negative')) {
        return addPositive(a, b, c, d);
    } else {
        return includeNegative(a, b, c, d);
    }
};

console.log(myFunc(1, -4, 7, 12));








