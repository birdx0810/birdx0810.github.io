import kaboom from "kaboom";

const k = kaboom({ font: "monospace" });

const SPEED = 120;

k.loadSprite("lucas", "sprites/wally.png", {
  sliceX: 4,
  sliceY: 4,
  anims: {
    idleDown: 0,
    idleLeft: 4,
    idleRight: 8,
    idleUp: 12,
    moveDown: { from: 0, to: 3, speed: 8, loop: true },
    moveLeft: { from: 4, to: 7, speed: 8, loop: true },
    moveRight: { from: 8, to: 11, speed: 8, loop: true },
    moveUp: { from: 12, to: 15, speed: 8, loop: true },
  },
});

const player = k.add([k.pos(center()), k.sprite("lucas")]);

k.onUpdate(() => {
  if (
    isKeyDown("left") &&
    !isKeyDown("right") &&
    !isKeyDown("up") &&
    !isKeyDown("down")
  ) {
    player.move(-SPEED, 0);
    if (player.curAnim() !== "moveLeft") {
      player.play("moveLeft");
    }
  }
  if (isKeyReleased("left") && !isKeyDown("left")) {
    player.play("idleLeft");
  }

  if (
    isKeyDown("right") &&
    !isKeyDown("left") &&
    !isKeyDown("up") &&
    !isKeyDown("down")
  ) {
    player.move(SPEED, 0);
    if (player.curAnim() !== "moveRight") {
      player.play("moveRight");
    }
  }
  if (isKeyReleased("right") && !isKeyDown("right")) {
    player.play("idleRight");
  }

  if (
    isKeyDown("up") &&
    !isKeyDown("left") &&
    !isKeyDown("right") &&
    !isKeyDown("down")
  ) {
    player.move(0, -SPEED);
    if (player.curAnim() !== "moveUp") {
      player.play("moveUp");
    }
  }
  if (isKeyReleased("up") && !isKeyDown("up")) {
    player.play("idleUp");
  }

  if (
    isKeyDown("down") &&
    !isKeyDown("left") &&
    !isKeyDown("right") &&
    !isKeyDown("up")
  ) {
    player.move(0, SPEED);
    if (player.curAnim() !== "moveDown") {
      player.play("moveDown");
    }
  }
  if (isKeyReleased("down") && !isKeyDown("down")) {
    player.play("idleDown");
  }
});

const getInfo = () =>
  `Anim:  ${player.curAnim()}\nFrame: ${player.frame}\n`.trim();

const label = k.add([text(getInfo, { size: 12 }), color(0, 0, 0), pos(4)]);

label.onUpdate(() => {
  label.text = getInfo();
});
