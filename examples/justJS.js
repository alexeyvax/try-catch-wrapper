import errorHandler from 'try-catch-wrapper';

const errMsg = {
  show: true,
  message: 'The num bigger than expected!',
};

function fibonacci(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;
  if (num >= 100) throw new Error('Oops!');

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

fibonacciWrapper = errorHandler(errMsg)(fibonacci);

console.log(fibonacciWrapper(10)); // 89
console.log(fibonacciWrapper(100)); // The num bigger than expected!
