### <ins>Helpful Codes</ins>
<details><summary> Convert Date in Proper Form </summary>

```js
var DOB = new Date("January 26, 1995 04:15:00");             
var birthDate = DOB.getDate();             
var birthYear = DOB.getFullYear();             
var weekday = new Array(7);             
  weekday[0] = "Sunday";             
  weekday[1] = "Monday";             
  weekday[2] = "Tuesday";             
  weekday[3] = "Wednesday";             
  weekday[4] = "Thursday";             
  weekday[5] = "Friday";             
  weekday[6] = "Saturday";             
var birthDay = weekday[DOB.getDay()];             
var month = new Array();             
  month[0] = "January";             
  month[1] = "February";             
  month[2] = "March";             
  month[3] = "April";             
  month[4] = "May";             
  month[5] = "June";             
  month[6] = "July";             
  month[7] = "August";             
  month[8] = "September";             
  month[9] = "October";             
  month[10] = "November";             
  month[11] = "December";             
var birthMonth = month[DOB.getMonth()];             
if(birthDate < 10){             
     birthDate = "0"+birthDate;             
 }             
 if(birthMonth < 10){             
     birthMonth = "0"+birthMonth;             
 }             
 var hours = DOB.getHours();             
 var minutes = DOB.getMinutes();             
 var secs = DOB.getSeconds();             
 if(hours < 10){             
     hours = "0"+hours;             
 }             
 if(minutes < 10){             
     minutes = "0"+minutes;             
 }             
 if(secs < 10){             
     secs = "0"+secs;             
 }             
  print(birthDate);             
  print(birthMonth);             
  print(birthYear);             
  print(birthDay);             
  print(hours + ":");             
  print(minutes + ":");             
  print(secs);             
```

  #### OUTPUT

26
January
1995
Thursday
04:15:00
</details>