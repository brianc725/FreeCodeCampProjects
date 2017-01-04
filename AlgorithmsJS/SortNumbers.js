
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
  return a - b;
  });
  
  for (var i = 0; i < arr.length; i++)
    {
      if (arr[arr.length-1] < num)
        {
          var number = arr.length;
          return number;
        }
      if ((arr[i] > num)||(arr[i] === num))
        return i;  
    }
}

getIndexToIns([2,5,10], 15);
