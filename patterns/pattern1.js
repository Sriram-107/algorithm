function pattern1(n) {
    for (let i = 0; i < n; i++) {
        let star = ""
        for (let j = 0; j < n; j++) {
            star += "*";
        }
        console.log(`${star}`);
    }
}

pattern1(5)