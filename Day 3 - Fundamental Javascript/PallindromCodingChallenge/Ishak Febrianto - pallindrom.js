function palindrome(str) {
    //Buat ilangin unwanted character
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (reverseStr === lowRegStr) {
        console.log("TRUE, PALINDROME");
    } else {
        console.log("FALSE, BUKAN PALINDROME");
    }
    // return reverseStr === lowRegStr;
  }
//   palindrome("A man, a plan, a canal. Panama");
  palindrome("ishakk");