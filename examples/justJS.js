import errorHandler from 'try-catch-wrapper';

const errMsg = {
  show: true,
  type: 'warning',
  message: 'The num bigger than expected!',
};

function fibonacci(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;
  if (num >= 100) throw new Error('Oops!');

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

fibonacci = errorHandler({
  func: fibonacci,
  errorMessage: errMsg,
});

console.log(fibonacci(10)); // 89
console.log(fibonacci(100)); // The num bigger than expected!
