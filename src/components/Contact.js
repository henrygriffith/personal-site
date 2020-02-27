import React from "react";
import axios from "axios";

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
      url: "http://localhost:3000/send",
      data: this.state
    }).then(response => {
      if (response.data.status === "success") {
        this.resetForm();
        this.setState({ status: "success" });
      } else if (response.data.status === "fail") {
        this.showMessage("fail");
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
          <form id="main-form" action="/action_page.php">
            <div id="input-container">
              <div className="input-box">
                <h2>Name:</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="  Your name..."
                  value={this.state.name}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="input-box">
                <h2>Email:</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="  Your email..."
                  value={this.state.email}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <h2>Message:</h2>
            <textarea
              type="text"
              name="message"
              placeholder="  Write a message..."
              value={this.state.message}
              onChange={this.handleChange}
            ></textarea>
          </form>
          <input
            type="submit"
            value="submit"
            onClick={e => this.handleSubmit(e)}
          ></input>
          {this.showMessage()}
        </div>
      </div>
    );
  }
}

export default Contact;
