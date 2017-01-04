
function repeatStringNumTimes(str, num) {
  var newString = "";
  if (num < 1)
    return "";
  else
    {
      for (var i = 0; i < num; i++)
        {
          newString += str;
        }
    }
  
  return newString;
}

repeatStringNumTimes("abc", 3);
