export function day1part1(lines) {
  const solution = lines.map((line) => {
    const regex = /\d/g;

    let found;
    const matches = [];
    
    while (found = regex.exec(line)) {
      matches.push(found[0]);
    }

    const firstDigitStr = matches[0];
    const lastDigitStr = matches[matches.length - 1];

    return Number(firstDigitStr + lastDigitStr);
  }).reduce((total, value) => total + value, 0);

  return solution;
}

export function day1part2(lines) {
  const solution = lines.map((line) => {
    const regex = /one|two|three|four|five|six|seven|eight|nine|\d/g;
    const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let found;
    const matches = [];

    while (found = regex.exec(line)) {
      matches.push(found[0]);
      
      // Set the last index manually to account for overlapping matches 
      regex.lastIndex = found.index + 1;
    }

    const firstDigitStr = matches[0];
    const lastDigitStr = matches[matches.length - 1];

    // If we find the index in the digits array then we know the match was a
    // spelled out digit. Use the found index and increment by one to get the digit.
    const firstDigitIndex = digits.findIndex((d) => d === firstDigitStr);
    const firstDigit = firstDigitIndex !== -1 ? firstDigitIndex + 1 : Number(firstDigitStr);
    
    const lastDigitIndex = digits.findIndex((d) => d === lastDigitStr);
    const lastDigit = lastDigitIndex !== -1 ? lastDigitIndex + 1 : Number(lastDigitStr);

    return (firstDigit * 10) + lastDigit;
  }).reduce((total, value) => total + value, 0);
  
  return solution;
}