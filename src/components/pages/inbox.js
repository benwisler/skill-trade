import React, { Component } from "react";
import API from "./../utils/API";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { MessageListItem, MessageList } from "./../Message";
import ReactDOM from "react-dom";

class Inbox extends Component {
  state = {
    messages: [],
  };
  componentDidMount() {
    //   console.log(this.props.username)
    this.getMessages(this.props.username);
  }






}