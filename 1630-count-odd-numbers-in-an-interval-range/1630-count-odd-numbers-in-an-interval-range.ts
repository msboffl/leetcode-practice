function countOdds(low: number, high: number): number {
    let count = 0;
    for(let i = low; i <= high; i++) {
        if((i & 1) === 1) count++;
    }

    return count;
};