function pattern13(n) {
    let num = 0;
    let output = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            num += 1;
            output += ` ${num}`
        }
        console.log(output);
        output = "";
    }
}
pattern13(5);