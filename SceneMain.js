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
        this.jDiamond = this.physics.add.sprite(950, 600, "diamond");
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
            frameRate: 10,
            repeat: 0
        });

        this.jDiamond.play("Start");
    }



    update() {
        if (this.jDiamond.frame.name === "8diamondmidle.png") {
            this.canMove = true;
        }
        if (this.scale < 1.3 && this.canScale) {
            this.jDiamond.setScale(this.scale);
            this.scale += 0.014;
        }
        if (this.canMove &&
            this.scale > 0.4) {
            this.canScale = false;
            this.physics.moveTo(this.jDiamond, this.jDiamond.x-100, this.jDiamond.y-200, 500);
            this.jDiamond.setScale(this.scale);
            this.scale -= 0.017;
        }
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
            debug: true,
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