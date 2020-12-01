var str = "123";
// Adding { + } in front of string number will conver it to number if the inside string are numbers else outpu will be NaN
var strToNum = +str;
print(typeof strToNum);  // Number


var num = 2;
// Adding { +"" } after a number will convert number to a string
var numToString = num + "";
print(typeof  numToString);  // String
