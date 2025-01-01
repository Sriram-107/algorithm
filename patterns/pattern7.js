function pattern7(n) {
    for (let i = 1; i < n; i++) {
        let space = "";
        let star = "";
        for (let j = n; j > i; j--) {
            space += " ";
        }
        for (let k = 1; k < i * 2; k++) {
            star += "*"
        }
        console.log(`${space}${star}`);


    }
}

pattern7(5)