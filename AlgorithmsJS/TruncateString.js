
function truncateString(str, num) {
  // Clear out that junk in your trunk
  
  if (str.length > num)
    {
      if (num > 3)
      {
      num = num - 3;
      str = str.substring(0, num);
      str += "...";
      }
      else
        {
        str = str.substring(0, num);
        str += "...";
        }
    }
  
  return str;
}

truncateString("A-", 1);
