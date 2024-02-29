/**
 *
 * @param {number} x
 */
function palindromeNumber(x) {
  const stringValue = x?.toString();
  const arrValue = [];

  for (let i = 0; i < stringValue.length; i++) {
    arrValue.push(stringValue?.charAt(i));
  }
  const value1 = arrValue.reverse().join("");
  return x === parseInt(value1);

  //   const convertToArrayValue = value.split("");
  //   console.log(convertToArrayValue);
}
const value = 121;
console.log(palindromeNumber(value));
