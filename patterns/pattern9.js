function pattern9(n) {
    for (let i = 1; i <= n; i++) {
        let space = "";
        let star = "";
        for (let j = n; j > i; j--) {
            space += " ";
        }
        for (let k = i * 2; k > 1; k--) {
            star += "*"
        }
        console.log(`${space}${star}`);
    }
    for (let i = n; i > 0; i--) {
        let space = "";
        let star = "*";
        for (let j = i; j < n; j++) {
            space += " ";
        }
        for (let k = i * 2; k > 2; k--) {
            star += "*"
        }
        console.log(`${space}${star}`);
    }
}

pattern9(5);