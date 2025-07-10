function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";
  const res = Array(num1.length + num2.length).fill(0);

  const n1 = num1.split("").reverse();
  const n2 = num2.split("").reverse();

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      let digit1 = n1[i].charCodeAt(0) - "0".charCodeAt(0);
      let digit2 = n2[j].charCodeAt(0) - "0".charCodeAt(0);

      res[i + j] += digit1 * digit2;

      if (res[i + j] >= 10) {
        res[i + j + 1] += Math.floor(res[i + j] / 10);
        res[i + j] %= 10;
      }
    }
  }

  while (res.length > 1 && res[res.length - 1] === 0) {
    res.pop();
  }

  return res.reverse().join("");
};