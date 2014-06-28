

var fileSystemWriter= function() {

console.log("Inside the Constructor");
};


fileSystemWriter.prototype.fileOutput = function(text) {

console.log("Inside fileOutput Function");

var fs = require('fs');
fs.writeFile("logging/logging.txt", "<entry>" + "<username>" + text.body.username + "</username>" +"</entry>", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});


};

module.exports = fileSystemWriter;
