const pattern10 = (n) => {
    for (let i = 1; i <= n * 2 - 1; i++) {
        let count = i > n ? 2 * n - i : i;
        let star = "";
        for (let j = 1; j <= count; j++) {


            star += "*";

        }
        console.log(`${star}`);


    }
}

pattern10(4);