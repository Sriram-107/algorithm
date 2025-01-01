function pattern16(n) {
    let start = 65;
    for (let i = 1; i <= n; i++) {
        let print = "";
        for (let j = 1; j <= i; j++) {
            print += String.fromCharCode(start);
        }
        console.log(print);
        print = "";
        start++;
    }
}
pattern16(5);