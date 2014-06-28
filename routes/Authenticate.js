

var Authenticate= function() {
console.log("Inside the Constructor");
<<<<<<< HEAD
};

Authenticate.prototype.verifyCredentials = function(req, res) {

 console.log("---- Authenticating User ----");
   console.log("Email: " + req.body.email);
   console.log("Password: " + req.body.password);
  // Check the user credentials. This is normally getting done by querying a db, but
=======
};

Authenticate.prototype.verifyCredentials = function(req, res) {

 console.log("---- Authenticating User ----");
   console.log("Email: " + req.body.email);
   console.log("Password: " + req.body.password);
  // Check the user credentials. This is normally getting done by querying a db, but
>>>>>>> github_bloggerapp/master
    // let's make it simple here.
    if (req.body.email == 'dtabacco@gmail.com' && req.body.password == 'yellow') {
        res.locals.user = { name : req.body.email }
       // req.session.loggedIn = true;
<<<<<<< HEAD
        console.log("---- Authentication Successful ----");

    }
    else {
        console.log("---- Authentication Failed ----");
        res.locals.user = { name : "Failed Login" }
  //      res.render('dataEntryConfirmation', { title: 'Failed Login' });
    }


};

module.exports = Authenticate;
=======
        console.log("---- Authentication Successful ----");

    }
    else {
        console.log("---- Authentication Failed ----");
        res.locals.user = { name : "Failed Login" }
  //      res.render('dataEntryConfirmation', { title: 'Failed Login' });
    }


};

module.exports = Authenticate;
>>>>>>> github_bloggerapp/master
