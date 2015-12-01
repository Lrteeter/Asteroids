(function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var DIM_X = 1254;
  var DIM_Y = 930;
  var NUM_ASTEROIDS = 1;

  var Asteroids = window.Asteroids;

  var Game = Asteroids.Game = function () {
    this.dim_x = DIM_X;
    this.dim_y = DIM_Y;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function() {
    this.asteroids.push(new Asteroids.Asteroid({pos: [100,100]}));
  };

  // Do we need an instance of game?


  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.dim_x, Game.dim_y);
    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });
  };


})();
