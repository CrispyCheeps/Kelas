/*
Soal 2: Fetch Data dari API (Promise)
Ubahlah fungsi fetchUserData dari soal sebelumnya agar menggunakan Promise.
*/

function fetchUserData(username) {
    const apiUrl = `https://api.github.com/users/${username}`;
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(res => {
                if (!res.ok) {
                    throw new err(`HTTP err! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    });
}
const username = "CrispyCheeps";
fetchUserData(username)
    .then(data => {
        console.log("Data dari GitHub API:", data);
    })
    .catch(err => {
        console.err(`err: ${err.message}`);
    });