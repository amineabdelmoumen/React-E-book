import React, { Component } from "react";
import NavBar from "./Navbar";
import "./row.css";
class SignIn extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password1: "",
  };
  get render() {
    return (
      <div>
        <NavBar />
        <div className="container col-md-6 offset-md-3 col-xs-12">
          <div className="card card-default">
            <div className="card-header">
              <h2 className="text-info">Create a account</h2>
            </div>
            <div className="card-body">
              <form method="post">
                <div className="form-group">
                  <label className="control-label">Username</label>
                  <input
                    onChange={this.getUsername()}
                    className="form-control"
                    placeholder="type a Username"
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Email:</label>
                  <input
                    onChange={this.getEmail()}
                    className="form-control"
                    placeholder="You Email.."
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">password:</label>
                  <input
                    onChange={this.getPassword()}
                    className="form-control"
                    placeholder="type a Strong Password"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">
                    password Confirmation:
                  </label>
                  <input
                    onChange={this.getPassword()}
                    className="form-control"
                    placeholder="Confirm your password"
                    name="password2"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={this.Submit}
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
