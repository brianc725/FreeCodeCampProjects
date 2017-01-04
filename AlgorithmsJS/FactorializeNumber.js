
function factorialize(num) {
  var mult = num;
  if (num === 0)
    mult = 1;
  for (var i = num-1; i > 0; i--)
    mult *= i;
  return mult;
}

factorialize(0);
