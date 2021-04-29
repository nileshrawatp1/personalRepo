Table of Contents
=================

   * [Table of Contents](#table-of-contents)  
         * [<ins>Adding DATE/Time To the DATE</ins>](#adding-datetime-to-the-date)  
         * [<ins>GET Date in Month and Weekday Name</ins>](#get-date-in-month-and-weekday-name)  
         * [<ins>Get Difference Between Two Times</ins>](#get-difference-between-two-times)  
         * [<ins>Get Local Time<ins></ins></ins>](#get-local-time)  
         * [<ins>Set Time Format<ins></ins></ins>](#set-time-format)  
### <ins>Adding DATE/Time To the DATE</ins>
```js
// ##################################### Added 5 years to current date #####################################
 var nowDate = new Date();
 var yearAdded = new Date(nowDate.setYear(nowDate.getFullYear()+4));

 print("Added 4 years ==>> "+yearAdded);

// ##################################### Added 8 months to current date #####################################
 var currentDate = new Date();
 var date = new Date(currentDate.setMonth(currentDate.getMonth()+8));

 print("Added 8 Months ==>> "+date);

// ##################################### Added 7 days to current date #####################################
 var myFutureDate=new Date();
 myFutureDate.setDate(myFutureDate.getDate() + 7);

 print("Added 7 days ==>> "+myFutureDate);

// ##################################### Added 2 hours to current time #####################################
 var dt = new Date();
 dt.setHours( dt.getHours() + 2 );

 print("Added 2 Hours ==>> "+dt);
     
// ##################################### Added 5 Minutes to current Time #####################################
 var today = new Date();
 var minutesToAdd = 5;
 var addedMinutes = new Date(today.setMinutes(today.getMinutes() + 5));
          
 print("Added 5 Minutes ==>> "+addedMinutes);
             
// ##################################### Added 30 seconds to current time #####################################
 var tdayTime = new Date();
 var addedSeconds = new Date(tdayTime.setSeconds(tdayTime.getSeconds() + 30));
                 
 print("Added 30 Seconds ==>> "+addedSeconds);
```
___
> <ins>Output</ins>
> 
> Added 4 years ==>> Fri Apr 25 2025 05:56:09 GMT-0000 (GMT)  
> Added 8 Months ==>> Sat Dec 25 2021 05:56:09 GMT-0000 (GMT)  
> Added 7 days ==>> Sun May 02 2021 05:56:09 GMT-0000 (GMT)  
> Added 2 Hours ==>> Sun Apr 25 2021 07:56:09 GMT-0000 (GMT)  
> Added 5 Minutes ==>> Sun Apr 25 2021 06:01:09 GMT-0000 (GMT)  
> Added 30 Seconds ==>> Sun Apr 25 2021 05:56:39 GMT-0000 (GMT)  
___
### <ins>GET Date in Month and Weekday Name</ins>

```js
var DOB = new Date("1995/01/26 04:15:00");             
var birthDate = DOB.getDate();             
var birthYear = DOB.getFullYear();             
var weekday = [];             
  weekday[0] = "Sunday";             
  weekday[1] = "Monday";             
  weekday[2] = "Tuesday";             
  weekday[3] = "Wednesday";             
  weekday[4] = "Thursday";             
  weekday[5] = "Friday";             
  weekday[6] = "Saturday";             
var birthDay = weekday[DOB.getDay()];             
var month = [];             
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
  print(birthDate+" "+birthMonth+" "+birthYear+" "+birthDay+" "+hours + ":"+minutes + ":"+secs);     
```
___
  > <ins>OUTPUT</ins>    
  > 
  >26 January 1995 Thursday 04:15:00      

___


### <ins>Get Difference Between Two Times</ins>

```js
var callConnectedTime = '2021/04/12 18:34:59 +0530';
var callEndTime = '2021/04/12 18:35:14 +0530';
var ivrTime = '75298';

ivrTime = parseInt((ivrTime % 1000) / 100);
print('ivrTym ==> '+ivrTime);

var connectedTym = Date.parse(callConnectedTime);
var endTym = Date.parse(callEndTime);

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    
    milliseconds = milliseconds < 0 ? 0 : milliseconds;
    seconds = seconds < 0 ? 0 : seconds;
    minutes = minutes < 0 ? 0 : minutes;
    hours = hours < 0 ? 0 : hours;

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

var tymDiff = endTym - connectedTym - parseInt(ivrTime);

var talkTime = msToTime(tymDiff);


print('talkTime ==>> '+talkTime);
```
___
> <ins>OUTPUT</ins>
> 
>ivrTym ==> 2    
>talkTime ==>> 00:00:14.9   
___
### <ins>Get Local Time<ins>

```js
function calcTime(city, offset) {
    var d = new Date();

    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return "The local time for city "+ city +" is "+ nd.toLocaleString();
}

print(calcTime('Faridabad', '+5.5'));
```   
___

> <ins>OUTPUT</ins>   
> 
>The local time for city Faridabad is ==>> December 13, 2020 at 4:49:55 PM GMT   
___

### <ins>Set Time Format<ins>

```js

var thisdat=new Date();

var thisdate=new Date(parseInt(thisdat.getTime())+parseInt(300000));
var yearWithoutOffset =  parseInt(thisdate.getYear()) + parseInt(1900);
var monthWithoutOffset = parseInt(thisdate.getMonth()) + parseInt(1);

if (monthWithoutOffset< 10){
        monthWithoutOffset='0'+monthWithoutOffset;
}
var dt;
 dt=thisdate.getDate();
 dt = dt< 10 ? '0'+ dt : dt;
 
var hr;
hr=thisdate.getHours();
hr = hr< 10 ? '0'+ hr : hr;

var min;
min= thisdate.getMinutes();
min = min< 10 ? '0'+ min : min; 

var sec;
sec=thisdate.getSeconds();
sec = sec< 10 ? '0'+ sec : sec;

cbDate=monthWithoutOffset+'/'+dt+'/'+yearWithoutOffset+' '+hr+':'+min+':'+sec;
 
print("IVR_loggin_cbDate ==> "+cbDate);

```
___
> <ins>OUTPUT</ins>   
>
> IVR_loggin_cbDate ==> 12/13/2020 10:54:14  
___