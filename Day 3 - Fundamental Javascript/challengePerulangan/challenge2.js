for (let i = 1; i <= 120; i++) {
    if (i % 2 != 0) {
        console.log("\n")
        console.log("Halo, saya orang ke " + i);
        console.log("ini O saya : ");
        for (let z = 0; z < 100; z++) {
            process.stdout.write("O");
        }
    } else {
        console.log("\n")
        console.log("Halo, saya orang ke " + i);
        console.log(" ");
    }
}