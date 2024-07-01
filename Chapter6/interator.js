function range(start, end) {
    return {
      [Symbol.iterator]() {
        let current = start;
        return {
          next() {
            if (current <= end) {
              return { value: current++, done: false };
            } else {
              return { value: undefined, done: true };
            }
          }
        };
      }
    };
  }
  
  for (const number of range(1, 5)) {
    console.log(number); // 1, 2, 3, 4, 5
  }