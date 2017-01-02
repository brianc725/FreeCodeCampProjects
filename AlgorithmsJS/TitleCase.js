
function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  for (var i = 0; i < str.length; i++)
    {
      var capLet = str[i][0].toUpperCase();
      var short = str[i].substring(1);
      capLet = capLet.concat(short);
      str[i] = capLet;
    }
  str = str.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
