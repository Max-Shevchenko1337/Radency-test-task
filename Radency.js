function loadGrain(levels) {
  let countGrain = 0;
  let length = levels.length;

  if (length < 3) return 0;
  let level = levels[0];
  let index = 0;
  let score = 0;

  for (let i = 0; i < length; i++) {
    if (i === length - 1 && level > levels[i]) {
      i = index;
      level = levels[index] - 1;
      levels[index]--;
      score = 0;
    }
    if (level > levels[i]) {
      score += level - levels[i];
    } else {
      level = levels[i];
      index = i;
      countGrain += score;
      score = 0;
    }
  }

  return countGrain;
}
console.log(loadGrain([4, 1, 3])); // 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); // 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
console.log(loadGrain([2, 4, 2])); // 0
console.log(loadGrain([7, 4])); // 0
console.log(loadGrain([])); // 0
