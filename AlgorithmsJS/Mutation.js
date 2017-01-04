
function mutation(arr) {
  var firstArr = arr[0].toLowerCase();
  var secondArr = arr[1].toLowerCase();
  var flag = 0;
  
  for (var i = 0; i < firstArr.length; i++)
    {
      for (var j = 0; j < secondArr.length; j++)
        {
          if (firstArr.indexOf(secondArr[j]) < 0)
            flag = 1;
        }
    }
  if (flag === 1)
    return false;
  else 
    return true;
}

mutation(["hello", "hey"]);
