export function getBubbleSortAnimations(array) {
  const animations = [];
  const length = array.length;
  for (var i = 0; i < length - 1; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, array[j]]);
        var temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      } else {
        animations.push([j, array[j]]);
        animations.push([j + 1, array[j + 1]]);
      }
    }
  }
  return animations;
}
