const capitalization = (str) => {
    const words = [];
    for(let word of str.split(' ')) {
        word[0].toUpperCase() + word.slice(1);
    }
    return words.join(' ');
    /**
     let result = str[0].toUpperCase();
     for(let i = 0; i < str.length; i++){
        if(str[i -1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
     }
     return result;
     * 
     */
}