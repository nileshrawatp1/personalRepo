Table of Contents
=================

   * [Table of Contents](#table-of-contents)    
         * [<ins>Working With Arrays for Inputs<ins></ins></ins>](#working-with-arrays-for-inputs)  
         * [<ins>To Hide OR Unhide div on some dropdown value</ins>](#to-hide-or-unhide-div-on-some-dropdown-value)  
         * [<ins>Shorthand Ternary Operator</ins>](#shorthand-ternary-operator)  
         * [<ins>Remove Same Values Inside Array</ins>](#remove-same-values-inside-array)  
         * [<ins>Merging Two Objects Or Arrays<ins></ins></ins>](#merging-two-objects-or-arrays)  
         * [<ins>Distructuring(important) Arrays</ins>](#distructuringimportant-arrays)  
         * [<ins>Distructuring(important) Objects</ins>](#distructuringimportant-objects)  
         * [<ins>Distructuring(important) Complicated One</ins>](#distructuringimportant-complicated-one)  
         * [<ins>Pick Random Number</ins>](#pick-random-number)  
         * [<ins>Getting the URL parameters in JS</ins>](#getting-the-url-parameters-in-js)  
         * [<ins>Regex Remove All Space</ins>](#regex-remove-all-space)  
         * [<ins>Check Of Key In Array</ins>](#check-of-key-in-array)  
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

### <ins>Distructuring(important) Arrays</ins>     

```js
var arr = [
  ["Nilesh", "Developer"],
  ["Sattu", "Docter"],
  ["Kapil", "Teacher"]
];

var [[devopName, devopProfile], [docName, docProfile], [teacherName, teacherProfile]] = arr;
console.log(devopName);
console.log(devopProfile);
console.log(docName);
console.log(docProfile);
console.log(teacherName);
console.log(teacherProfile);
```
____     

> <ins>OUTPUT</ins>   
>
> "Nilesh"
> "Developer"
> "Sattu"
> "Docter"
> "Kapil"
> "Teacher"
___

 - Spreding, rest or skipping some values.    
 ```js
const states = ['Delhi', 'Haryana', 'Goa', 'Mumbai', 'Gujrat'];
let [indiaCapital,,beachState,...otherStates] = states;

console.log('indiaCapital : '+indiaCapital);
// Skipped Haryana Here
console.log('beachState : '+beachState);
console.log('otherStates : '+otherStates);
 ```
 ____     

> <ins>OUTPUT</ins>   
>
> "indiaCapital : Delhi"
>"beachState : Goa"
>"otherStates : Mumbai,Gujrat"
___

### <ins>Distructuring(important) Objects</ins>     

```js
var arr = [
  {
    fr_escalated: false,
    spam: false,
    group_id: 62000083703,
    priority: 1,
    requester_id: 62009916517,
    source: 2,
    status: 2,
    subject: "Issue on GeoLocation Screen | Uno",
    id: 220783,
    due_by: "2021-07-08T06:04:23Z",
    fr_due_by: "2021-07-05T12:04:23Z",
    is_escalated: false,
    custom_fields: {
      cf_problem: "Onboarding",
      cf_details: "Geo Location Issue",
      cf_subdetails: "App Error"
    },
    created_at: "2021-07-03T08:04:23Z",
    updated_at: "2021-07-03T08:04:23Z",
    nr_escalated: false
  }
];

var [
  {
    subject,
    group_id,
    id,
    custom_fields: { cf_problem },
    created_at
  }
] = arr;

console.log(group_id);
console.log(id);
console.log(cf_problem);
console.log(created_at);
console.log(subject);
```
____     

> <ins>OUTPUT</ins>   
>
> 62000083703
> 220783
> "Onboarding"
> "2021-07-03T08:04:23Z"
> "Issue on GeoLocation Screen | Uno"
___

 - Spreding, rest or skipping some values.    
 ```js
const dataObj = {
  fname: 'Nilesh',
  lname: 'Rawat',
  city: 'Faridabad',
  state: 'Haryana',
  pincode: 121004
}

let {fname, lname, ...rest} = dataObj;

console.log(fname);
console.log(lname);
console.log(rest);
 ```
 ____     

> <ins>OUTPUT</ins>   
>
> "Nilesh"
> "Rawat"
> {city: "Faridabad", state: "Haryana", pincode: 121004}
___   

### <ins>Distructuring(important) Complicated One</ins>     

```js
const research = {
    id: 445,
    data: "2019-05-13T00:00:00",
    otherContent: "...",
    acf: {
      id: 123456789,
        relatedStaff: [{
            staffLevel: 'Supervisors',
            users: [{
                name: { first: 'Nilesh', last: 'Rawat' }
            },{
                name: { first: 'Satender', last: 'Sisodia' }
            }]
        },{
            staffLevel: 'Reseachers',
            users: [{
                name: { first: 'Kapil', last: 'Jhon' }
            }]
        }]
    },
}

getAllUsers = (resultData = []) => {
  var {acf:{relatedStaff}} = research;
  relatedStaff.map(({users}) => {
    users.map(({name:{first, last}}) => {
      resultData.push(`${first} ${last}`)
    })
  })
  
  return resultData;
}

const users = getAllUsers();
console.log(users);

```
____     

> <ins>OUTPUT</ins>   
>
> ["Nilesh Rawat","Satender Sisodia","Kapil Jhon"]
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

function getQueryVariable(stringUrl, variable) {
    if (stringUrl != null) {
        var query = stringUrl.substring(stringUrl.indexOf('?') + 1,
            stringUrl.length);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
    }
}

var crm_url = 'https://intellipaat.ameyoemerge.in:8785/intellipaat_zoho/request.php?crm_push_generated_time=1638033616069&userCrtObjectId=d928-61955288-ses-priyank%40intellipaat.com-bdFe70p7-22132-uce-webrtc_priyank_intellipaat_com%40-10846&phone=9770998902&campaignId=973&associationType=manualdial.association&crtObjectId=d928-61955288-vce-257459&externalData=%5B%7B%22recordName%22%3A%22Unknown+Unknown%22%2C%22url%22%3A%22https%3A%5C%2F%5C%2Fcrm.zoho.com%5C%2Fcrm%5C%2Forg419134248%5C%2Ftab%5C%2FLeads%5C%2F1878955000274039715%22%2C%22phone%22%3A%229770998902%22%2C%22recordType%22%3A%22Leads%22%2C%22recordId%22%3A%221878955000274039715%22%2C%22relatedTo%22%3Anull%2C%22integrationType%22%3A%22ZOHO%22%7D%5D&sessionId=d928-61955288-ses-priyank%40intellipaat.com-bdFe70p7-22132&maskingEnabled=false&userId=priyank%40intellipaat.com&callType=outbound.manual.dial';

var decodedCrmUrl = '';

decodedCrmUrl = decodeURIComponent((crm_url + '').replace(/\+/g, '%20'))

additionalData = getQueryVariable(decodedCrmUrl, "externalData");
additionalData = JSON.parse(additionalData);

var ppp = additionalData[0].phone;
print(ppp);


```
___
> <ins>Output</ins>
>
> 9770998902
___
### <ins>Regex Remove All Space</ins>
 - Here syntex is `str.replace(/ /g, '')` in which g removes all the spaces with no-space.
```js
var userIdRes = (!userIdRes.replace(/ /g, '') || userIdRes == '-1') ? 'agent@intellipaat' : userIdRes;
```

### <ins>Check Of Key In Array</ins>  
```js
// var apiResponse = '{"status": 400,"message": "Lead not exists in 398!"}';
var apiResponse = '{"user":{"id":"BB1225","name":"Rinky Mehra","email":"rinky.chandigarhuniversity@gmail.com","mobile":"07969013333"}}';

eval("json = " + apiResponse + ";");
var preferredAgent = (json["user"] !== undefined) ? json["user"]["id"].replace(/ /g, '') : '';
var mobile = (json["user"] !== undefined) ? json["user"]["mobile"].replace(/ /g, '') : '';

var prefAgent = preferredAgent ? 'Found' : 'NotFound';

print(prefAgent);
```
> Found   