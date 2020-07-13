export function getHeapSortAnimations(array) {
  const animations = [];
  const length = array.length;
  for (var i = length / 2 - 1; i >= 0; i--) {
    heapify(array, length, i, animations);
  }

  for (var j = length - 1; j > 0; j--) {
    animations.push([0, j]);
    animations.push([0, j]);
    animations.push([0, j]);
    animations.push([0, j]);
    animations.push([0, array[j]]);
    animations.push([j, array[0]]);
    var temp = array[0];
    array[0] = array[j];
    array[j] = temp;

    heapify(array, j, 0, animations);
  }
  return animations;
}

function heapify(array, length, start, animations) {
  var largest = start;
  var l = 2 * start + 1;
  var r = 2 * start + 2;

  if (l < length) {
    animations.push([l, largest]);
    animations.push([l, largest]);
    if (array[l] > array[largest]) {
      largest = l;
    }
  } else {
    animations.push([largest, largest]);
    animations.push([largest, largest]);
  }

  if (r < length) {
    animations.push([r, largest]);
    animations.push([r, largest]);
    if (array[r] > array[largest]) {
      largest = r;
    }
  } else {
    animations.push([largest, largest]);
    animations.push([largest, largest]);
  }

  if (largest !== start) {
    animations.push([start, array[largest]]);
    animations.push([largest, array[start]]);
    var temp = array[start];
    array[start] = array[largest];
    array[largest] = temp;

    heapify(array, length, largest, animations);
  } else {
    animations.push([start, array[start]]);
    animations.push([largest, array[largest]]);
  }
}
