const pattern12 = (n) => {
    for (let i = 1; i <= n; i++) {
        let firstNum = "";
        let lastNum = "";
        let space = "";
        let lastnumValue = i;
        for (let j = 1; j <= i; j++) {
            firstNum += j;
        }
        // sapce
        for (let j = i + 1; j <= 2 * n - i; j++) {
            space += " "
        }
        //number
        for (let j = i; j >= 1; j--) {
            lastNum += j;
        }
        console.log(`${firstNum}${space}${lastNum}`);

    }
}

pattern12(4);