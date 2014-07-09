(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.spritesheet('player', 'assets/bird.png', 34, 96/4, 4);
      this.load.image('pipe', 'assets/pipe.png');
      this.load.image('pipeup', 'assets/pipe-down.png');
      this.load.image('pipedown', 'assets/pipe-up.png');
      this.load.image('land', 'assets/land.png');
      this.load.image('sky', 'assets/sky.png');
      this.load.image('scoreboard', 'assets/scoreboard.png');
      this.load.image('replay', 'assets/replay.png');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['flaptactics'] = window['flaptactics'] || {};
  window['flaptactics'].Preloader = Preloader;

}());
