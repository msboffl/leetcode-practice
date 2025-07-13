function findNonMinOrMax(nums: number[]): number {
    nums.sort((a, b) => a - b);
    if(nums.length <= 2) {
        return -1;
    }

    return nums[1];
};