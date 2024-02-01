function isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(number));
    var prime = number != 1;
    for(var i=2; i<sqrtnum+1; i++) {
        if(number % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

console.log(isPrime(4));