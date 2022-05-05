let arr = [8, 3, 4, 1, 9, 0, 3, 2, 8];
const sorted_asc = arr.sort(function (a, b) {
  return a - b;
});
console.log("----------------");
console.log("Sorted ascending array is :", sorted_asc); // sort ascending
console.log("----------------");

const sorted_dsc = arr.sort(function (a, b) {
  return b - a;
});
console.log("----------------");

console.log("the sorted descending array is:", sorted_dsc); // sort Descending order
console.log("----------------");

let d = [1, 2, 3, 4, 5, 2, 1, 4, 5];
let n = d.length;
let res = [];
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (d[i] == d[j]) {
      res.push(d[j]);
    }
  }
}
console.log("----------------");
console.log("The duplicate values in the same array is:", res);
console.log("----------------");
