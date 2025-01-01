function pattern2(n) {
    for (let i = 1; i <= n; i++) {
        let result = '';
        for (let j = 1; j <= i; j++) {
            result += String(j);
        }
        console.log(result);

    }
}

pattern2(5);