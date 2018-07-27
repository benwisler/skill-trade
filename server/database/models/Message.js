var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    receiver: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    sender: {
        type:String,
        required: true,
    }
});
var Message = mongoose.model("Message", MessageSchema);

module.exports = Message;