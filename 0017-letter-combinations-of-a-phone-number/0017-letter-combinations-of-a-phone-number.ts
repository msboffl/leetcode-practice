function letterCombinations(digits: string): string[] {
    if(digits.length === 0) return [];

    let map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    const ans = [];
    function backtrack(index, path) {
        if(path.length === digits.length) {
            ans.push(path);
            return;
        }

        let letters = map[digits[index]];
        for(let letter of letters) {
            backtrack(index+1, path + letter);
        }
    }

    backtrack(0, "");
    return ans;
};