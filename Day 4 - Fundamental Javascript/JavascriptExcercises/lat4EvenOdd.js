function evenOddNumChecker(numbers){
  
    let angkaArr = numbers.split(",")
    let numberArr = angkaArr.reduce((acc,x) => acc.concat(+x), [])
    let checkerNumberArr = numberArr.map((num) => {
        if(num%2==0) {
            return "Genap";
        }
        if(isNaN(num)) {
            return "Invalid Data";
        }
        else if(num %2 !==0){
            return "Ganjil";
        }
        
    }, [])
    console.log(checkerNumberArr);
}   
                                                                                                                
evenOddNumChecker("2");