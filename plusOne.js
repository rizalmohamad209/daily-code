const plusOne = (arr) => {
  const arrResult = [];
  for (let item = 0; item < arr.length; item++) {
    if (arr?.[item] !== 9) {
      arrResult.push(arr[item]);
    } else if (arr[item] === 0) {
      arrResult.push(1, 0);
    } else {
    }
    return arrResult;
  }
};

console.log(plusOne([9, 9]));
