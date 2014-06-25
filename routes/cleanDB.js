

var cleanDB= function() {
console.log("Inside Clean DB Constructor");
};




cleanDB.prototype.cleanAllBlogPosts = function(req, res, callback) {

 console.log("---- Cleaning DB ----");

var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
var db = new mongodb.Db('blogDB', server);

// open database connection
db.open(function(err, db) {
  if(!err) {
      console.log("Connected to the MongoDB BlogDB");

     // access or create Blogs collection
     db.collection('blogs', function(err, collection) {


       // remove all widgets documents
       collection.remove(null,{safe : true}, function(err, result) {
          if (!err) {
              console.log("---- removed all blog posts ----");

              //For Now Until Below Functionality is added:
                //close database
                db.close();
                console.log("---- Database Closed ----");

          }

       });

     });

  }
});



 console.log("Leaving Clean DB Module");

callback(0, "Database Cleaned");
};

module.exports = cleanDB;
