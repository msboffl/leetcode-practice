function thirdMax(nums: number[]): number {
    let first: number | null = null;
    let second: number | null = null;
    let third: number | null = null;

    for (const num of nums) {
        if (num === first || num === second || num === third) continue;

        if (first === null || num > first) {
            third = second;
            second = first;
            first = num;
        } else if (second === null || num > second) {
            third = second;
            second = num;
        } else if (third === null || num > third) {
            third = num;
        }
    }

    return third !== null ? third : first!;
};