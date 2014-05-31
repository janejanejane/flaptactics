(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.force = 0;
    this.gravity = 0.6;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.player = this.add.sprite(x, y, 'player');
      this.player.animations.add('walk', [0,1,2], 6, true);
      console.log(this.player);

      this.player.animations.play('walk', 50, true);
      this.player.anchor.setTo(0.5, 0.5);
      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {
      var x, y, cx, cy, dx, dy, angle, scale;

      // x = this.input.position.x;
      // y = this.input.position.y;
      // cx = this.world.centerX;
      // cy = this.world.centerY;
      //
      // angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      // this.player.angle = angle;
      //
      // dx = x - cx;
      // dy = y - cy;
      // scale = Math.sqrt(dx * dx + dy * dy) / 100;
      //
      // this.player.scale.x = scale * 0.6;
      // this.player.scale.y = scale * 0.6;
      var accel = this.gravity + this.force;
      this.player.y += accel;
      
      if(this.force < 0){
        this.force += this.gravity;
      }else{
        this.force = 0.6;
      }
    },

    onInputDown: function () {
      // this.game.state.start('menu');
      // this.player.y = this.world.centerY;
      this.force = -5;
    }

  };

  window['flaptactics'] = window['flaptactics'] || {};
  window['flaptactics'].Game = Game;

}());
