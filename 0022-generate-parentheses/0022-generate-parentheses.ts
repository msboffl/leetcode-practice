function generateParenthesis(n: number): string[] {
    const ans = [];

    function backtrack(path, left, right) {
        if(path.length === n * 2) {
            ans.push(path);
            return;
        }
        if(left < n) {
            backtrack(path + "(", left + 1, right);
        }

        if(right < left) {
            backtrack(path + ")", left, right + 1);
        }
    }
    
    backtrack("", 0, 0);
    return ans;
};