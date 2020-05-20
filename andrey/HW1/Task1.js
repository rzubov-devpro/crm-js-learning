const X = 0;

function addPositive(a, b, c, d) {
    if (a < 0) {
        a = X;
    } if (b < 0) {
        b = X;
    } if (c < 0) {
        c = X;
    } if (d < 0) {
        d = X;
    }
    return a + b + c + d;
}



function includeNegative(a, b, c, d) {
    return a + b + c + d;
}

function addFunction(a, b, c, d) {
    if (confirm('Ignore negatives?')) {
        return addPositive(a, b, c, d);
    } else {
        return includeNegative(a, b, c, d);
    }
}

console.log(addFunction(1, -4, 7, 12));








