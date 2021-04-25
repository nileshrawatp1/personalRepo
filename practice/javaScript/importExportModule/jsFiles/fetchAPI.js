/// To get the values of variables under different variables use [as] keyword.
// import { phone as phoneNum, name as fName } from "./getParams.js";
// console.log(`FetchAPIDoc ${phoneNum}`);
// console.log(`FetchAPIDoc ${fName}`);

/// To Import all the Exports from the file is much better.
import * as getParams from './getParams.js';
var mobile = getParams.phone;
var fullName = getParams.name;

// console.log(`FetchAPIDoc ${mobile}`);
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


//! Calling The API through Fetch Method
fetch("http://apiocrm.testbook.com/v1/lead/agent?mobile="+mobile)
.then(response => {
    return response.json();
}) .then(json => {
    console.log(json);
})