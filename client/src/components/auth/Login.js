import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: ""
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      password: this.state.password
    };
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign In to your DevNet account</p>
              <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangeInput}
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

export default Login;
