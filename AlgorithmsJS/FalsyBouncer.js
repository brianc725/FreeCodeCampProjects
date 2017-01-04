
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = [];
  for (var i = 0; i < arr.length; i++)
    {
      if ((arr[i] === false)||(arr[i] === null)||(arr[i] === 0)||(arr[i] === "")||(arr[i] === undefined)||(arr[i] !== arr[i]))
        {
          newArr = newArr;
        }
      else {
        newArr.push(arr[i]);
      }
    }
  return newArr;
}

bouncer([false, null, 0, "", 9]);
