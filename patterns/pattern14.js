function pattern14(n) {
    let print = "";
    for (let i = 1; i <= n; i++) {
        let start = 65;
        for (let j = 1; j <= i; j++) {
            print += String.fromCharCode(start);
            start++;
        }
        console.log(print);
        print = "";

    }
}

pattern14(4);