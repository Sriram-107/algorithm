function pattern15(n) {
    for (let i = 1; i <= n; i++) {
        let start = 65;
        let print = "";
        for (let j = n; j >= i; j--) {
            print += String.fromCharCode(start) + " ";
            start++
        }
        console.log(print);
        print = "";

    }
}

pattern15(5);