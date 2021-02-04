import React, { Component } from "react";
import NavBar from "./Navbar";
import "./row.css";
import { Link } from "react-router-dom";
import axios from "axios";

class SignIn extends Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  };
  getUsername = (e) => {
    this.setState({ username: e.target.value });
    console.log(this.state.username);
  };
  getEmail = (e) => {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  };
  getPassword1 = (e) => {
    this.setState({ password1: e.target.value });
    console.log(this.state.password1);
  };
  getPassword2 = (e) => {
    this.setState({ password2: e.target.value });
    console.log(this.state.password2);
  };
  Submit = (e) => {
    axios
      .post("https://mybestbook.herokuapp.com/register", {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password1,
        password1: this.state.password2,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();
  };
  render() {
    return (
      <div className="bod">
        <div className="form">
          <h3 className="title"> Sign in </h3>
          <form method="post">
            <input
              className="input"
              placeholder="Username.."
              onChange={(e) => this.getUsername(e)}
              required
            ></input>

            <br />
            <input
              className="input"
              onChange={(e) => this.getEmail(e)}
              placeholder="Email.."
              type="email"
              required
            />
            <br />
            <input
              className="input"
              onChange={(e) => this.getPassword2(e)}
              placeholder="password1.."
              type="password"
              required
            />
            <br />
            <input
              className="input"
              onChange={(e) => this.getPassword2(e)}
              placeholder="Password Confirmation.."
              type="password"
              required
            />
            <br />
            <button
              type="submit"
              onClick={(e) => this.Submit(e)}
              className="btn btn-primary"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
