function pattern4(n) {
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += String(i);
        }
        console.log(result);
    }
}

pattern4(5);