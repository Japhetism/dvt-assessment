export const arrayChunk = (array: any, number: number) => {
    const slicedArray = array.slice();
    const chunks = [];
    while(slicedArray.length) chunks.push(slicedArray.splice(0, number));
    return chunks;
}