function palindrome(str) {
    //Buat ilangin unwanted character
    var re = /[\W_]/g;


    var lowRegStr = str.toLowerCase().replace(re, '');
    var arrayReverseStr = lowRegStr.split('');
    console.log(arrayReverseStr);
    var reverseStr = lowRegStr.split('').reverse().join('');
    if (reverseStr === lowRegStr) {
        console.log("TRUE, PALINDROME");
    } else {xxxxx
        console.log("FALSE, BUKAN PALINDROME");
    }
  }



//   palindrome("A man, a plan, a canal. Panama");
  palindrome("Katak!");