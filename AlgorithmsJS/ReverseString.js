
function reverseString(str) {
  var strSplit = str.split('');
  var strRev = strSplit.reverse();
  var strJoin = strRev.join('');
  return strJoin;
}

reverseString("hello");