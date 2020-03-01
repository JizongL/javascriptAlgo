function dynamicArray(n, queries) {
  // Write your code here
  let lastAns = 0;
  let returnArr = [];
  const seq = [];
  for (let i = 0; i < n; i++) {
    seq.push([]);
  }
  for (let query of queries) {
    if (query.length > 2) {
      let queryType = query[0];
      let x = query[1];
      let y = query[2];
      if (queryType === 1) {
        seq[(x ^ lastAns) % n].push(y);
      } else {
        let size = seq[(x ^ lastAns) % n].length;
        lastAns = seq[(x ^ lastAns) % n][y % size];
        returnArr.push(lastAns);
      }
    }
  }
  return returnArr;
}

const testArr = [
  [2, 5],
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1]
];

const ans = dynamicArray(2, testArr);
console.log(ans);
