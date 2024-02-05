let ishak = {
    nama_depan : "ishak",
    nama_belakang : "obriant",
    hobi : ["tenis", "makan", "lari", "basket", "listening music", "playing music"],
    angka_favorit : 18,
    memakai_kacamata : true,
}

console.log(ishak);
console.log(ishak.nama_depan + " " + ishak.nama_belakang);

ishak.angka_favorit = 8;
console.log(ishak.angka_favorit);

ishak.hobi.push("coding");
console.log(ishak.hobi);

ishak.lulusan = "hacktiv8"
console.log(ishak.lulusan);

ishak.hobi.map((hobiIshak) => {
    console.log(hobiIshak)
});

console.log(Object.keys(ishak));
console.log(Object.values(ishak));

for (const key in ishak) {
    console.log(`${key}: ${ishak[key]}`);
}