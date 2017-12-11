function sumargs(args) {
  let sum = 0;
  arg_arr = Array.from(arguments);
  arg_arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

function restArgs(...num) {
  let sum = 0;
  num.forEach((n) => {
    sum += n;
  });
  return sum;
}


Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) => {
    this.apply(ctx, bindArgs.concat(callArgs));
  };
};


Function.prototype.myBind2 = function(ctx, bindargs){
  // let context = arguments[0];
  const that = this;
  let rest = Array.prototype.slice.call(arguments, 1);
  return function(args) {
    callArgs = Array.from(arguments);
    that.apply(ctx, rest.concat(callArgs));
  };
};

function curriedSum(numArgs){
  const numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length >= numArgs) {
      return numbers.reduce((acc, el) => acc += el, 0);
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry = function(numArgs) {

  const args = [];
  const original = this;

  return function _curry(num) {
    args.push(num);
    if (args.length >= numArgs) {
      return original.apply(args);
    } else {
      return _curry;
    }
  };
};


// until arg.length === numArgs
//  we collect argument, return intermediate function
//  arg.lenght === numArgs
//  invoke the original function with the collected arguments
// return result
