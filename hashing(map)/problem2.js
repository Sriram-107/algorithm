// Occurance of characters - Max and min frequency of elements in array.
function problem2(input) {
    const stringArr = input.split('');
    console.log(stringArr);
    const map = new Map();
    for (let character of stringArr) {
        if (!map.has(character)) {
            map.set(character, 1)
        } else {
            map.set(character, map.get(character) + 1);
        }
    }
    console.log(map);
    let maxFreq = 0;
    let minFreq = input.length;
    console.log(minFreq);

    for (let [key, value] of map) {
        if (value > maxFreq) {
            maxFreq = value;
        }
        if (value < minFreq) {
            minFreq = value;
        }
    }
    console.log(`Min Freq is ${minFreq}`);
    console.log(`Max Freq is ${maxFreq}`);

}

const input = 'aABbcdfhsssa';
problem2(input);