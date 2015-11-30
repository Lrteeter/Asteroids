Function.prototype.myBind = function(obj) {
  var fn = this;
  var bindArguments = Array.prototype.slice.call(arguments);
  bindArguments = bindArguments.slice(1, bindArguments.length);
  return function () {
    var callArguments = Array.prototype.slice.call(arguments);
    return fn.apply(obj, bindArguments.concat(callArguments));
  };
};

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!
