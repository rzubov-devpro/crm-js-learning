function add(a, b, c, d) {
    if (confirm("Ignore negatives?")) {
        let summ = 0;
        let IsaNotNegative = a > 0;
        let IsbNotNegative = b > 0;
        let IscNotNegative = c > 0
        let IsdNotNegative = d > 0
        console.log("IsaNotNegative:", IsaNotNegative, )
        console.log("IsBNotNegative:", IsbNotNegative, )
        console.log("IsCNotNegative:", IscNotNegative, )
        console.log("IsDNotNegative:", IsdNotNegative, )
        if (IsaNotNegative) {
            summ = summ + a;
        }
        if (IsbNotNegative) {
            summ = summ + b;
        }
        if (IscNotNegative) {
            summ = summ + c;
        }
        if (IsdNotNegative) {
            summ = summ + d;
        }
        return summ;
    } else {
        return a + b + c + d
    }
}
console.log(add(1, -4, 7, 12));


