var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });

});

/* POST data to authenticate */
router.post('/authenticate', function(req, res) {

  //Call Authenticate Module and pass Request and Response
 var Authenticate = require('./Authenticate');
 var auth = new Authenticate();
 auth.verifyCredentials(req, res);

 //Render Page   - Should be Welcome Page
res.render('welcome');
});


/* POST data to newPost */
router.post('/newPost', function(req, res) {


console.log('New Post Recieved');

 var async = require('async');

 try {
   async.waterfall([

    function writePost(callback) {
        //Call NewPost Module and pass Request and Response
   //     var newPost = require('./newPost');
        console.log('Going into Module  Constructor Now');
    //    var myNewPost = new newPost();
        console.log('Going into Module Body Now');
   //     myNewPost.createBlogPost(req, res);
        console.log('ready to Move to next Async waterfall Phase');
    },
    function generateView(callback) {
        console.log('New Post Completed - Generating Welcome Page');
        //Render Page   - Should be Welcome Page
        res.render('welcome');
    }
    ],
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    }
    catch(err) {
   console.log(err);
}




});



//COPY   //Trying to Use Async for this one.
// Not Working
/* POST data to newPost */
router.post('/newPost2', function(req, res) {

console.log('New Post2 Recieved');
console.log('Async');

 var async = require('async');

 try {
   async.waterfall([

    function writePost(callback) {
        //Call NewPost Module and pass Request and Response
        var newPost = require('./newPost');
        console.log('Going into Module  Constructor Now');
        var myNewPost = new newPost();
        console.log('Going into Module Body Now');
        myNewPost.createBlogPost(req, res);
        console.log('ready to Move to next Async waterfall Phase');
    },
    function generateView(callback) {
        console.log('New Post Completed - Generating Welcome Page');
        //Render Page   - Should be Welcome Page
        res.render('welcome');
    }
    ],
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    }
    catch(err) {
   console.log(err);
}

});

//COPY 3   //Trying to Use CallBack for this one
// Not Working
/* POST data to newPost */
router.post('/newPost3', function(req, res) {

console.log('New Post3 Recieved');


 try {

    console.log('Starting Try Block');

    //Call NewPost Module and pass Request and Response
    var newPost = require('./newPost');

    console.log('Going into Module  Constructor Now');
    var myNewPost = new newPost();

    console.log('Going into Module Body Now');
    myNewPost.createBlogPost(req, res, function(err, data));

    if (err) throw err;

    console.log('New Post Created in Database - Generating Welcome Page');
    //Render Page   - Should be Welcome Page
    res.render('welcome');



    }
    catch(err) {
       console.log(err);
    }

});

























/* POST data to collector */
router.post('/collector', function(req, res) {

 console.log("---- Debug Logging inside the data collector ----");
    console.log("Username: " + req.body.username);
    console.log("Date: " + req.body.dateOfEntry);
    console.log("Number Of Steps: " + req.body.NumberOfSteps);
    console.log("Distance In Miles: " + req.body.distanceInMiles);
    console.log("Activities: " + req.body.activity);
    console.log("---- End Debug Logging inside the data collector ----");


  //New Feature
  //Open MongoDB Connection and store data


    //Engage our "Model"
 var fileSystemWriter = require('./fileSystemWriter');
 var fsWriter = new fileSystemWriter();
 fsWriter.fileOutput(req);

    //Original File output Code, which was moved to a separate fileSystemWriter file for organization
    /*   var fs = require('fs');
    fs.writeFile("logging/logging.txt", "<entry>" + "<username>" + req.body.username + "</username>" +"</entry>", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
    });
     */
res.locals.user = { name : req.body.username }
    //Engage our "View"
    //After processing logic, show a "View" back to the user
  res.render('dataEntryConfirmation', { title: 'Data Entry Confirmation' });
});



module.exports = router;
