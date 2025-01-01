function pattern21(n) {
    for (let i = 1; i <= n; i++) {
        let start = "*";
        let space = " ";
        let print = "";
        for (let j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n) {
                print += start;
            }
            else {
                print += space;
            }
        }
        console.log(print);
        print = "";

    }
}

pattern21(4);