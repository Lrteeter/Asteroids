(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  function MovingObject(pos, velocity, radius, color) {
    this.pos = pos;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color;
  }

  window.Asteroids.MovingObject = MovingObject;

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.velocity[0];
    this.pos[1] += this.velocity[1];
  };
})();
