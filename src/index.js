
exports.min = function min(array) {
  if (array && array.length > 0) {
    let minimal = array[0],
      i,
      size = array.length;

    for (i = 1; i < size; i++) {
      if (array[i] < minimal) {
        minimal = array[i];
      }
    }
    return minimal;
  }
  return 0;
}

exports.max = function max(array) {
  if (array && array.length > 0) {
    let maximal = array[0],
      i,
      size = array.length;

    for (i = 1; i < size; i++) {
      if (array[i] > maximal) {
        maximal = array[i];
      }
    }
    return maximal;
  }
  return 0;
}

exports.avg = function avg(array) {
  if (array && array.length > 0) {
    let i,
      size = array.length,
      sum = 0,
      result;
    for (i = 0; i < size; i++) {
      sum += array[i];
    }
    return sum / (size);
  }
  return 0;
}
