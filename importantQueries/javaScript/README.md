Table of Contents
=================

   * [Table of Contents](#table-of-contents)    
         * [<ins>Working With Arrays for Inputs<ins></ins></ins>](#working-with-arrays-for-inputs)    
         * [<ins>To Hide OR Unhide div on some dropdown value</ins>](#to-hide-or-unhide-div-on-some-dropdown-value)    
         * [<ins>Shorthand Ternary Operator</ins>](#shorthand-ternary-operator)    
         * [<ins>Remove Same Values Inside Array</ins>](#remove-same-values-inside-array)    
         * [<ins>Merging Two Objects Or Arrays<ins></ins></ins>](#merging-two-objects-or-arrays)    
         * [<ins>Distructuring(important) Objects and Arrays</ins>](#distructuringimportant-objects-and-arrays)    
         * [<ins>Pick Random Number</ins>](#pick-random-number)       
         * [<ins>Getting the URL parameters in JS</ins>](#getting-the-url-parameters-in-js)  
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
___
> <ins>Output</ins>
>    
> campaignId ==>> 171   
> leadId ==>> 19427
___

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

 **NOTE:** *In Case of Same keys in both objects then it will store the last key values*

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
____     

> <ins>OUTPUT</ins>   
>
> {fname: "Kapil", lname: "Singh"}    
> Kapil    
___

2. **Merging Arrays**       

```js
var person = ['Nilesh', 'Rawat'];
var job = ['Ameyo', 'Gurgaon'];
// ! Merging Two Arrays
var details = [...person, ...job];

console.log(details);
```
____     

> <ins>OUTPUT</ins>   
>
> ["Nilesh", "Rawat", "Ameyo", "Gurgaon"]   
___

### <ins>Distructuring(important) Objects and Arrays</ins>     

```js
var array = ['Nilesh', 'Rawat'];
// array destructuring
var [firstElement, secondElement] = array;
console.log(firstElement, secondElement);
console.log(firstElement);
console.log(secondElement);
```
____     

> <ins>OUTPUT</ins>   
>
> Nilesh Rawat   
> Nilesh   
> Rawat   
___

### <ins>Pick Random Number</ins>  
- It will pick the random number between 1-10.  
- Here `10` is the number for highest number limit and we are adding `1` so that we dont get the 0 value to be choosen.  
```js
var nums = ["","+918068790094","+918068790095","+918068790096","+918068790097","+918068790098","+912265056500","+912265056499","+912265056494","+912265056493","+912265056492"];
var randomNum = Math.floor(Math.random() * 10) + 1;

var callID = nums[randomNum];
print(callID);
```
- To Pick Between two Numbers.  
```js
var min = 10;
var max = 30;

// Between max and min numbers
var betweenTwoNum = Math.floor(Math.random() * (max - min + 1)) + min;

// Between 0 and max
var betweenZeroAndMax = Math.floor(Math.random() * (max + 1));

// Between 1 and max
var betweenOneAndMax = Math.floor(Math.random() * max) + 1;

print('betweenTwoNum ==>> '+betweenTwoNum);
print('betweenZeroAndMax ==>> '+betweenZeroAndMax);
print('betweenOneAndMax ==>> '+betweenOneAndMax);
```
____     

> <ins>OUTPUT</ins>   
> 
> betweenTwoNum ==>> 28    
> betweenZeroAndMax ==>> 26    
> betweenOneAndMax ==>> 2    
___

### <ins>Getting the URL parameters in JS</ins>
 - Here URL was `http://127.0.0.1:5500/api.html?phone=9512916949`  
 - API Response will be `{"data":{"mobile":"9512916949","unique_id":"6084eb876c8e180767fadabb"},"success":true,"message":""}`  
```js
//?! ============= Function fot GETTING The URL Parameters Values ===========getUrlParam
//?  ===== function below parses and returns the parameters.
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
// var phone = getUrlVars()["phone"];  //? To get the param directly if it will not be null ever.
// console.log("phone ==>> "+phone);

//? ==== End of Parse Function

//? === For Handling the null values of the parameter or the param is missing ===
function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if (window.location.href.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}
var phone = getUrlParam("phone", "EMPTY");
//? ==== End of handling blank
//! ========= Ends of Both Functions here =======

/// ======== Calling the API HERE =========
const request = new XMLHttpRequest();
request.open("GET", "http://apiocrm.testbook.com/v1/lead/agent?mobile=" + phone);
request.send();
request.onload = () => {
    if (request.status === 200) {
        var apiResponse = JSON.parse(request.response);
    } else {
        var apiResponse = 'ERROR : ' + response.status;
    }
    var uniqueId = apiResponse.data.unique_id;
    console.log("uniqueId ==>> "+uniqueId);
}

```
___
> <ins>Output</ins>
>
> uniqueId ==>> 608512e0e0716f07b03efb48
___