const dailyTemparature = (temparatures) => {
  let stack = [];
  let result = [];
  for (let i = temparatures.length - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temparatures[i] >= temparatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    if (stack.length === 0) {
      result[i] = 0;
    } else {
      result[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }

  return result;
};

dailyTemparature([73, 74, 75, 71, 69, 72, 76, 73]);
