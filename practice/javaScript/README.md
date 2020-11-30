##### we can also get the desired date by passing the proper date in brackets.

var DOB = new Date("January 26, 1995 04:15:00"); <br>
var birthDate = DOB.getDate(); <br>
var birthYear = DOB.getFullYear(); <br>
var weekday = new Array(7); <br>
  weekday[0] = "Sunday"; <br>
  weekday[1] = "Monday"; <br>
  weekday[2] = "Tuesday"; <br>
  weekday[3] = "Wednesday"; <br>
  weekday[4] = "Thursday"; <br>
  weekday[5] = "Friday"; <br>
  weekday[6] = "Saturday"; <br>
var birthDay = weekday[DOB.getDay()]; <br>
  
var month = new Array(); <br>
  month[0] = "January"; <br>
  month[1] = "February"; <br>
  month[2] = "March"; <br>
  month[3] = "April"; <br>
  month[4] = "May"; <br>
  month[5] = "June"; <br>
  month[6] = "July"; <br>
  month[7] = "August"; <br>
  month[8] = "September"; <br>
  month[9] = "October"; <br>
  month[10] = "November"; <br>
  month[11] = "December"; <br>
var birthMonth = month[DOB.getMonth()]; <br>
  
 
 var hours = DOB.getHours(); <br>
 var minutes = DOB.getMinutes(); <br>
 var secs = DOB.getSeconds(); <br>
  
  print(birthDate); <br>
  print(birthMonth); <br>
  print(birthYear); <br>
  print(birthDay); <br>
  print(hours + ":"); <br>
  print(minutes + ":"); <br>
  print(secs); <br>


  #### OUTPUT

26
January
1995
Thursday
4:
15:
0