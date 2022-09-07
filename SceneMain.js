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
        var diamond = this.physics.add.sprite(950, 600, "diamond");
        this.jDiamond = diamond;
        this.scale = 0.5;
        this.jDiamond.setScale(this.scale);
        var tween = this.tweens.add({
            targets:this.jDiamond,
            scaleX:1.3,
            scaleY:1.3,
            ease:"Power1",
            duration:1200,
            onComplete:function(){
                timeline.play();
                tween.remove();
            }
        });
        var timeline = this.tweens.createTimeline();
        timeline.add({
            targets: this.jDiamond,
            delay: 580,
            scaleX:0.3,
            scaleY:0.3,
            x: 700,
            y:200,            
            ease: 'Power1',      
            duration: 1200,
            repeat: 0,       
            yoyo: false,
            offset: '1500'
        });
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
            }, {
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
            }, {
                key: 'diamond',
                frame: '0diamondfinish.png'
            },],
            frameRate: 8,
            repeat: 0
        });

        this.jDiamond.play("Start");
    }



    update() {

    }
}

const config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 1200,
    backgroundColor: "#88F",
    parent: "game-container",
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scale: {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    },
    scene: SceneMain
};
const game = new Phaser.Game(config);