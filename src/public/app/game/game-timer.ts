module GameApp{
	'use strict';
	
	export class GameTimer{
		
		game: Phaser.Game;
      
      timer: Phaser.Timer;
      timerEvent: Phaser.TimerEvent;
      timerText: Phaser.Text;
		
		constructor(game: Phaser.Game) {
			this.game = game;
		}
		
		renderTimer() {
         if(this.timer.running){
            this.timerText.text = this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000))
         }
         else{
            this.timerText.text = "Done";
         }
      }
      
      createTimer() {
         
         this.timerText = this.game.add.text(140, 20, "02:00", {
             font: "20px Arial",
             fill: "red",
             align: "center"
         });
         this.timerText.anchor.set(0.5, 0.5);
         
         this.timer = this.game.time.create();
         this.timerEvent = this.timer.add(Phaser.Timer.MINUTE * 2 + Phaser.Timer.SECOND, this.endTimer, this);
         this.timer.start();
      }
      
      endTimer(){
         this.timer.stop();
      }
      
      formatTime(s: number){
         var minutes: any = "0" + Math.floor(s / 60);
         var seconds = "0" + (s - minutes * 60);
         return minutes.substr(-2) + ":" + seconds.substr(-2); 
      }
		
	}
	
}