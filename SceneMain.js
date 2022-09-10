class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
        this.load.spritesheet("diamondStartAnimation", "/img/bri_big_anim_start.png", { frameWidth: 393, frameHeight: 372 });
        this.load.spritesheet("diamondMiddleAnimation", "/img/bri_big_anim_middle.png", { frameWidth: 449, frameHeight: 432 });
        this.load.spritesheet("diamondFinishAnimation", "/img/bri_big_anim_finish.png", { frameWidth: 326, frameHeight: 337 });

    }

    create() {
        let image1 = this.add.sprite(1000, 600, 'diamondStartAnimation').setScale(0.3);
        let image2 = this.add.sprite(1000, 600, 'diamondMiddleAnimation').setScale(1.3);
        image2.setAlpha(0);
        let image3 = this.add.sprite(1000, 600, 'diamondFinishAnimation');
        image3.setAlpha(0);

        this.anims.create({
            key: "Start",
            frames: this.anims.generateFrameNumbers("diamondStartAnimation"),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: "Middle",
            frames: this.anims.generateFrameNumbers("diamondMiddleAnimation"),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: "Finish",
            frames: this.anims.generateFrameNumbers("diamondFinishAnimation"),
            frameRate: 8,
            repeat: -1
        });
        image1.play("Start");
        image2.play("Middle");
        image3.play("Finish");

        let timeline = this.tweens.timeline({
            ease: 'Power2',
            duration: 2000,
            tweens: [{
                targets: image1,
                scaleX: 1.5,
                scaleY: 1.5,
                onComplete: function () {
                    image1.setAlpha(0);
                    image2.setAlpha(1);
                },
                duration: 2000,
            },
            {
                targets: image2,
                onComplete: function () {
                    image2.destroy();
                    image3.setAlpha(1);
                },
                offset: 4000
            },
            {
                targets: image3,
                scaleX: 0.3,
                scaleY: 0.3,
                x: 700,
                y: 200,
                duration: 2000,
                onComplete: function () {
                    image3.anims.complete();
                },
                offset: 4000
            }]
        });
    }

    update() {
    }
}

let config = {
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

let game = new Phaser.Game(config);