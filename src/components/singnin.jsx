import React, { Component } from "react";
import NavBar from "./Navbar";
import "./row.css";
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
      <div className="body">
        <NavBar />
        <div className="container mh-70 col-md-6 offset-md-3 col-xs-12">
          <div className="card card-default">
            <div className="card-header">
              <h2 className="text-info">Create a account</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="control-label">Username</label>
                  <input
                    onChange={(e) => this.getUsername(e)}
                    className="form-control"
                    placeholder="type a Username"
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Email:</label>
                  <input
                    onChange={(e) => this.getEmail(e)}
                    className="form-control"
                    placeholder="You Email.."
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">password:</label>
                  <input
                    onChange={(e) => this.getPassword1(e)}
                    className="form-control"
                    type="password"
                    placeholder="type a Strong Password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">
                    password Confirmation:
                  </label>
                  <input
                    onChange={(e) => this.getPassword2(e)}
                    className="form-control"
                    type="password"
                    placeholder="Confirm your password"
                    name="password2"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={(e) => this.Submit(e)}
                    className="btn btn-outline-success m-l-2"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
