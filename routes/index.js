var express = require('express');
var router = express.Router();
var session = require('express-session');


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

   //Retrieve My last 10 Posts
    var getUserBlogPosts = require('./getUserBlogPosts');

    console.log('Going into Module  Constructor Now');
    var mygetUserBlogPosts = new getUserBlogPosts();

    console.log('Going into Module Body Now');
    mygetUserBlogPosts.getBlogPosts(req, res, function doneRetrievingPosts(err, data) {

    if (err) { console.log("error") };

    console.log("Callback has been called");
    console.log('Posts Retrieved from the DB Created in Database - Generating Confirmation Page');

    //Debug
    console.log("Debug Results");
    console.log("Data Length:" +data.length);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].title);
    }

    console.log(req.session.loggedInUser);

     //Render Page   - Should be Welcome Page
     //  res.render('welcome',  { title: 'Welcome', myPosts: '5' } );
        res.render('welcome',  { title: 'Welcome', myPosts: JSON.stringify(data) } );

    //    res.render('welcome',  { title: 'Welcome', myPosts: data[0].title } );
        });


});



/* POST data to newPost */
router.post('/newPost', function(req, res) {

console.log('New Post  Recieved');

    //Call NewPost Module and pass Request and Response
    var newPost = require('./newPost');

    console.log('Going into Module  Constructor Now');
    var myNewPost = new newPost();

    console.log('Going into Module Body Now');
    myNewPost.createBlogPost(req, res, function donePosting(err, data) {

    if (err) { console.log("error") };

    console.log("Callback has been called");
     console.log('New Post Created in Database - Generating Confirmation Page');
    //Render Page   - Should be Welcome Page
    res.render('confirmation', { title: 'Post Saved!' });

    });

});


/* POST data to newPost */
router.post('/cleanDB', function(req, res) {

console.log('CleanDB request Recieved');

    //Call NewPost Module and pass Request and Response
    var cleanDB = require('./cleanDB');

    console.log('Going into Module  Constructor Now');
    var mycleanDB = new cleanDB();

    console.log('Going into Module Body Now');
    mycleanDB.cleanAllBlogPosts(req, res, function doneCleaning(err, data) {

    if (err) { console.log("error") };

    console.log("Callback has been called");
     console.log('New Post Created in Database - Generating Confirmation Page');
    //Render Page   - Should be Welcome Page
    res.render('confirmation', { title: 'Database Deleted!' });

     //   res.render('index', { title: 'Express' });
    });


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
