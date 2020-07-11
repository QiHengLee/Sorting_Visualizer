export function getQuickSortAnimations(array) {
  const animations = [];
  const length = array.length;
  quickSort(array, 0, length - 1, animations);
  return animations;
}

function quickSort(array, low, high, animations) {
  if (low < high) {
    var pi = partition(array, low, high, animations);

    quickSort(array, low, pi - 1, animations);
    quickSort(array, pi + 1, high, animations);
  }
}

function partition(array, low, high, animations) {
  var pivot = array[high];
  var i = low - 1;
  for (var j = low; j < high; j++) {
    animations.push([j, high]);
    animations.push([j, high]);
    if (array[j] < pivot) {
      i++;
      animations.push([j, array[i]]);
      animations.push([i, array[j]]);
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    } else {
      animations.push([j, array[j]]);
      animations.push([high, array[high]]);
    }
  }
  animations.push([i + 1, high]);
  animations.push([i + 1, high]);
  animations.push([i + 1, array[high]]);
  animations.push([high, array[i + 1]]);
  temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;

  return i + 1;
}
