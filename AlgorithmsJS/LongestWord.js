
function findLongestWord(str) {
  var max = 0;
  var wordArray = str.split(" ");
  for (var i = 0; i < wordArray.length; i++)
    {
      if (wordArray[i].length > max)
        max = wordArray[i].length;
    }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
