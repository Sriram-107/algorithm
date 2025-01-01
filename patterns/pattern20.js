function pattern20(n) {
    let star = "*";
    let space = " ";
    for (let i = 1; i <= n; i++) {
        let print = "";
        for (let j = 1; j <= i; j++) {
            print += star;
        }
        for (let j = 1; j <= (2 * n) - (i * 2); j++) {
            print += space;
        }
        for (let j = 1; j <= i; j++) {
            print += star;
        }
        console.log(print);
    }
    for (let i = 1; i < n; i++) {
        let print = "";
        for (j = n; j > i; j--) {
            print += star;
        }
        for (let j = 1; j <= 2 * i; j++) {
            print += space;
        }
        for (let j = n; j > i; j--) {
            print += star;
        }
        console.log(print);

    }
}
pattern20(5);