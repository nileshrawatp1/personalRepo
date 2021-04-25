/// To Import all the Exports from the file is much better.
import * as getParams from './getParams.js';
var mobile = getParams.phone;
var fullName = getParams.name;

console.log(`FetchAPIDoc ${mobile}`);
// console.log(`FetchAPIDoc ${fullName}`);

/// Things coming from the vaeryLastExport.js file through getParams file.
var firstName = getParams.person.firstName;
var lastName = getParams.person.lastName;
var currentDate = getParams.person.currentDate;
var addre = getParams.address;

// console.log(`getParamsfirstName ${firstName}`);
// console.log(`getParamslastName ${lastName}`);
// console.log(`getParamscurrentDate ${currentDate}`);
// console.log(`getParams ${addre}`);


//! Calling The API through AJAX Method
$(document).ready(function () {
    $.ajax({
        url: "http://apiocrm.testbook.com/v1/lead/agent?mobile=" + mobile,
        type: "GET",
        success: function (result) {
            console.log(result)
        },
        error: function (err) {
            console.log(err);
        }
    })
})