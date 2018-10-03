import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import "./App.css";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import setAuthToken from "./utils/setAuthToken";
import * as actionTypes from "./actions/actionTypes";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user data
  const decodedUserData = jwt_decode(localStorage.jwtToken);

  // Set current user
  store.dispatch({
    type: actionTypes.SET_CURRENT_USER,
    payload: decodedUserData
  });
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
