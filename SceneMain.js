class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
        this.load.atlas("diamond", "/img/diamond.png", "/img/diamond.json");
    }

    create() {
        var diamond = this.add.sprite(950, 600, "diamond");
        this.jDiamond = diamond;
        this.scale = 0.5;
        this.canScale = true;

        var timeline = this.tweens.createTimeline();
        this.Timeline = timeline;
        timeline.add({
            targets: this.jDiamond,
            delay: 0,
            scaleX:0.3,
            scaleY:0.3,
            x: 700,
            y:200,            
            ease: 'Power1',      
            duration: 1200,
            repeat: 0,       
            yoyo: false
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
                frame: '13diamondfinish.png'
            },],
            frameRate: 8,
            repeat: 0
        });

        this.jDiamond.play("Start");
    }

    update() {
        if (this.jDiamond.frame.name === "8diamondmidle.png") {
            this.Timeline.play();
        }
        if (this.scale < 1.3 && this.canScale) {
            if(this.jDiamond.frame.name === '5diamondmidle.png'){
                this.canScale = false;
            }
            this.jDiamond.setScale(this.scale);
            this.scale += 0.014;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 1200,
    backgroundColor: "#88F",
    parent: "game-container",
    scale: {
        "mode": Phaser.Scale.FIT,
        "autoCenter": Phaser.Scale.CENTER_BOTH
    },
    scene: SceneMain
};

const game = new Phaser.Game(config);