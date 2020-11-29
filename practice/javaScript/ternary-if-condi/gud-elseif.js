
var weather = 'rainy';
switch (weather) {
  case 'rainy':
    print('You need a rain coat. Its '+weather+" outside.");
    break;
  case 'cloudy':
    print('It might be cold, you need a jacket.');
    break;
  case 'sunny':
    print('Go out freely.');
    break;
  default:
    print(' No need for rain coat.');
    break;
}



var age = "";
var userName = "Narender";
 
var str = age == "child" ? "child "+userName
// : age == "mid" ? 'mid child '+userName
// : age == "young" ? 'Cool Young Boy' : 'You just in your mothers wond '+userName;

// print(str);

var str = userName == "Nilesh" || "nilesh" || "narender" || "Narender" ? "Hello My Lord " +userName+"." : "getLost I dont Know you "+userName+".";
print(str);
