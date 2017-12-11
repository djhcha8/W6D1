const Util = {
  inherits(subClass, supClass) {
    subClass.prototype = Object.create(supClass.prototype);
    subClass.prototype.constructor = subClass;
  }

};

module.exports = Util;
