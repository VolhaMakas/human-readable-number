module.exports = function toReadable (number) {
    let result = ''
    const numbers = {
        0 : "zero",
        1 : "one",
        2 : "two",
        3 : "three",
        4 : "four",
        5 : "five",
        6 : "six",
        7 : "seven",
        8 : "eight",
        9 : "nine",
        10 : "ten",
        11 : "eleven",
        12 : "twelve",
        13 : "thirteen",
        14 : "fourteen",
        15 : "fifteen",
        16 : "sixteen",
        17 : "seventeen",
        18 : "eighteen",
        19 : "nineteen",
  
    }
    const decimals = {
        2 :"twenty",
        3 : "thirty",
        4 : "forty",
        5 : "fifty", 
        6 : "sixty", 
        7 : "seventy", 
        8 : "eighty", 
        9 : "ninety",
    }
    
    if (number === 0) {
        return numbers[number]
    }
    const hundreds = Math.floor(number / 100); 
    if (hundreds) {
        result += numbers[hundreds] + ' hundred'
    }
    const decimal = number - (hundreds * 100);
    if (decimal <= 19) {
        if (decimal !== 0) {
            result += (hundreds > 0 ? " " : "") + numbers[decimal]
        } 
        
    } else {
        const x = Math.floor(decimal / 10);
        result += (hundreds > 0 ? " " : "") + decimals[x]
        const y = number - hundreds * 100 - x * 10;
        if (y) {
            result += " " + numbers[y]
        }
    }
  
    return result
}
