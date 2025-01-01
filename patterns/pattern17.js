function pattern17(n) {
    for (let i = 0; i < n; i++) {
        let start = 65;
        let print = "";
        for (let j = n; j > i; j--) {
            print += " ";
        }
        let breakpoint = (2 * i + 1) / 2;
        for (let k = 1; k <= 2 * i + 1; k++) {
            print += String.fromCharCode(start);
            k <= breakpoint ? start++ : start--;
        }
        console.log(print);
        print = "";


    }
}

pattern17(4);