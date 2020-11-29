var env;

var cli = "98765432";
var ticketNumDump = "1234567890";
var todays = new Date();
var timeSlotInput = "4";
var yearWithoutOffset =  parseInt(todays.getYear()) + parseInt(1900);
var monthWithoutOffset = parseInt(todays.getMonth()) + parseInt(1);
var callbackSetTime = "outOfTimeSlot";

var dt;
 dt=todays.getDate();
if (dt< 10){
       dt='0'+dt;
}
var orgDt = dt;
var hr;
hr=todays.getHours();
if (hr< 10){
       hr='0'+hr;
}
var min;
min= todays.getMinutes();
 
 if (min< 10){
       min='0'+min;
}
var sec;
sec=todays.getSeconds();
if (sec< 10){
       sec='0'+sec;
}

var callReceiveDate = yearWithoutOffset+'-'+monthWithoutOffset+'-'+orgDt+' '+hr+':'+min+':'+sec;

if ((callbackSetTime == "outOfTimeSlot" || callbackSetTime == "lastSlot") && hr >= "20" && hr < "24"){
    todays.setDate(todays.getDate() + 1);
    dt = todays.getDate();
    if (dt< 10){
       dt='0'+dt;
    }
}

print("changesDate ==>> "+dt);
print("orginalDate ==>> "+orgDt);

if(callbackSetTime == "firstSlot" && timeSlotInput == "1"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"09:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"10:59:59";
} else if (callbackSetTime == "firstSlot" && timeSlotInput == "2"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"12:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"14:59:59";
} else if (callbackSetTime == "firstSlot" && timeSlotInput == "3"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"14:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"17:59:59";
} else if (callbackSetTime == "firstSlot" && timeSlotInput == "4"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"17:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"19:59:59";
} else if 
(callbackSetTime == "secondSlot" && timeSlotInput == "1"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"12:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"14:59:59";
} else if (callbackSetTime == "secondSlot" && timeSlotInput == "2"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"14:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"17:59:59";
} else if (callbackSetTime == "secondSlot" && timeSlotInput == "3"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"17:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"19:59:59";
} else if 
(callbackSetTime == "LastTwoSlots" && timeSlotInput == "1"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"14:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"17:59:59";
} else if (callbackSetTime == "LastTwoSlots" && timeSlotInput == "2"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"17:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"19:59:59";
} else if 
(callbackSetTime == "lastSlot" && timeSlotInput == "1"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"17:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"19:59:59";
} 
 else if (callbackSetTime == "outOfTimeSlot" && timeSlotInput == "1"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"09:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"10:59:59";
} else if (callbackSetTime == "outOfTimeSlot" && timeSlotInput == "2"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"12:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"14:59:59";
} else if (callbackSetTime == "outOfTimeSlot" && timeSlotInput == "3"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"14:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"17:59:59";
} else if (callbackSetTime == "outOfTimeSlot" && timeSlotInput == "4"){
    startDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"17:00:30";
    endDT = yearWithoutOffset+'-'+monthWithoutOffset+'-'+dt+' '+"19:59:59";
}

var customer_record = '{"session_start_time":"'+startDT+'","session_end_time":"'+endDT+'","update_session_time":"'+callReceiveDate+'","freshwork_ticket_id":"'+ticketNumDump+'","phone1":"'+cli+'","twitter":"","facebook":"","email":""}';


print("startTime ==>> "+startDT);
print("endTime ==>> "+endDT);
print("callReceiveDate ==>> "+callReceiveDate);
print("customer_record ==>> "+customer_record);