function pattern8(n) {
    for (let i = n; i > 0; i--) {
        let space = "";
        let star = "";
        for (let j = n; j >= i; j--) {
            space += " ";
        }
        for (let k = i * 2; k > 1; k--) {
            star += "*"
        }
        console.log(`${space}${star}`);
    }
}

pattern8(5);