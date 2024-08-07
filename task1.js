function range(start, end, step = 1) {
  let current = start;
  return {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
            return { done: true };
          } else {
            let result = { value: current, done: false };
            current += step;
            return result;
          }
        },
      };
    },
  };
}

for (let num of range(10, 1, -2)) {
  console.log(num);
}

function* range(start, end, step = 1) {
  for (
    let i = start;
    (step > 0 && i < end) || (step < 0 && i > end);
    i += step
  ) {
    yield i;
  }
}

// Example usage with 'for' loop
for (let num of range(1, 10, 2)) {
  console.log(num);
}
