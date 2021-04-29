//?! ============= Function fot GETTING The URL Parameters Values ===========getUrlParam

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
var phone = getUrlParam("phone", "phoneEMPTY");
var name = getUrlParam("name", "nameEmpty");
//? ==== End of handling blank

//? To export multiple values use this----
export { phone, name };

//! ========= Ends of Both Functions here =======

/// Getting data from varyLastExport.js file and passing to fetchAPI.js file [Extra Learn]....
export * from './veryLastExport.js';