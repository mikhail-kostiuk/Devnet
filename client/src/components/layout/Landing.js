import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Social Network</h1>
                <p className="lead">
                  Create a developer profile, share posts and get help from
                  other developers
                </p>
                <hr />
                <a className="btn btn-lg btn-info mr-2" href="register.html">
                  SIGN UP
                </a>
                <a className="btn btn-lg btn-light" href="login.html">
                  LOG IN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
