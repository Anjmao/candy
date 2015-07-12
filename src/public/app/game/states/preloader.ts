/// <reference path='../_references.ts' />

module GameApp.States {
   'use strict';

   export class Preloader extends Phaser.State {

      preload() {
         
         var assets = 'app/game/assets/';
         
         this.game.load.image('logo', assets+'logo.png');
         this.game.load.image('bg', assets+'Background@2x.png');
         this.game.load.spritesheet("GEMS", assets+'diamonds32x5.png', 32, 32);
         
         this.game.load.image('Croissant', assets+'Croissant@2x.png');
         this.game.load.image('Cupcake', assets+'Cupcake@2x.png');
         this.game.load.image('Danish', assets+'Danish@2x.png');
         this.game.load.image('Donut', assets+'Donut@2x.png');
         this.game.load.image('Macaroon', assets+'Macaroon@2x.png');
         this.game.load.image('SugarCookie', assets+'SugarCookie@2x.png');
         
         this.game.load.image('Tile', assets+'Tile@2x.png');
         
         this.game.load.json('level0','app/game/levels/Level_0.json');
         this.game.load.json('level1','app/game/levels/Level_1.json');
         this.game.load.json('level2','app/game/levels/Level_2.json');
         this.game.load.json('level3','app/game/levels/Level_3.json');
         this.game.load.json('level4','app/game/levels/Level_4.json');
         
      }

      create() {
         console.log('load json data',this.game.cache.getJSON('level1'));
         
         //var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
         //tween.onComplete.add(this.startMainMenu, this);
         this.game.state.start('GamePlay', true, false);
      }

   }
}