

var newPost= function() {
console.log("Inside the Constructor");
}; 

newPost.prototype.createBlogPost = function(req, res) { 

 console.log("---- Creating Blog Post ----"); 
   
    
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
               if(err) {
                  console.log(err);
               } else {
               
                console.log("---- Blog Post Created ----");

                 // return all documents
                 collection.find().toArray(function(err, docs) {
                    console.log(docs);

                    //close database
                    db.close();
                 });
               }
            });
            
          }
          
       });
      
        
     });
    
  }
});

 console.log("Leaving BlogPost Module");

};

module.exports = newPost;