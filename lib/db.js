var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

//Connect to Cloud Database
var username = "infinity";
var password = "argo*jason";
var address = '@ds029297.mongolab.com:29297/nockmarket';
connect();

//Connect to mongo
function connect() {
  var url = 'mongodb://' + username + ':' + password + address;
  mongoose.connect(url);
}
function disconnect() {mongoose.disconnect()}
