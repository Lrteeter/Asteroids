(function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }
  var Util = window.Asteroids.Util = {};

  Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomVec = function(length) {
    var dx = (Math.random() * length) - (length/2);
    var dy = (Math.random() * length) - (length/2);
    return [dx,dy];
  };
})();
