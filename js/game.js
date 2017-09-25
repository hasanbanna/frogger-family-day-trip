var game = new Phaser.Game(512, 600, Phaser.AUTO, document.getElementById('game'));
var Game = {
    preload: function () {},
    create: function () {
        var style = {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        text = this.add.text(0, 0, "Frogger's Family Day Trip", style);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text.setTextBounds(0, 100, 512, 100);

        // button to play

        button = game.add.button(game.world.centerX - 95, 400, 'button',
            function () {
                game.state.start('Play');
            }, this, 2, 1, 0);

    },
    update: function () {
    }
};

var Play = {
    preload: function(){},
    create: function(){
        var style = {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        var text = this.add.text(0, 0, "Play Screen!", style);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
        text.setTextBounds(0, 100, 512, 100);

    },
    update: function(){}
}

game.state.add('Game', Game);
game.state.add('Play', Play);
game.state.start('Game');