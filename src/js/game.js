(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.force = 0;
    this.gravity = 0.6;
    this.accel = 0;
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
      this.input.onHold.add(this.onInputDown, this);
      this.input.onTap.add(function(){
        console.log('On tap');
      }, this);
      this.input.onDown.add(function(){
        console.log('On down');
      }, this);
      console.log(this.input);
      this.input.onUp.add(this.onInputUp, this);
    },

    update: function () {
      this.force += this.gravity;
      if(this.force >= 5){//terminal velocity
        this.force = 5;
      }

      this.accel = this.force;
      var angle = Math.atan2((this.player.y + this.accel) - this.player.y, this.player.x - (this.player.x-10)) * (180/Math.PI);
      this.player.angle = angle;

      this.player.y += this.accel;
    },

    onInputUp: function(){
      this.force = -10;
      console.log('end');
    },

    onInputDown: function () {
      // this.game.state.start('menu');
      // this.player.y = this.world.centerY;
      // this.force = -10;
      console.log('start');
    }

  };

  window['flaptactics'] = window['flaptactics'] || {};
  window['flaptactics'].Game = Game;

}());
