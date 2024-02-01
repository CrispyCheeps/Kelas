function reverseString (text) {
    var splitString = text.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray
}

console.log(reverseString("ishak"));