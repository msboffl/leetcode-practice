function combinationSum(candidates: number[], target: number): number[][] {
    const ans: number[][] = [];

    function backtrack(start, path, sum) {
        if(sum === target) {
            ans.push([...path]);
            return;
        }

        if(sum > target) {
            return;
        }

        for(let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(i, path, sum + candidates[i]);
            path.pop();
        }
    }

    backtrack(0, [], 0)
    return ans;
};