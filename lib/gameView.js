(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  function GameView(game, ctx) {
    this.game = new window.Asteroids.Game;
    this.ctx = ctx;
  }

  window.Asteroids.GameView = GameView;
  // var move = window.Asteroids.Game.moveObjects;
  // var draw = window.Asteroids.Game.draw;

  GameView.prototype.start = function () {
    var moveInterval = window.setInterval(this.game.moveObject(), 20);
    var drawInterval = window.setInterval(this.game.draw(this.ctx), 20);
  };










})();
