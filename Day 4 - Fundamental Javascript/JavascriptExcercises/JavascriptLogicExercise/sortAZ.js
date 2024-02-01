function urutHuruf(str) {
    var splitString = str.split("");
    return splitString.sort();
}

function urutHuruf2(str) {
    var array = str.split("");
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap elements
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }

  console.log(urutHuruf("ishak"));
console.log(urutHuruf2("ishak"));

