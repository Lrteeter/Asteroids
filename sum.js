function sum() {
  var totalSum = 0;
  for (var i = 0; i < arguments.length; i++) {
    totalSum += arguments[i];
  }
  return totalSum;
}

var total = sum(1, 2, 3, 4);
console.log(total);
