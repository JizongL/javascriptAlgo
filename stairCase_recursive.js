// Recursive Staircase Problem study note

// typical way, relied on fibonacci principle, because each new step resulted in sum of previous two steps
// pros, save space
// cons, have too many repeated computation
const num_ways_res = n => {
  if (n === 0 || n === 1) return 1;
  else return num_ways_res(n - 1) + num_ways_res(n - 2);
};

// dynamic approach
// relied on same fibonacci principle
// pros, save time
// cons, consume more space with memoization
const numOfWays = (n, steps) => {
  if (n === 0) return 1;
  const nums = new Array(n + 1);
  nums[0] = 1;
  for (let i = 1; i <= n; i++) {
    let total = 0;
    for (item of steps) {
      // validate current staircase allow current step to be taken. e.g. can't take 3 steps out of only 2 staircases
      if (i - item >= 0) {
        // total is memorized, avoid redundant computation
        total += nums[i - item];
      }
    }
    nums[i] = total;
  }
  return nums[n];
};

// typical recursive solution, given: 5 staircase, rule: taking 1 or 2
const result_res = num_ways_res(5);
console.log(result_res);

// dynamic approach, given: 5 staircase, rule: take steps 1 or 3 or 5.
const result = numOfWays(5, [1, 3, 5]);
console.log(result);
