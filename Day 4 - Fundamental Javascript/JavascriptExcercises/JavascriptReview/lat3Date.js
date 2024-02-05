function printDate() {
    let date = new Date()
    let day = date.getDate();
    console.log(day);
}
printDate();

function getDate() {
    let date = new Date()
    let day = date.getDate();
    return day;
}
// getDate();
console.log(getDate())