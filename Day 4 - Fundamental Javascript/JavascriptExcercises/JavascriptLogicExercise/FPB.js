var fpb = function(a, b) {
    if (b == 0) {
        return a;
    }
return gcd(b, a % b);
};
console.log(fpb(3,4));