function pattern19(n) {
    let start = "*";
    let space = " ";
    for (let i = 1; i <= n; i++) {
        let print = "";
        for (let j = n; j >= i; j--) {
            print += "*"
        }
        for (let l = 2 * (i - 1); l > 0; l--) {
            print += space;
        }
        for (let k = n; k >= i; k--) {
            print += "*";
        }
        console.log(print);
    }
    for (let i = 1; i <= n; i++) {
        let print = "";
        for (let j = 1; j <= i; j++) {
            print += start;
        }
        for (let k = 2 * n; k > 2 * i; k--) {
            print += space;
        }

        for (let j = 1; j <= i; j++) {
            print += start;
        }
        console.log(print);

    }
}
pattern19(5);