function stringOp(str) {
  str[0] = 'x';
}

function arrOp(arr) {
  arr[0] = 'x';
}

module.exports = {
  stringOp: stringOp,
  arrOp: arrOp
}
