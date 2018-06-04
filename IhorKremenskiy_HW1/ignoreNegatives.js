
function add(a, b, c, d) {
    let ignoreNegatives = confirm("Ignore negatives?");

    if (ignoreNegatives) {

        if (a < 0) {
            a = 0;
        }
        if (b < 0) {
            b = 0;
        }
        if (c < 0) {
            c = 0;
        }
        if (d < 0) {
            d = 0;
        }
    }

    return a + b + c + d;
}


console.log(add(1, 2, -4, 6))
console.log(add(3, 5, 0, -3))
console.log(add(5, -12, 11, -88))