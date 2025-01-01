const vowels = ['a', 'e', 'i', 'o', 'u'];
let data = "sriram";
let result = "";

function removeVowels(data) {
    for (let i = 0; i < data.length; i++) {
        if (!vowels.includes(data[i])) {
            result += data[i];
        }
    }
    console.log(result);

}
removeVowels(data);

var finalValueAfterOperations = function (operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case 'X++' || '++X':
                x += 1;
            case 'X--' || '--X':
                x -= 1;
        }
    }
    console.log(x);

};

finalValueAfterOperations(["--X", "X++", "X++"]);