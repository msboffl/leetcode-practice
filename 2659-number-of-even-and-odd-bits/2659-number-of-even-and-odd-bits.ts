function evenOddBit(n: number): number[] {
    const binary = n.toString(2);
    let even = 0;
    let odd = 0;
    let index = 0;

    for(let i = binary.length-1; i >= 0; i--) {
        if(index % 2 === 0 && binary[i] === '1') {
            even++;
        }

        if(index % 2 === 1 && binary[i] === '1') {
            odd++;
        }

        index++;
    }

    return [even, odd];
};