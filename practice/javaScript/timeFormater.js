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
 
print("IVR_loggin_cbDate="+cbDate);
// print("IVR_loggin_campId="+campId);
// print("IVR_loggin_cbPhone="+cbPhone);