function pattern2(n) {
    for (let i = 0; i < n; i++) {
        let star = "";
        for (let j = 0; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }
}
pattern2(5);