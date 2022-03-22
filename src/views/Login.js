import React, { useState } from "react";
import { Redirect } from "react-router";
import Header from "../components/UI/Header";
import "./Login.css";
import { db, auth } from "../modules/FireAuthDb";
import InputText from "../components/UI/InputText";
import Button from "../components/UI/Button";

export default function Login() {
  const [userInfor, setUserInfor] = useState({ Email: "", Password: "" });
  const [userPath, setUserPath] = useState("/");

  const updateState = (key, value) => {
    setUserInfor({
      ...userInfor,
      [key]: value,
    });
  };

  const userLogin = () => {
    console.log("in user login");
    console.log(userInfor.Email);
    console.log(userInfor.Password);
    auth
      .signInWithEmailAndPassword(userInfor.Email, userInfor.Password)
      .then(() => {
        console.log("sucess");
        // get user role
        getUserRole().then((role) => {
          if (role == "developer") {
            setUserPath("/developer");
          } else if (role == "interviewer") {
            setUserPath("/interviewer");
          } else {
            console.log("Could not get role");
          }
        });
      })
      .catch(() => {
        console.log("Could not log in, please input again");
      });
  };
  const getUserRole = () => {
    return new Promise((resolve) => {
      console.log("in get user role");
      console.log(auth.currentUser.uid);
      const UID = auth.currentUser.uid;
      db.ref("Users")
        .child(UID)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val().Role);
            resolve(snapshot.val().Role);
          } else {
            console.log("Data not found");
          }
        })
        .catch(() => {
          console.log("Could not get data");
        });
    });
  };

  if (userPath != "/") {
    return <Redirect to={userPath} />;
  } else {
    return (
      <>
        <Header />
        <div className="container-fluid layout">
          <div className="row row-layout">
            <h3 className="title">Take a test, Land a job</h3>
          </div>
          <div className="row row-layout">
            {/* <form action="" id="login-form"> */}
            <InputText
              type="email"
              name="login-email"
              title="Email:"
              inputKey="Email"
              updateState={updateState}
              placeholder=""
            />
            <InputText
              type="password"
              name="login-password"
              title="Password:"
              inputKey="Password"
              updateState={updateState}
              placeholder=""
            />
            <div className="button-layout">
              {/* <Link style={{textDecoration: 'none'}} to="/days-left"> */}
              <Button
                type="submit"
                name="login-btn"
                title="Log In"
                onClick={userLogin}
              />
              {/* </Link> */}
            </div>
            {/* </form> */}
          </div>
        </div>
      </>
    );
  }
}
