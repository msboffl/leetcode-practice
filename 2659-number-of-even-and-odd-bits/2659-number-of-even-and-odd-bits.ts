function evenOddBit(n: number): number[] {
    const binary = n.toString(2);

    let even = 0;
    let odd = 0;

    binary.split('').reverse().forEach((bit, index) => {
        if(bit === '1') {
            if(index % 2 === 1) {
                odd++
            } else {
                even++
            }
        }
    })

    return [even, odd];

};