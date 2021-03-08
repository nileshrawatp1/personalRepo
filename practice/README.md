Javascript Queries
===================

   * [Table of Contents](#table-of-contents)    
         * [<ins>Working With Arrays for Inputs<ins></ins></ins>](#working-with-arrays-for-inputs)    
         * [<ins>To Hide OR Unhide div on some dropdown value</ins>](#to-hide-or-unhide-div-on-some-dropdown-value)    
         * [<ins>Shorthand Ternary Operator</ins>](#shorthand-ternary-operator)    
         * [<ins>Convert Date in Proper Form</ins>](#convert-date-in-proper-form)    
         * [<ins>Remove Same Values Inside Array</ins>](#remove-same-values-inside-array)    
         * [<ins>Add One Day Javascript<ins></ins></ins>](#add-one-day-javascript)    
         * [<ins>Get Local Time<ins></ins></ins>](#get-local-time)    
         * [<ins>Set Time Format<ins></ins></ins>](#set-time-format)          


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


### [PHP]-Date and Time

```php

echo date('d') . "<br>";  // day
echo date('m') . "<br>";  // month
echo date('Y') . "<br>";  // full year
echo date('y') . "<br>";  // two Letter year
echo date('l') . "<br>";  // day of weak
echo date('Y/m/d') . "<br>";  // full date  yyyy/mm/dd
echo date('m-d-y') . "<br>";  // full date  mm-dd-yy

```

___

> <ins>Output</ins>
> 
> 17     
> 12       
> 2020   
> 20   
> Thursday   
> 2020/12/17   
> 12-17-20   
> 
___

**<ins>To Set Your Own TimeStamp</ins>**

```php

date_default_timezone_set('Asia/Kolkata');   //ToSet the ANy Area Time   

echo date('h:i:sa') . "<br>";  // full time Area Time

```

___

> <ins>Output</ins>
> 
>07:40:05am
___

**<ins>To Set Your Own Time</ins>**

```php

$setTime = mktime(04, 15, 20, 01, 26, 1995);   // hrs, mins, secs, month, date, year

echo $setTime . "<br>";

echo date('d-m-Y h:i:sa', $setTime);

```

___

> <ins>Output</ins>
> 
> 791093720   
> 26-01-1995 04:15:20am
___

**<ins>Manipulate Time</ins>**

```php

// **Convert String date to exact Time**
$setTime = strtotime('26 jan 1995 4:15:25pm');
echo date('d-m-Y h:i:sa', $setTime).'<br>';
```
> 26-01-1995 04:15:25pm

```php
// **Get Tomorrows Date**
$getTomorrowDate = strtotime('tomorrow');
echo date('d-m-Y h:i:sa', $getTomorrowDate).'<br>';
```
> 19-12-2020 12:00:00am

```php
// **Get Next Sunday Date**
$getNxtSunday = strtotime('next sunday');
echo date('d-m-Y h:i:sa', $getNxtSunday).'<br>';
```
> 20-12-2020 12:00:00am

```php
// **Add Two Days**
$addTwoDays = strtotime('+2 days');
echo date('d-m-Y h:i:sa', $addTwoDays).'<br>';
```
> 20-12-2020 01:28:18pm

```php
// **Add Two Months**
$addTwoMonths = strtotime('+2 months');
echo date('d-m-Y h:i:sa', $addTwoMonths).'<br>';
```
> 18-02-2021 01:28:18pm

```php
// **Add Two Weeks**
$addTwoWeeks = strtotime('+2 weeks');
echo date('d-m-Y h:i:sa', $addTwoWeeks).'<br>';
```
> 01-01-2021 01:28:18pm

```php
// **Add Two Hours**
$addTwoHours = strtotime('+2 hours');
echo date('d-m-Y h:i:sa', $addTwoHours).'<br>';
```
> 18-12-2020 03:28:18pm

```php
// **Current Time**
echo date('d-m-Y h:i:sa').'<br>';

// **Add Five Minutes**
$addFiveMins = strtotime('+5 minutes');
echo date('d-m-Y h:i:sa', $addFiveMins).'<br>';

```
> **// Current Time**    
> 18-12-2020 01:28:18pm   
> 
> **// Added Five Minutes**     
> 18-12-2020 01:33:18pm  


