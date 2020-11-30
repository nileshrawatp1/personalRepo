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


// ################################################### OUTPUT ##################################################

// Added 4 years ==>> Sat Nov 30 2024 19:59:43 GMT-0000 (GMT)
// Added 8 Months ==>> Fri Jul 30 2021 19:59:43 GMT-0000 (GMT)
// Added 7 days ==>> Mon Dec 07 2020 19:59:43 GMT-0000 (GMT)
// Added 2 Hours ==>> Mon Nov 30 2020 21:59:43 GMT-0000 (GMT)
// Added 5 Minutes ==>> Mon Nov 30 2020 20:04:43 GMT-0000 (GMT)
// Added 30 Seconds ==>> Mon Nov 30 2020 20:00:13 GMT-0000 (GMT)
