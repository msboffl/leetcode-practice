function isValid(word: string): boolean {
    if (word.length < 3) {
        return false;
    }

    let hasVowel = false;
    let hasConsonant = false;
    let hasNumber = false

    for (const c of word) {
        if (
            (c >= "a" && c <= "z") ||
            (c >= "A" && c <= "Z")
        ) {
            const lower = c.toLowerCase();
            if (
                lower === "a" ||
                lower === "e" ||
                lower === "i" ||
                lower === "o" ||
                lower === "u"
            ) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        } else if (c >= "0" && c <= "9") {
            hasNumber = true;
        } else {
            return false;
        }
    }

    return hasVowel && hasConsonant;
}
