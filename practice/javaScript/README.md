Javascript Queries
==================

   * [Table of Contents](#table-of-contents)    
         * [<ins>Working With Arrays for Inputs<ins></ins></ins>](#working-with-arrays-for-inputs)    
         * [<ins>To Hide OR Unhide div on some dropdown value</ins>](#to-hide-or-unhide-div-on-some-dropdown-value)    
         * [<ins>Shorthand Ternary Operator</ins>](#shorthand-ternary-operator)    
         * [<ins>Convert Date in Proper Form</ins>](#convert-date-in-proper-form)    
         * [<ins>Get Difference Between Two Times</ins>](#get-difference-between-wo-times)    
         * [<ins>Remove Same Values Inside Array</ins>](#remove-same-values-inside-array)    
         * [<ins>Add One Day Javascript<ins></ins></ins>](#add-one-day-javascript)    
         * [<ins>Get Local Time<ins></ins></ins>](#get-local-time)    
         * [<ins>Set Time Format<ins></ins></ins>](#set-time-format)      
         * [<ins>Merging Two Objects Or Arrays<ins>](#merging-two-objects-or-arrays)      
         * [<ins>Distructuring(important) Objects and Arrays</ins>](#distructuringimportant-objects-and-arrays)    
         * [<ins>Dependent State City Dropdowns India<ins></ins></ins>](#dependent-state-city-dropdowns-india)       
         * [<ins>Pick Random Number</ins>](#pick-random-number)  

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

> <ins>OUTPUT</ins>
> 
>ivrTym ==> 2
>talkTime ==>> 00:00:14.9

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
> {fname: "Kapil", lname: "Singh"}    
> Kapil    

2. **Merging Arrays**       

```js
var person = ['Nilesh', 'Rawat'];
var job = ['Ameyo', 'Gurgaon'];
// ! Merging Two Arrays
var details = [...person, ...job];

console.log(details);
```
> ["Nilesh", "Rawat", "Ameyo", "Gurgaon"]   

### <ins>Distructuring(important) Objects and Arrays</ins>     

```js
var array = ['Nilesh', 'Rawat'];
// array destructuring
var [firstElement, secondElement] = array;
console.log(firstElement, secondElement);
console.log(firstElement);
console.log(secondElement);
> Nilesh Rawat   
> Nilesh   
> Rawat   
```

### <ins>Dependent State City Dropdowns India<ins>    

```HTML

<select class="selectbox" id="statesId" name="state" value="<? echo $data['state'];?>" style="width:122px"></select>
<select class="selectbox" id="cityId" name="city" value="<? echo $data['city'];?>" style="width:122px"></select>

```

```js

var stateData = {
        Andhra_Pradesh: ["Adilabad", "Anantapur", "Chittoor", "Kakinada", "Guntur", "Hyderabad", "Karimnagar", "Khammam", "Krishna", "Kurnool", "Mahbubnagar", "Medak", "Nalgonda", "Nizamabad", "Ongole", "Hyderabad", "Srikakulam", "Nellore", "Visakhapatnam", "Vizianagaram", "Warangal", "Eluru", "Kadapa"],
        Arunachal_Pradesh: ["Anjaw","Changlang","East Siang","Kurung Kumey","Lohit","Lower Dibang Valley","Lower Subansiri","Papum Pare","Tawang","Tirap","Dibang Valley","Upper Siang","Upper Subansiri","West Kameng ","West Siang"],
        Assam: ["Baksa", "Barpeta", "Bongaigaon", "Cachar", "Chirang", "Darrang", "Dhemaji", "Dima Hasao", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Marigaon", "Nagaon", "Nalbari", "Sibsagar", "Sonitpur", "Tinsukia", "Udalguri"],
        Bihar: ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
        Chandigarh: ["Chandigarh"],
        Chhattisgarh: ["Bastar", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Jashpur", "Janjgir-Champa", "Korba", "Koriya", "Kanker", "Kabirdham (Kawardha)", "Mahasamund", "Narayanpur", "Raigarh", "Rajnandgaon", "Raipur", "Surguja"],
        Dadra_and_Nagar_Haveli: ["Dadra and Nagar Haveli"],
        Daman_and_Diu: ["Daman", "Diu"],
        Delhi: ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "South Delhi", "South West Delhi", "West Delhi"],
        Goa: ["North Goa", "South Goa"],
        Gujarat: ["Ahmedabad", "Amreli district", "Anand", "Banaskantha", "Bharuch", "Bhavnagar", "Dahod", "The Dangs", "Gandhinagar", "Jamnagar", "Junagadh", "Kutch", "Kheda", "Mehsana", "Narmada", "Navsari", "Patan", "Panchmahal", "Porbandar", "Rajkot", "Sabarkantha", "Surendranagar", "Surat", "Vyara", "Vadodara", "Valsad"],
        Haryana: ["Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurgaon", "Hissar", "Jhajjar", "Jind", "Karnal", "Kaithal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamuna Nagar"],
        Himachal_Pradesh: ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
        Jammu_and_Kashmir: ["Anantnag", "Badgam", "Bandipora", "Baramulla", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kupwara", "Kulgam", "Leh", "Poonch", "Pulwama", "Rajauri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
        Jharkhand: ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
        Karnataka: ["Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Bijapur", "Chamarajnagar", "Chikkamagaluru", "Chikkaballapur", "Chitradurga", "Davanagere", "Dharwad", "Dakshina Kannada", "Gadag", "Gulbarga", "Hassan", "Haveri district", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Ramanagara", "Yadgir"],
        Kerala: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur", "Thiruvananthapuram", "Wayanad"],
        Madhya_Pradesh: ["Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa (East Nimar)", "Khargone (West Nimar)", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Rewa", "Rajgarh", "Ratlam", "Raisen", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
        Maharashtra: ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Beed", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai suburban", "Nandurbar", "Nanded", "Nagpur", "Nashik", "Osmanabad", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sindhudurg", "Sangli", "Solapur", "Satara", "Thane", "Wardha", "Washim", "Yavatmal"],
        Manipur: ["Bishnupur", "Churachandpur", "Chandel", "Imphal East", "Senapati", "Tamenglong", "Thoubal", "Ukhrul", "Imphal West"],
        Meghalaya: ["East Garo Hills", "East Khasi Hills", "Jaintia Hills", "Ri Bhoi", "South Garo Hills", "West Garo Hills", "West Khasi Hills"],
        Mizoram: ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
        Nagaland: ["Dimapur", "Kohima", "Mokokchung", "Mon", "Phek", "Tuensang", "Wokha", "Zunheboto"],
        Orissa: ["Angul", "Boudh (Bauda)", "Bhadrak", "Balangir", "Bargarh (Baragarh)", "Balasore", "Cuttack", "Debagarh (Deogarh)", "Dhenkanal", "Ganjam", "Gajapati", "Jharsuguda", "Jajpur", "Jagatsinghpur", "Khordha", "Kendujhar (Keonjhar)", "Kalahandi", "Kandhamal", "Koraput", "Kendrapara", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nuapada", "Nayagarh", "Puri", "Rayagada", "Sambalpur", "Subarnapur (Sonepur)", "Sundergarh"],
        Pondicherry: ["Karaikal", "Mahe", "Pondicherry", "Yanam"],
        Punjab: ["Amritsar", "Barnala", "Bathinda", "Firozpur", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Ajitgarh (Mohali)", "Sangrur", "Nawanshahr", "Tarn Taran"],
        Rajasthan: ["Ajmer", "Alwar", "Bikaner", "Barmer", "Banswara", "Bharatpur", "Baran", "Bundi", "Bhilwara", "Churu", "Chittorgarh", "Dausa", "Dholpur", "Dungapur", "Ganganagar", "Hanumangarh", "Jhunjhunu", "Jalore", "Jodhpur", "Jaipur", "Jaisalmer", "Jhalawar", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sikar", "Sawai Madhopur", "Sirohi", "Tonk", "Udaipur"],
        Sikkim: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
        Tamil_Nadu: ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Madurai", "Nagapattinam", "Nilgiris", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Tirupur", "Tiruchirappalli", "Theni", "Tirunelveli", "Thanjavur", "Thoothukudi", "Tiruvallur", "Tiruvarur", "Tiruvannamalai", "Vellore", "Viluppuram", "Virudhunagar"],
        Tripura: ["Dhalai", "North Tripura", "South Tripura", "Khowai", "West Tripura"],
        Uttar_Pradesh: ["Agra", "Allahabad", "Aligarh", "Ambedkar Nagar", "Auraiya", "Azamgarh", "Barabanki", "Budaun", "Bagpat", "Bahraich", "Bijnor", "Ballia", "Banda", "Balrampur", "Bareilly", "Basti", "Bulandshahr", "Chandauli", "Chhatrapati Shahuji Maharaj Nagar", "Chitrakoot", "Deoria", "Etah", "Kanshi Ram Nagar", "Etawah", "Firozabad", "Farrukhabad", "Fatehpur", "Faizabad", "Gautam Buddh Nagar", "Gonda", "Ghazipur", "Gorakhpur", "Ghaziabad", "Hamirpur", "Hardoi", "Mahamaya Nagar", "Jhansi", "Jalaun", "Jyotiba Phule Nagar", "Jaunpur district", "Ramabai Nagar (Kanpur Dehat)", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar", "Lalitpur", "Lakhimpur Kheri", "Lucknow", "Mau", "Meerut", "Maharajganj", "Mahoba", "Mirzapur", "Moradabad", "Mainpuri", "Mathura", "Muzaffarnagar", "Panchsheel Nagar district (Hapur)", "Pilibhit", "Shamli", "Pratapgarh", "Rampur", "Raebareli", "Saharanpur", "Sitapur", "Shahjahanpur", "Sant Kabir Nagar", "Siddharthnagar", "Sonbhadra", "Sant Ravidas Nagar", "Sultanpur", "Shravasti", "Unnao", "Varanasi"],
        Uttarakhand:["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
        West_Bengal: ["Birbhum", "Bankura", "Bardhaman", "Darjeeling", "Dakshin Dinajpur", "Hooghly", "Howrah", "Jalpaiguri", "Cooch Behar", "Kolkata", "Maldah", "Paschim Medinipur", "Purba Medinipur", "Murshidabad", "Nadia", "North 24 Parganas", "South 24 Parganas", "Purulia", "Uttar Dinajpur"]
        };
        window.onload = function () {
                statesId.length = 1;
                cityId.length = 1;
                for (var state in stateData) {
                statesId.options[statesId.options.length] = new Option(state, state);
                }
        statesId.onchange = function () {
                cityId.length = 1;
                if (this.selectedIndex < 1) return;
                var city = stateData[this.value];
                for (var i = 0; i < city.length; i++) {
                cityId.options[cityId.options.length] = new Option(city[i], city[i]);
                }
        };
        };

```
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

// Between any two numbers
var betweenTwoNum = Math.floor(Math.random() * (max - min + 1)) + min;

// Between 0 and max
var betweenZeroAndMax = Math.floor(Math.random() * (max + 1));

// Between 1 and max
var betweenOneAndMax = Math.floor(Math.random() * max) + 1;

print('betweenTwoNum ==>> '+betweenTwoNum);
print('betweenZeroAndMax ==>> '+betweenZeroAndMax);
print('betweenOneAndMax ==>> '+betweenOneAndMax);
```