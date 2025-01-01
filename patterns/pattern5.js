function pattern5(n) {
    for (let i = 1; i <= n; i++) {
        let star = "";
        for (let j = n; j >= i; j--) {
            star += "*";
        }
        console.log(star);

    }
}

pattern5(5);