

var newPost= function() {
console.log("Inside the Constructor");
<<<<<<< HEAD
};

newPost.prototype.createBlogPost = function(req, res, callback) {

 console.log("---- Creating Blog Post ----");

//var username = req.body.username);
 var username = "dtabacco@gmail.com";
 var date = new Date();
 var title = req.body.title;
 var blogcontent = req.body.blogcontent;
 var tags = req.body.tags;

console.log (username, date , title, blogcontent, tags);

=======
};

newPost.prototype.createBlogPost = function(req, res) {

 console.log("---- Creating Blog Post ----");

/*
>>>>>>> github_bloggerapp/master
var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
var db = new mongodb.Db('blogDB', server);

// open database connection
db.open(function(err, db) {
  if(!err) {
      console.log("Connected to the MongoDB BlogDB");

     // access or create Blogs collection
     db.collection('blogs', function(err, collection) {

<<<<<<< HEAD
         var blog1 = {tags: tags, title : title,
                         blogcontent : blogcontent,
                         date : date, username: username};

          collection.insert(blog1, {safe : true},
                        function(err, result) {
        /*
=======

       // remove all widgets documents
       collection.remove(null,{safe : true}, function(err, result) {
          if (!err) {
              console.log("---- removed all blog posts ----");

              //For Now Until Below Functionality is added:
                //close database
                db.close();
                console.log("---- Database Closed ----");


>>>>>>> github_bloggerapp/master
            // create four records
            var blog1 = {id: 1, title : 'First Great Blog',
                         desc : 'greatest Blog of all',
                         price : 14.99, type: 'A'};
            var blog2 = {id: 2, title : 'Second Great Blog',
                         desc : 'second greatest Blog of all',
                         price : 29.99, type: 'A'};
            var blog3 = {id: 3, title: 'third Blog', desc: 'third Blog',
                        price : 45.00, type: 'B'};
            var blog4 = {id: 4, title: 'fourth Blog', desc: 'fourth Blog',
                        price: 60.00, type: 'B'};

            collection.insert([blog1,blog2,blog3,blog4], {safe : true},
                                                    function(err, result) {
<<<<<<< HEAD
          */
            if(err) {
                  console.log(err);
               } else {

=======
               if(err) {
                  console.log(err);
               } else {

>>>>>>> github_bloggerapp/master
                console.log("---- Blog Post Created ----");

                 // return all documents
                 collection.find().toArray(function(err, docs) {
                    console.log(docs);

                    //close database
                    db.close();
                 });
               }
            });
<<<<<<< HEAD



     });

=======

          }

       });


     });

>>>>>>> github_bloggerapp/master
  }
});


<<<<<<< HEAD

 console.log("Leaving BlogPost Module");

callback(0, "Confirmation");
};

module.exports = newPost;
=======
*/
 console.log("Leaving BlogPost Module");

};

module.exports = newPost;
>>>>>>> github_bloggerapp/master
