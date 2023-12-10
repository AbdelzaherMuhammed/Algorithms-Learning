let insertionSort = (x) => {
    for (let i = 1; i < x.length; i++) {
      let key = x[i];
      let j;
      for (j = i - 1; j >= 0; --j) {
        if (x[j] > key) {
          x[j + 1] = x[j];
        } else {
          break;
        }
      }
      x[j + 1] = key;
    }
    console.log(x);
  }

  insertionSort([9,6,4,1,3,8,2])