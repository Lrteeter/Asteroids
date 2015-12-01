(function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;

  var COLOR = 'red';
  var RADIUS = 100;

  var Asteroid = Asteroids.Asteroid  =function Asteroid(options) {
    this.pos = options.pos;
    this.color = COLOR;
    this.radius = RADIUS;
    this.velocity = Asteroids.Util.randomVec(5);
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
  // var asteroid = window.Asteroids.Asteroid = {};
  // var asteroid = Asteroids.Util.inherits(Asteroid, MovingObject);
})();
