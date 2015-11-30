Function.prototype.inherits = function (superClass) {
  var subClass = this;

  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;

  subClass.prototype = new Surrogate();
  subClass.prototype.constructor = subClass;
};

function Dog (name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

function Corgi (name) {
  Dog.call(this, name);
}

Corgi.inherits(Dog);

Corgi.prototype.waddle = function () {
  console.log(this.name + " waddles!");
};

var Fizzgig = new Corgi("Fizzgig");
Fizzgig.bark();
Fizzgig.waddle();
