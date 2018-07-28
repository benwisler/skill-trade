const db = require("../database/models");
const Message = require("./../database/models/Message")
module.exports = {
    findMessages: function(req, res) {
        db.User.findById({ _id: req.params.id })
        .populate("messages")
        .then(function(dbUser){
            res.json(dbUser);
        })
        .catch(function(err){
            res.json(err)
        });

    },
    getUser: function(req, res) {
        console.log("HERE:CONTROLLERS")
        db.User.findOne({ username: req.params.username })
        .populate("messages")
        .then(function(dbUser){
            console.log(dbUser)
            res.json(dbUser);
        })
        .catch(function(err){
            res.json(err)
        });

    },
    sendMessage: function(req, res) {
        console.log("!!!!HERE:CONTROLLERS" + req.body.sender)
        db.Message.create(req.body)
        .then(function(dbMessage){
            console.log(dbMessage);
            return db.User.findOneAndUpdate({username: dbMessage.receiver},{ $push: {message: dbMessage._id}}, {new: true});
        })
        .catch(function(err){
            res.json(err)
        });
    },
    getMessageBody: function(req, res) {
        console.log("HERE MESSAGE BODY CONTROLLER" + req.params.id)
        Message.find({ _id: req.params.id} )
        .then(function(dbMessage) {
            console.log(dbMessage + "??????");
            res.json(dbMessage)
        })
        .catch(function(err){
            res.json(err)
        });
    },
    deleteMessage: function(req, res) {
        // req.map(element => {
        //     console.log(element)
        // })
        // console.log(JSON.stringify(messageData) + "!!")
        // console.log("CONTROLLERS" + req.id + "!!")
        console.log(req.params.id)
        console.log(req.params.username)
        db.User.findOneAndUpdate({username : req.params.username}, 
            { $unset: { message: req.params.id }}, 
             function (err, doc) {
                                if (!err) {
                                    res.status(200).send()
                                } else {
                                    res.render('error', { error: err })
                                }
                            })
        // var oId = new mongo.ObjectID(req.params.id);
        // db.User
        // .findOneAndUpdate({ username: req.params.username }, { $pull: {"message": {"_id": { "$oid": req.params.id  }}}})
    //     .findByIdAndRemove(req.params.id)
    // //     // .update({ message: req.params.id}, {$pullAll: {message: { _id = req.params.id}}})
    //     .then(dbModel => {
    //         // dbModel.remove()
    //         console.log(dbModel)
    //         console.log("HERE 66")

    //     }
    // )
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    }
    

    // collection.findOneAndUpdate(
    //     {_id: req.query.id},
    //     {$push: {items: item}},
    //     {safe: true, upsert: true},
    //     function(err, model) {
    //         console.log(err);
    //     }

}

