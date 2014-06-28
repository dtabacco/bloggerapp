

var fileSystemWriter= function() {

console.log("Inside the Constructor");
<<<<<<< HEAD
};


fileSystemWriter.prototype.fileOutput = function(text) {
=======
};


fileSystemWriter.prototype.fileOutput = function(text) {
>>>>>>> github_bloggerapp/master

console.log("Inside fileOutput Function");

var fs = require('fs');
fs.writeFile("logging/logging.txt", "<entry>" + "<username>" + text.body.username + "</username>" +"</entry>", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> github_bloggerapp/master


};

<<<<<<< HEAD
module.exports = fileSystemWriter;
=======
module.exports = fileSystemWriter;
>>>>>>> github_bloggerapp/master
