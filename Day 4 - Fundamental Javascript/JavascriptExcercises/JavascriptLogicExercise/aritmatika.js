function isArithmeticProgression(numbers) {
    let arr = [];
    arr = numbers;
    if(arr.length == 1) {
        return true
    }
    let isArith = false;
    let d = arr[1] - arr[0];
    for(let i=2;i<arr.length;i++) {
        if(arr[i] - arr[i-1] !=d) {
            return false
        }
    }
    return true;
}

console.log(isArithmeticProgression([1,2,3,4]));