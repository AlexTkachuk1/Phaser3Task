window.addEventListener('load', function () {
    var game = new Phaser.Game({
        "title": "Daimond",
        "width": 2000,
        "height": 1200,
        "type": Phaser.AUTO,
        "backgroundColor": "#88F",
        "parent": "game-container",
        "scale": {
            "mode": Phaser.Scale.FIT,
            "autoCenter": Phaser.Scale.CENTER_BOTH
        }
    });
    game.scene.add("SceneMain", SceneMain, true);
});
class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
        this.load.atlas("diamond", "/img/diamond.png", "/img/diamond.json");
    }

// Я принял решение сделать одну большую анимацие вместо трех раздельных, по той причине, что бриллиант не является
// игровым персонажем , соответственно создавать анимации для разных состояний и переключаться между состояниями 
// в данном случае черезмерно.

    create() {

        var diamond = this.add.sprite(950, 600, "diamond");
        this.jDiamond = diamond;
        this.canScale = true;
        this.canMove = false;
        this.scale = 0.5;
        this.finishAnimation = false;
        this.anims.create({
            key: 'Start',
            frames: [{
                key: 'diamond',
                frame: '1diamondstart.png'
            }, {
                key: 'diamond',
                frame: '2diamondstart.png'
            }, {
                key: 'diamond',
                frame: '3diamondstart.png'
            }, {
                key: 'diamond',
                frame: '4diamondstart.png'
            },{
                key: 'diamond',
                frame: '1diamondstart.png'
            }, {
                key: 'diamond',
                frame: '2diamondstart.png'
            }, {
                key: 'diamond',
                frame: '3diamondstart.png'
            }, {
                key: 'diamond',
                frame: '4diamondstart.png'
            }, {
                key: 'diamond',
                frame: '5diamondmidle.png'
            }, {
                key: 'diamond',
                frame: '6diamondmidle.png'
            }, {
                key: 'diamond',
                frame: '7diamondmidle.png'
            }, {
                key: 'diamond',
                frame: '5diamondmidle.png'
            }, {
                key: 'diamond',
                frame: '6diamondmidle.png'
            }, {
                key: 'diamond',
                frame: '7diamondmidle.png'
            }, {
                key: 'diamond',
                frame: '8diamondmidle.png'
            }, {
                key: 'diamond',
                frame: '9diamondfinish.png'
            }, {
                key: 'diamond',
                frame: '10diamondfinish.png'
            }, {
                key: 'diamond',
                frame: '11diamondfinish.png'
            }, {
                key: 'diamond',
                frame: '12diamondfinish.png'
            }, {
                key: 'diamond',
                frame: '9diamondfinish.png'
            }, {
                key: 'diamond',
                frame: '10diamondfinish.png'
            }, {
                key: 'diamond',
                frame: '11diamondfinish.png'
            }, {
                key: 'diamond',
                frame: '12diamondfinish.png'
            },{
                key: 'diamond',
                frame: '0diamondfinish.png'
            },],
            frameRate: 10,
            repeat: 0
        });

        this.jDiamond.play("Start");
    }



    update() {
        if(this.jDiamond.frame.name === "8diamondmidle.png"){
            this.canMove = true;
        }
        if (this.scale < 1.3 && this.canScale) {
            this.jDiamond.setScale(this.scale);
            this.scale += 0.014;
        }
        if (this.canMove &&
        this.scale > 0.4 && 
        this.jDiamond.y > 200) {
            this.canScale = false;
            this.jDiamond.y -= 9;
            this.jDiamond.x -= 5;
            this.jDiamond.setScale(this.scale);
            this.scale -= 0.017;
        }
    }
}