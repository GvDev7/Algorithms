const arrayChunking = (arr, size) => {
    const chunk = [];
    for(let element of arr) {
        const last = chunk[chunk.length - 1];
        if(!last || last.length === size) {
            chunk.push(element);
        } else {
            last.push(element);
        }
    }
    return chunk;
}