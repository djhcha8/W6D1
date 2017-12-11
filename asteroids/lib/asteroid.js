const DEFAULT = {
  COLOR: 'black',
  RADIUS: 40
};


function Asteriod(options = {}) {
  this.color = DEFAULT[COLOR];
  this.radius = DEFAULT[RADIUS];
  this.vel = randomVec();
  this.pos = MovingObject.call(this, pos);
}

inherits(Asteroid, MovingObjects);
