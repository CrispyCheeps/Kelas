function isPrime (number) {
    var sqrtnum = Math.floor(Math.sqrt(number));
    console.log(sqrtnum);
    var prime = number != 1;
    for(var i=2; i<sqrtnum+1; i++) {
        if(number % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function listPrima(angkaPertama, angkaKedua) {
    let primes = [];
  
    for (let i = angkaPertama; i <= angkaKedua; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    return primes;
}


console.log(listPrima(1,5));