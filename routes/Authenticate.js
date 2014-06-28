var session = require('express-session');

var Authenticate= function() {
console.log("Inside the Constructor");
};

Authenticate.prototype.verifyCredentials = function(req, res) {

 console.log("---- Authenticating User ----");
   console.log("Email: " + req.body.email);
   console.log("Password: " + req.body.password);
  // Check the user credentials. This is normally getting done by querying a db, but
    // let's make it simple here.
    if (req.body.email == 'dtabacco@gmail.com' && req.body.password == 'yellow') {
        res.locals.user = { name : req.body.email }
       // req.session.loggedIn = true;
        console.log("---- Authentication Successful ----");

        //Session Testing
        req.session.loggedInUser = req.body.email;
    }
    else {
        console.log("---- Authentication Failed ----");
        res.locals.user = { name : "Failed Login" }
  //      res.render('dataEntryConfirmation', { title: 'Failed Login' });
    }


};

module.exports = Authenticate;
