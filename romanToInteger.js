function getValue(char) {
  switch (char) {
    case "I":
      return 1;

    case "V":
      return 5;

    case "X":
      return 10;

    case "L":
      return 50;

    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;

    default:
      break;
  }
}
function romanToInteger(s) {
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    const value1 = getValue(s[i]);

    if (i + 1 < s.length) {
      const value2 = getValue(s[i + 1]);
      if (value1 >= value2) {
        value = value + value1;
      } else {
        value = value + value2 - value1;
        i++;
      }
    } else {
      value = value + value1;
    }
  }
  return value;
}

console.log(romanToInteger("LVIII"));
