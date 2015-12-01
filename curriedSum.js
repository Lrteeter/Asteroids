var curriedSum = function (numArgs) {
  var numbers = [];
  var _curriedSum = function (num) {
    numbers.push(num);
    var sum = 0;
    if (numbers.length === numArgs) {
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

// var getFirstArg = curriedSum(3);
// var getSecondArg = getFirstArg(1);
// var getThirdArgAndSum = getSecondArg(2);
// console.log(getThirdArgAndSum(3))
var sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  var fn = this;
  var userArguments = [];
  var _curriedSum = function (arg) {
    userArguments.push(arg);
    if (userArguments.length === numArgs) {
      return fn.apply(null, userArguments);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

function simple(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

var printing = simple.curry(4);
printing(4)(3)(8)(9);
