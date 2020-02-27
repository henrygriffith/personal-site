import React from "react";
import axios from "axios";
import { TextField } from "@material-ui/core";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.showMessage = this.showMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  }
  showMessage(status) {
    return status === "success" ? (
      <div className="reply successMessage">Woohoo</div>
    ) : status === "fail" ? (
      <div className="reply failMessage"></div>
    ) : null;
  }
  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then(response => {
      if (response.data.msg === "success") {
        console.log("success");
        this.resetForm();
        this.setState({ status: "success" });
      } else if (response.data.status === "fail") {
        console.log("fail");
        this.setState({ status: "fail" });
      }
    });
  }

  render() {
    return (
      <div id="contact-container">
        <div id="contact-header">
          <h1 id="contact-title">Contact</h1>
        </div>
        <div id="form-container">
          <form
            id="main-form"
            action="/send"
            onSubmit={event => this.handleSubmit(event)}
            method="POST"
          >
            <div id="input-container">
              <div className="input-box">
                <h2>Name:</h2>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="input-box">
                <h2>Email:</h2>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  label="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <h2>Message:</h2>
            <textarea
              className="form-input"
              type="text"
              name="message"
              label="Write a message..."
              value={this.state.message}
              onChange={this.handleChange}
            ></textarea>
            <input type="submit" value="submit"></input>
          </form>

          {this.showMessage()}
        </div>
      </div>
    );
  }
}

export default Contact;
