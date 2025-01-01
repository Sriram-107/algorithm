function pattern6(n) {
    for (let i = n; i > 0; i--) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += `${j}`;
        }
        console.log(result);

    }
}

pattern6(5);