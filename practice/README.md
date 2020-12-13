Whole Queries
=================

   * [Table of Contents](#table-of-contents)   
         * [<ins>[PHP]-Convert String to the Hash<ins>](#php-convert-string-to-the-hash)   
         * [<ins>[PHP]-Shorthand Ternary Operator<ins>](#php-shorthand-ternary-operator)    
         * [<ins>[JS]-Shorthand Ternary Operator<ins>](#js-shorthand-ternary-operator)      
         * [<ins>[JS]-Convert Date in Proper Form</ins>](#js-convert-date-in-proper-form)   
         * [<ins>[JS]-Remove Same Values Inside Array</ins>](#js-remove-same-values-inside-array)   
         * [<ins>[JS]-Add One Day Javascript<ins>](#js-add-one-day-javascript)   
         * [<ins>[JS]-Get Local Time<ins>](#js-get-local-time)   
         * [<ins>[JS]-Set Time Format<ins>](#js-set-time-format)    


### <ins>[PHP]-Convert String to the Hash<ins>    

```php

$card_no = "5123451234562346";
$hashing_salt = "dreamfolks";


$card_hashed = hash('sha256', $card_no.$hashing_salt);

echo $card_hashed;

```
> <ins>Output</ins>
>
>6b6ccc44d93b489c872f1869f6b6078aa44f1c23baee9f59afaade0c794b8ea0


### [PHP]-Shorthand Ternary Operator

```php

$action = 'working';

    $vare = ($action == 'edit' ? 'Edit' : 
            ($action == 'delete' ? 'Delete' : 
            ($action == 'open' ? 'Open' : 
            ($action == 'wow' ? 'Wow' : 
            ($action == 'yes' ? 'Yes' : 
            ($action == 'working' ? 'Working' : 
            ($action == 'new' ? 'New' : 'Else')))))));

    echo $vare;

```
___

> <ins>Output</ins>
> 
> Working
___


### [JS]-Shorthand Ternary Operator

```js

var mainMenuInput = '2';

var playPrompt = 
  mainMenuInput == '1' ? "playCancellation"
: mainMenuInput == '2' ? "playReturnAfterThreeSec"
: mainMenuInput == '3' ? "playRefund" : 'wrong';
var inputDump = mainMenuInput+" : "+playPrompt;

print("playPromptName ==>> "+playPrompt);

```

___

> <ins>Output</ins>
> 
> playPromptName ==>> playReturnAfterThreeSec
___


### <ins>[JS]-Convert Date in Proper Form</ins>

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
___
  > <ins>OUTPUT</ins>    
  > 
  >26 January 1995 Thursday 04:15:00      

___


### <ins>[JS]-Remove Same Values Inside Array</ins>
==>> This will not work for Nodeflow          
                 
```js
const lArr = ["new", "hello", "group", "new", "one","hello"];
const uniqueArr = Array.from(new Set(lArr));

console.log(uniqueArr);
```          

____     

> <ins>OUTPUT</ins>   
> 
> ["new", "hello", "group", "one"]         
     
___    

### <ins>[JS]-Add One Day Javascript<ins>

```js
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
dt = tomorrow.getDate();

print("Next Day Date =>> "+tomorrow);
print("Next Day Only-Date =>> "+dt);

```
___
> <ins>OUTPUT</ins>   
>
>Next Day Date =>> Mon Dec 14 2020 11:22:14 GMT-0000 (GMT)   
>Next Day Only-Date =>> 14   
___


### <ins>[JS]-Get Local Time<ins>

```js

function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    print("Millisecond ==>> "+utc);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));
    print("Exact Time ==>> "+nd);

    // return time as a string
    return "The local time for city "+ city +" is ==>> "+ nd.toLocaleString();
}

print(calcTime('Faridabad', '+5.5'));

```

___

> <ins>OUTPUT</ins>   
> 
>Millisecond ==>> 1607858395749   
>Exact Time ==>> Sun Dec 13 2020 16:49:55 GMT-0000 (GMT)   
>The local time for city Faridabad is ==>> December 13, 2020 at 4:49:55 PM GMT   

___


### <ins>[JS]-Set Time Format<ins>

```js

var srcPhone = "+919999775879";
var cli  = srcPhone.substr(-10);
var thisdat;
thisdat=new Date();

var thisdate=new Date(parseInt(thisdat.getTime())+parseInt(300000));
var yearWithoutOffset =  parseInt(thisdate.getYear()) + parseInt(1900);
var monthWithoutOffset = parseInt(thisdate.getMonth()) + parseInt(1);

if (monthWithoutOffset< 10){
        monthWithoutOffset='0'+monthWithoutOffset;
}
var dt;
 dt=thisdate.getDate();
if (dt< 10){
       dt='0'+dt;
}
var hr;
hr=thisdate.getHours();
if (hr< 10){
       hr='0'+hr;
}
var min;
min= thisdate.getMinutes();
 
 if (min< 10){
       min='0'+min;
}
var sec;
sec=thisdate.getSeconds();
if (sec< 10){
       sec='0'+sec;
}
cbDate=monthWithoutOffset+'/'+dt+'/'+yearWithoutOffset+' '+hr+':'+min+':'+sec;
 
print("IVR_loggin_cbDate ==> "+cbDate);
// print("IVR_loggin_campId="+campId);
// print("IVR_loggin_cbPhone="+cbPhone);

```
> <ins>OUTPUT</ins>   
>
> IVR_loggin_cbDate ==> 12/13/2020 10:54:14
