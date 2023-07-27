import React, { Component } from "react";
import "./LoginHome.css";
import { Grid, Paper } from "@mui/material";
import theSpeedSimple from "../../images/TheSpeedSimple.jpg";
import { app } from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

class LoginHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIN: true,

      //signIN
      signin_email: null,
      signin_username: null,
      signin_password: null,

      //signup
      signup_name: null,
      signup_username: null,
      signup_email: null,
      signup_password: null,
    };
  }
  switchPanel = () => {
    if (this.state.signIN) this.setState({ signIN: false });
    else this.setState({ signIN: true });
  };
  signUP = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      this.state.signup_email,
      this.state.signup_password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        let payload = {
          uuid: user.uid,
          username: this.state.signup_name,
          email: this.state.signup_email,
        };

        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8888/api/h/s", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.reload();
          })
          .catch((error) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  signInMethod = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      this.state.signin_email,
      this.state.signin_password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let payload = {
          uuid: user.uid,
          email: this.state.signin_email,
          username: this.state.signin_username,
        };
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        };
        fetch("http://localhost:8888/api/h/ghbe", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("user", JSON.stringify(data));
            window.location.reload();
          })
          .catch((error) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // curl -i -X OPTIONS -H "Origin: http://127.0.0.1:3000" \
  //   -H 'Access-Control-Request-Method: POST' \
  //   -H 'Access-Control-Request-Headers: Content-Type, Authorization' \
  //   "https://localhost:8888/api/h/ghbe"

  render() {
    return (
      <div className="main__Containter">
        <Grid className="main__content" container>
          <Grid item xs={7}>
            <div className="theSpeedLogo">
              <img src={theSpeedSimple} alt="theSpeedlogo" />
            </div>
            <div>
              <h1 className="text">
                The Speed brings together all things Motorsports
              </h1>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Paper className="logincard__container">
              {this.state.signIN === true ? (
                <div className="login__panel">
                  <div>
                    <input
                      onChange={(event) => {
                        this.state.signin_email = event.currentTarget.value;
                      }}
                      type="text"
                      className="login__input"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <input
                      onChange={(event) => {
                        this.state.signin_password = event.currentTarget.value;
                      }}
                      type="password"
                      className="login__input"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <button
                      onClick={this.signInMethod}
                      className="login__button"
                    >
                      Log In
                    </button>
                  </div>
                  <div>
                    <div className="forget_Text">Forgotten password</div>
                  </div>
                  <div>
                    <div className="divider"></div>
                  </div>
                  <div>
                    <button className="login__createnew" onClick={this.switchPanel}>
                      Create New Account
                    </button>
                  </div>
                </div>
              ) : (
                <div className="login__panel">
                  <div>
                    <input
                      onChange={(event) => {
                        this.state.signup_name = event.currentTarget.value;
                      }}
                      type="text"
                      className="login__input"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      onChange={(event) => {
                        this.state.signup_email = event.currentTarget.value;
                      }}
                      type="text"
                      className="login__input"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <input
                      onChange={(event) => {
                        this.state.signup_password = event.currentTarget.value;
                      }}
                      type="password"
                      className="login__input"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <button onClick={this.signUP} className="login__button">
                      Sign Up
                    </button>
                  </div>
                  <div>
                    <div onClick={this.switchPanel} className="forget_Text">
                      Already have Account?
                    </div>
                  </div>
                </div>
              )}
            </Paper>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginHome;
