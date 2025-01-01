function pattern11(n) {
    for (let i = 1; i <= n; i++) {
        let start = i % 2 === 0 ? 0 : 1;
        let output = ""
        for (let j = 1; j <= i; j++) {
            output += start.toString();
            start = Number(!start);
        }
        console.log(`${output}`);

    }
}

pattern11(5);