export function generateNumber(len: number): number {
    if (len === 1) {
        const num = Math.floor(Math.random() * 9) + 1
        return num >1 
            ? num 
            : generateNumber(1); // Random number between 1 and 9

    } else {
        const min = Math.pow(10, len - 1); // Smallest number with `len` digits
        const max = Math.pow(10, len) - 1; // Largest number with `len` digits
        return Math.floor(Math.random() * (max - min + 1)) + min; // Random number between `min` and `max`
    }
} 


export function generateGrid(rows: number, cols: number): string[][] {
    return Array.from({length: rows}, ()=>Array.from({length: cols}, ()=>''))
}