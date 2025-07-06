function permute(nums: number[]): number[][] {
    const res = [];

    function backtrack(path, used) {
        if(path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue;
            path.push(nums[i]);
            used[i] = true;

            backtrack(path, used);

            path.pop();
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false))
    return res;
};