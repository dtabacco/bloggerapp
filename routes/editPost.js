var session = require('express-session');

var editPost= function() {
console.log("Inside the Constructor");
};

editPost.prototype.retrieveBlogPost = function(req, res, callback) {

 console.log("---- Getting Blog Post ----");


var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
var db = new mongodb.Db('blogDB', server);

// open database connection
db.open(function(err, db) {
  if(!err) {
      console.log("Connected to the MongoDB BlogDB");

     // access or create Blogs collection
     db.collection('blogs', function(err, collection) {

                 // return all documents
                 collection.find().toArray(function(err, docs) {
                    console.log(docs);

                    //close database
                    db.close();
                 });

            });

        }

     });


 console.log("Leaving BlogPost Module");

callback(0, "Confirmation");
};

module.exports = editPost;
