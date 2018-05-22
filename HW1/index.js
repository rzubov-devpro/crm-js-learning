let ignoreNegatives = confirm("Ignore negatives?");

function myAdd(a, b, c, d) {

    if (ignoreNegatives) {
        if (a < 0) {
            a = 0;
        }
        if (b < 0) {
            b = 0;
        } if (c < 0) {
            c = 0;
        } if (d < 0) {
            d = 0;
        }
    }

    return a + b + c + d;
    
}
console.log(myAdd(1, 2, -4, 6))
