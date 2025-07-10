function countOdds(low: number, high: number): number {
    let count = high - low + 1;

    if(count % 2 === 0) {
        return Math.floor(count / 2);
    }


    if(low % 2 === 1 || high % 2 === 1) {
        return Math.floor((count / 2)) + 1
    } else {
        return Math.floor(count / 2);
    }
};