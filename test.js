var funs = require('./funs');

var name = "Ziad";
funs.stringOp(name);
console.log(name); // "Ziad" 100%


var nums = [5,20,32];
funs.arrOp(nums);
console.log(nums); // ??????



function add (a,b) {return a + b;}

function mult(a,b) {
  var result = 1;
  for (var i = 1; i <= b; i++) {
    result = add(a, result);
  }

  return result;
}

var product = mult(10, 20);
