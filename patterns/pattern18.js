function pattern18(n) {
    let start = 65 + n - 1;
    for (let i = 0; i < n; i++) {
        start -= i;
        let print = "";
        for (let j = 0; j <= i; j++) {
            print += String.fromCharCode(start) + " ";
            start++;
        }
        console.log(print);
        print = "";
        start = 65 + n - 1;
    }
}
pattern18(5);