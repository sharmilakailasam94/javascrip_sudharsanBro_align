let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function unique(array, same) {
  check1 = array.filter(function (value) {
    return same.indexOf(value) == -1;
  });

  /* check2 = same.filter(function (value) {
    return array.indexOf(value) == -1;
  });
  check1.concat(check2); */
  return check1;
}

console.log(unique(array, [1, 2]));

// find same values

function samevalues(array, values) {
  check2 = values.filter(function (value) {
    return array.includes(value);
  });
  return [array, check2];
}

console.log(samevalues(array, [3, 2, 5, 9, 0]));
