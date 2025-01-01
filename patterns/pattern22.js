function pattern22(n) {
    for (let i = 0; i < 2 * n - 1; i++) {
        let print = "";
        for (let j = 0; j < 2 * n - 1; j++) {
            let top = i;
            let left = j;
            let right = (2 * n - 2) - left;
            let bottom = (2 * n - 2) - top;
            print += n - Math.min(Math.min(top, bottom), Math.min(left, right));
        }
        console.log(print);


    }
}
pattern20(4);