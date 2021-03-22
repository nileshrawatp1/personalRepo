Javascript Queries
==================

   * [Table of Contents](#table-of-contents)    
         * [<ins>Working With Arrays for Inputs<ins></ins></ins>](#working-with-arrays-for-inputs)    
         * [<ins>To Hide OR Unhide div on some dropdown value</ins>](#to-hide-or-unhide-div-on-some-dropdown-value)    
         * [<ins>Shorthand Ternary Operator</ins>](#shorthand-ternary-operator)    
         * [<ins>Convert Date in Proper Form</ins>](#convert-date-in-proper-form)    
         * [<ins>Remove Same Values Inside Array</ins>](#remove-same-values-inside-array)    
         * [<ins>Add One Day Javascript<ins></ins></ins>](#add-one-day-javascript)    
         * [<ins>Get Local Time<ins></ins></ins>](#get-local-time)    
         * [<ins>Set Time Format<ins></ins></ins>](#set-time-format)      
         * [<ins>Merging Two Objects Or Arrays<ins>](#merging-two-objects-or-arrays)      

### <ins>Working With Arrays for Inputs<ins>     

```js
var languageMenuInput = 1;
var mainMenuInput = 2

var camp_leads_comb = [
                ['',''],
                ['169','19426','19425','19424','19423','19421','19422'],
                ['171','19427','19428','19429','19430','19431','19432'],
                ['172','19438','19437','19436','19435','19434','19433'],
                ['165','19420','19419','19418','19417','19416','19415'],
                ['152','19408','19407','19406','19405','19404','19403'],
                ['161','19414','19413','19412','19411','19410','19409'],
                ['151','19402','19401','19400','19399','19398','19397'],
                ['262','36986','36987','36988','36989','36990','36991']
            ];    

campaignId = camp_leads_comb[mainMenuInput][0];
leadId = camp_leads_comb[mainMenuInput][languageMenuInput];

console.log("campaignId ==>> "+campaignId);    
console.log("leadId ==>> "+leadId);

```
> <ins>Output</ins>
>    
> campaignId ==>> 171   
> leadId ==>> 19427

**For Language Menu Input**

```js
var langArr =['','_eng','_hin','_tam','_kan','_tel','_mal'];
langSuffix = langArr[languageMenuInput];
```

### <ins>To Hide OR Unhide div on some dropdown value</ins>


```js
$(document).ready(function(){

var lateReas = "<?php echo $data['late_reason']; ?>";

  if (lateReas == 'Others' || lateReas == ("Technical Issue")){
        $(".commentClass").show();
      } else {
        $(".commentClass").hide();
      }

    $('#late_reason').on('change', function() {
      if (this.value == 'Others' || this.value == ("Technical Issue")){
        $(".commentClass").show();
      } else {
        $(".commentClass").hide();
      }
    });
});


```

### <ins>Shorthand Ternary Operator</ins>



```js

var mainMenuInput = '2';

var playPrompt = mainMenuInput == '1' ? "playCancellation" :
                 mainMenuInput == '2' ? "playReturnAfterThreeSec" :
                 mainMenuInput == '3' ? "playRefund" : 'wrong';

print("playPromptName ==>> "+playPrompt);

```

___

> <ins>Output</ins>
> 
> playPromptName ==>> playReturnAfterThreeSec
___


### <ins>Convert Date in Proper Form</ins>

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


### <ins>Remove Same Values Inside Array</ins>
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

### <ins>Add One Day Javascript<ins>

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


### <ins>Get Local Time<ins>

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


### <ins>Set Time Format<ins>

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

### <ins>Merging Two Objects Or Arrays<ins>     

1. **Merging Objects**

```js
var person = {
    fname: 'Nilesh',
    lname: 'Rawat'
};

var job = {
    role: 'Developer',
    leve: 'junior'
};

// ! To merge two different Objectd using ```...```

var personDetails = {
    ...person,
    ...job
};

console.log(personDetails);
console.log(personDetails.level);
```
> {fname: "Nilesh", lname: "Rawat", role: "Developer", leve: "junior"}   
> junior   

    ` In Case of Same keys in both objects then it will store the last key values `    

```js
var person = {
    fname: 'Nilesh',
    lname: 'Rawat'
};

var person1 = {
    fname: 'Kapil',
    lname: 'Singh'
};

// ! To merge two different Objectd using ```...```

var personDetails = {
    ...person,
    ...person1
};

console.log(personDetails);
console.log(personDetails.fname);
```
> {fname: "Kapil", lname: "Singh"}    
> Kapil    

2. **Merging Arrays**       
