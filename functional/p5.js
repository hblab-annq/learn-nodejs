var slice = Array.prototype.slice;

function logger(namespace) {
  // SOLUTION GOES HERE
  var arr = [];

  arr.push(namespace);
  return function (...arr2) {
    arr.push(...arr2);
    console.log(...arr);
  };
}

module.exports = logger;
