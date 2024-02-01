function compareNumbers (firstNumber, secondNumber) {
    if (firstNumber>secondNumber) {
        return "false";
    }
    else if(firstNumber<secondNumber) {
        return "true";
    }
    else if(firstNumber==secondNumber) {
        return "-1";
    }
}

console.log(compareNumbers(5,5))