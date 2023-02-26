const anagrams = (strA, strB) => {
    // 1st way of finding anagrams
    // const charMapA = buildCharacterMap(strA);
    // const charMapB = buildCharacterMap(strB);

    // if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        // return false;
    // }
    // for(let char in charMapA) {
        // if(charMapA[char] !== charMapB[char]) {
            // return false;
        // }
    // }
    // return true;
// }

// function buildCharacterMap(string) {
    // const charMap = {};
    // for(let char of string.replace(/[^\w]/g, '').toLowerCase()){
        // charMap[char] = charMap[char] + 1 || 1;
    // }
    // return charMap;

    return cleanStr(strA) === cleanStr(strB);
}

function cleanStr(str) {
    return str.replace(/[^\w]/g, ' ').toLowerCase().split('').sort().join('');
}