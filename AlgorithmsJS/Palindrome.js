
function palindrome(str) {
  var strLower = str.toLowerCase();
  var strNoSymb = strLower.replace(/[^a-zA-Z0-9]/g, "");
  var revStr = strNoSymb.split('').reverse().join('');
  return (revStr == strNoSymb);
}



palindrome("1 eye for of 1 eye.");
