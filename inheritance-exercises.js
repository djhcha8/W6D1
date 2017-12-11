Function.prototype.inherits = function(superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
  // this.prototype.test = this.test;
};

function inherits2(subClass, supClass) {
  subClass.prototype = Object.create(supClass.prototype);
  subClass.prototype.constructor = subClass;
}


function MovingObject (name) {
  this.name = name;
}
MovingObject.prototype.test = function() {
  console.log(`i am a ${this.name}`);
};


// Ship.inherits(MovingObject);
inherits2(Ship, MovingObject);

function Ship (name) {}



// Asteroid.inherits(MovingObject);
inherits2(Asteroid, MovingObject);

function Asteroid (name, velocity) {
  this.velocity = velocity;
  MovingObject.call(this, name);
}

Asteroid.prototype.orbit = function () {
  console.log('you cannot override me!');
};


const ast = new Asteroid('cetus');
ast.orbit();
ast.test();
