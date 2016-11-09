//Write a function min that takes two arguments and returns their minimum.
var function = min(x, y){
  if(x < y);
   return x;
  else
   return y;
}

//Define a recursive function isEven corresponding to this description.
//The function should accept a number parameter and return a Boolean.
function isEven(n){
 if(n == 0)
   return true;
 else if(n == 1)
   return false;
 else
   return isEven(n - 2);
}


//Write a function countBs that takes a string as its only argument and
//returns a number that indicates how many uppercase “B” characters are in the string.
var function = countBs(string){
  var count = 0;
  for( i = 0; i < string.length; i++)
    if(string.charAt(i) == "B")
      count + 1;
    return count;
}
