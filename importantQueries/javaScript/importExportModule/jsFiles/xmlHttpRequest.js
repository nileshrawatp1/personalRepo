import { phone } from "./getParams.js";

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
