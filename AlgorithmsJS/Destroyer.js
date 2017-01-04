
function destroyer(arr, val1, val2, val3) {
  // Remove all the values
  var newArr = [];
  for (var i = 0; i < arr.length; i++)
    {
       if ((arr[i] !== val1)&&(arr[i] !== val2)&&(arr[i] !== val3))
         newArr.push(arr[i]);
    }
  
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
