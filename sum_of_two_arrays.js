const a = [1, 2, 3, 4, 5];
const b = [3, 5, 2, 1];
let c = [];
/*
function sumArray(a, b) {
  for (i = 0; i < Math.max(a.length, b.length); i++) {
    c.push((a[i] || 0) + (b[i] || 0));
  }
  return c;
}
console.log(sumArray(a, b));
 */

for (i = 0; i < Math.max(a.length, b.length); i++) {
  c[i] = (a[i] || 0) + (b[i] || 0);
}

console.log(c);
