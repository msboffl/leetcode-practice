function findLucky(arr: number[]): number {
    let freqMap = new Map<number, number>();
    for(let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let matched: number[] = [];
    for(let [key, value] of freqMap) {
        if(key === value) matched.push(key);
    }

    let max = matched.length > 0 ? Math.max(...matched) : -1

    return max;
};