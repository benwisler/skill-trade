import axios from "axios";

export default {
  // Gets all books
  getUser: function(username) {
      console.log("here API")
    return axios.get("/user/" + username);
  },
  sendMessage: function(receiverData) {
      console.log("message API")
      return axios.post("/user/send", receiverData)
  },
  deleteMessage: function(messageData) {
    console.log("message API" + messageData.id)
    return axios.delete("/message/delete/"+ messageData.username+"/"+messageData.id)
},
  getMessageBody: function(id) {
      console.log("here API body" + id);
      return axios.get("/message/" + id);
  }
};