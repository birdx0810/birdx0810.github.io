const directions = {
  left: {
    speed: [-SPEED, 0],
    moveAnim: "moveLeft",
    idleAnim: "idleLeft",
  },
  right: {
    speed: [-SPEED, 0],
    moveAnim: "moveRight",
    idleAnim: "idleRight",
  },
  up: {
    speed: [-SPEED, 0],
    moveAnim: "moveUp",
    idleAnim: "idleUp",
  },
  down: {
    speed: [-SPEED, 0],
    moveAnim: "moveDown",
    idleAnim: "idleDown",
  },
};

export function isOneMoveKeyDown(p) {
  let isOnlyOneKeyDown = false;
  for (const key of [p.RIGHT_ARROW, p.LEFT_ARROW, p.UP_ARROW, p.DOWN_ARROW]) {
    if (!isOnlyOneKeyDown && p.keyIsDown(key)) {
      isOnlyOneKeyDown = true;
      continue;
    }

    if (isOnlyOneKeyDown && p.keyIsDown(key)) {
      return false;
    }
  }

  return true;
}

export function movement(d) {
  if (isKeyDown(d)) {
    player.move(0, SPEED);
    if (player.curAnim() !== directions[d]["moveAnim"]) {
      player.play(directions[d]["moveAnim"]);
    }
  }
  if (isKeyReleased(d) && !isKeyDown(d)) {
    player.play(directions[d]["idleAnim"]);
  }
}
