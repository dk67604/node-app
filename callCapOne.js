var https = require("https");
var qs = require("querystring");

var requestHeaders = {
        "Content-Type": "application/json",
        "Authorization": " Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwicGNrIjoxLCJhbGciOiJkaXIiLCJ0diI6Miwia2lkIjoiYTdxIn0..WlEOf2iVeLXYrp83SSi6wA.ngDoH1C8xUQO4HzWMg4h-EsTdWCKIJfON6XqwnVmtds6j8sBxl_VGpZymVbgjR9C5eQXVRujPwKcOL1h9e7Rzoewn4xL3ac8FEyHcq8C77IA-BKa9U_4ONepOEG5S6oEWyErbrSxaCTxrTJYx6fs8WIk_EJn6J5ztdbn8wsKi-zlih41_q4_F4psyrIyHNZTc82P3DehjcYM4PPWsFRE6LqSiJ0YjkL2CSLlrrt1LeU.69YToD3M3uwfNJ0mFgUw5Q",
        "Accept": "application/json;v=2"
    };

var handleCall = function(method, payload, path) {
    var options = {
        method: method,
        hostname: "api-sandbox.capitalone.com",
        port: 443,
        path: path,
        headers: requestHeaders
    };
    var returnData = "";
    var accountApplication = https.request(options, (response)=> {
	var innerResponse = "";
        response.on("data", (data) => {
            innerResponse += data;
        });
	       
	response.on("end", () => {
            returnData = innerResponse;
        });
    });

    if(payload){
        accountApplication.write(JSON.stringify(payload));
    }
    accountApplication.end();
    return returnData;
};

module.exports = {
   handleCall: handleCall
};
