
function rot13(str) { // LBH QVQ VG!
  var newString = "";
  for (var i = 0; i < str.length; i++)
    {
      //if number <= 77, add 13
      //if nuumber > 77, subtract 13;
      var num = 0;
      var strA = "A";
      var strZ = "Z";
      if ((str.charCodeAt(i) >= strA.charCodeAt(0))&&(str.charCodeAt(i) <=   strZ.charCodeAt(0)))
        {
          if (str.charCodeAt(i) <= 77)
            num = str.charCodeAt(i) + 13;
          else
          {
            num = str.charCodeAt(i) - 13;
          }
            newString += String.fromCharCode(num);
        }
      else
        newString += str[i];
    }
  return newString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
