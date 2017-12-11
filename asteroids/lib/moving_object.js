document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById('canvas');
  const ctx = canvasEl.getContext('2d');


  function MovingObject (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2* Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };


  const newcirc = new MovingObject({pos: [100, 100], vel: [5, 5], radius: 25, color: 'black'});
  newcirc.draw(ctx);

  const animate = () => {
    newcirc.move();
    newcirc.draw(ctx);
    requestAnimationFrame(animate);
  };
  // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  requestAnimationFrame(animate);
});
