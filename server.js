const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const server = express();

const port = 3000;

server.use(bodyParser.urlencoded({extended:true}));



server.get('/', function (req, res) {
    console.log(req.body)
    res.sendFile(__dirname + "/orphan.html");
});



server.post('/', function(req, res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var address = req.body.address;
    var state = req.body.state;
    var city = req.body.city;
    var zipCode = req.body.zipCode;
    var tel = req.body.telphone;
    var email= req.body.email;

//     console.log(firstName, lastName, email, address, state,city,zipCode,email,tel);
//     var data = {
//         members: [
//             {
//             email_address: email,
//             status: "subscribed",
//             merge_fields: {
//                 FNAME: firstName,
//                 LNME: lastName,
//                 ADDRESS: address,
//                 STATE: state,
//                 CITY: city,
//                 ZIPCODE:zipCode,
//                 // EMAIL: email,
//                 TEL:tel,
//             }
//          }
//     ]
});
// // using stringfy that change object form into json format
// var jsonData = JSON.stringify(data);
// var options= {
//     url: "https://us20.api.mailchimp.com/3.0/lists/3dacd34597",
//     method: "POST",
//    headers: {
//        "Authorization": "girma f31eca45cec795ee9a4b3faf46bddeb0-us20"
//    }

// };
// request(options, function(eror, response, body){
//   if(error) {
//       console.log(error);
//   }else{
//       console.log(response, statusCode);
//   }
// });

// });

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDEMeXfIOUqP4bHU1yeg7UI4Db3tmbgyzs",
    authDomain: "eotc-coldioceses.firebaseapp.com",
    databaseURL: "https://eotc-coldioceses.firebaseio.com",
    projectId: "eotc-coldioceses",
    storageBucket: "eotc-coldioceses.appspot.com",
    messagingSenderId: "950820188866"
  };
  firebase.initializeApp(config);


server.listen(3000, function(){
    console.log("Ears on server" + ' ' + port);
});
