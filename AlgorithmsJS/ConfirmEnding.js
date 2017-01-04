
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var index = str.indexOf(target);
  var last = str.length;
  var short = str.substring(index, last);
  if (target === short)
    return true;
  else
    return false;

}

confirmEnding("Connor", "n");
