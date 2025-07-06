function generateParenthesis(n: number): string[] {
    const res: string[] = [];

    function backtrack(open, close, path) {
        if(path.length === n * 2) {
            res.push(path);
            return;
        }

        if(open < n) {
            backtrack(open+1, close, path + "(")
        } 

        if(close < open) {
            backtrack(open, close+1, path + ")")
        }
    }

    backtrack(0, 0, "");

    return res;
};