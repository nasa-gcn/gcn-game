import { Scene } from "phaser";

export class Game extends Scene {
  container!: Phaser.GameObjects.Container;
  angularRate = 0.00001;

  constructor() {
    super("Game");
  }

  preload() {
    this.load.setPath("assets");

    this.load.image("background", "bg.png");
    this.load.image("logo", "logo.png");
  }

  create() {
    let radius = 400;
    this.container = this.add
      .container(512, 512)
      .setMask(
        this.make
          .graphics()
          .fillStyle(0xffffff)
          .fillCircle(512, 512, radius)
          .createGeometryMask(),
      );

    for (let i = 0; i < 100; i++) {
      this.container.add(
        this.make.text({
          x: Phaser.Math.Between(-radius, radius),
          y: Phaser.Math.Between(-radius, radius),
          text: "⭐️",
          style: { fontSize: Phaser.Math.Between(4, 20) },
        }),
      );
    }
  }

  update(time: number, delta: number): void {
    this.container.setRotation(time * this.angularRate * 2 * Math.PI);
  }
}
