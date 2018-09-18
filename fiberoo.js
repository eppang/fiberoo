function fib() {
  const fibList = [0,1];
  for (let i = 2; i < 100; i++) {
    fibList.push(fibList(i - 1) + fibList[i - 2]);
  }
  return fibList;
}
console.log(fib());

function numsToStrings(numbers) {
  return _.map(numbers, num => `${num}`);
}

console.log(numsToStrings(fib()));

function numEvenNums(nums) {
  return _.filter(nums, num => ((num % 2) === 0)).length;
}

console.log(numEvenNums(fib()));
