/**
 *
 * @param {[]} a
 */
function longestCommonPerfix(arrString) {
  let size = arrString.length;

  if (size == 0) return "";

  if (size == 1) return arrString[0];

  arrString.sort();

  let end = Math.min(arrString[0].length, arrString[size - 1].length);

  let i = 0;
  while (i < end && arrString[0][i] == arrString[size - 1][i]) i++;

  let pre = arrString[0].substring(0, i);
  return pre;
}
