import kaboom from "kaboom";

const k = kaboom();

const SPEED = 160;

k.loadSprite("lucas", "sprites/lucas.png", {
	sliceX: 4,
    sliceY: 4,
	anims: {
		idleDown: {from: 0, to: 0},
		idleLeft: {from: 4, to: 4},
		idleRight: {from: 8, to: 8},
		idleUp: {from: 12, to: 12},
		moveDown: {from: 0, to: 3}, //, loop: true, speed: 1},
		moveLeft: {from: 4, to: 7}, //, loop: true, speed: 1},
		moveRight: {from: 8, to: 11}, //, loop: true, speed: 1},
		moveUp: {from: 12, to: 15}, //, loop: true, speed: 1}
	}
});

const player = k.add([
	k.pos(center()),
	k.sprite("lucas"),
])

// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
k.onKeyDown("left", () => {
	// .move() is provided by pos() component, move by pixels per second
	player.move(-SPEED, 0);
	player.play("moveLeft");
})
// k.onKeyRelease("left", () => {
// 	player.play("idleLeft");
// })

k.onKeyDown("right", () => {
	player.move(SPEED, 0);
	player.play("moveRight");
})
// k.onKeyRelease("right", () => {
// 	player.play("idleRight");
// })

k.onKeyDown("up", () => {
	player.move(0, -SPEED);
	player.play("moveUp");
})
// k.onKeyRelease("up", () => {
// 	player.play("idleUp");
// })

k.onKeyDown("down", () => {
	player.move(0, SPEED);
	player.play("moveDown");
})
// k.onKeyRelease("down", () => {
// 	player.play("idleDown");
// })
