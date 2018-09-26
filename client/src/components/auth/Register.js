import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevNet account</p>
              <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onInputChange}
                  />
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onInputChange}
                  />
                </div>
                <input className="btn btn-info btn-block mt-4" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
