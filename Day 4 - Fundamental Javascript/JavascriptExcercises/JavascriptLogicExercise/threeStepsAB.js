function threeStepsAB (text) {
    console.log(text.length);
    // console.log(text[1])
    for(var i=0;i<text.length-4;i++) {
        if(text[i]=="a" && text[i+4]=="b") {
            return true;
        } else if (text[i]=="b" && text[i+4]=="a") {
            return true;
        }
    }
    return false;
}
console.log(threeStepsAB("abuba"));