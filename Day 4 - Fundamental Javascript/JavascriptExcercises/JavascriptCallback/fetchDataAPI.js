/*
Soal 1: Fetch Data dari API (Callback)
Buatlah fungsi fetchUserData yang akan menerima 
sebuah username dari GitHub dan sebuah callback 
function sebagai argumen. Fungsi ini akan melakukan 
HTTP GET request ke API GitHub(https://api.github.com/users/[username]) 
dan memanggil callback dengan data yang diambil dari API.
*/

function fetchUserData(username, callback) {
    const apiUrl = `https://api.github.com/users/${username}`;
    fetch(apiUrl)
    .then((res) => {
        if(!res.ok) {
            throw new Error(`Http error! Status: ${res.status}`);
        }
        return res.json();
    }) 
    .then(data => {
        callback(null, data);
    })
    .catch((err) => {
        callback(err, null);
    });
}

const username = "CrispyCheeps";
const callbackFunction = (err, data) => {
    if(err) {
        console.error(`Error: ${err.message}`);
    } else {
        console.log("Data dari Github API:", data);
    }
}

fetchUserData(username, callbackFunction);
