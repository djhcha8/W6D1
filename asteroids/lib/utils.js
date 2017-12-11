const Util = {
  inherits(subClass, supClass) {
    subClass.prototype = Object.create(supClass.prototype);
    subClass.prototype.constructor = subClass;
  }

  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;
