var bodyParser = require('body-parser');
var multer = require('multer');
var capone = require('./callCapOne.js');

var initApi = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    var formData = multer();

    app.get("/", (req, res) => {
        res.sendStatus(200);
    });

    app.get("/getDataFields", (req, res) => {
        res.json({
            "dataFields":[
                "firstName",
                "lastName",
                "dateOfBirth",
                "homeAddress",
                "mobilePhoneNumber",
                "emailAddress",
                "employmentStatus",
                "fundingAmount",
                "acceptAccountDisclosures",
                "acceptPaperlessAgreement",
                "acceptFraudProtection"
            ]
        });
    });

    app.get("/getProducts", (req, res) => {
        res.setHeader("Content-Type","application/json");
        capone.handleCall("GET", null, "/deposits/account-products").then(function(result){
          res.send(JSON.parse(result));
        }).catch(function(error){
          res.send({error:"failed"})
        });
    });

    app.post("/postDataFields", formData.array(),(req, res) => {
      res.setHeader("Content-Type","application/json");
        capone.handleCall("POST", req.body, "/deposits/account-applications").then(function(result){
          res.send(JSON.parse(result));
        }).catch(function(error){
          res.send({error:"failed"})
        });
    });
}

module.exports = {
    initApi: initApi
}
