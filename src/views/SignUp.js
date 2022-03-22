import React, { useState } from "react";
import { Redirect } from "react-router";
import { db, auth } from "../modules/FireAuthDb";
import InputText from "../components/UI/InputText";
import Button from "../components/UI/Button";

export default function SingUp() {
  const [userProfile, setUserProfile] = useState({
    Role: "",
    Name: "",
    Email: "",
    Password: "",
  });
  const [userPath, setUserPath] = useState("/sign-up");

  const updateState = (key, value) => {
    setUserProfile({
      ...userProfile,
      [key]: value,
    });
  };
  const userSignUp = () => {
    auth
      .createUserWithEmailAndPassword(userProfile.Email, userProfile.Password)
      .then(() => {
        // write user information into database
        console.log("in userSignUp");
        const UID = auth.currentUser.uid;
        db.ref("Users").child(UID).set(userProfile);

        // Sign out after sign up
        auth
          .signOut()
          .then(() => {
            setUserPath("/login");
            console.log("sign out sucessfully!");
          })
          .catch((err) => {
            console.log("Could not sign out");
          });
      })
      .catch(() => {
        console.log("Could not sign up, please input correct format");
      });
  };

  if (userPath == "/login") {
    return <Redirect to={userPath} />;
  } else {
    return (
      <>
        <InputText
          type="text"
          name="signup-name"
          title="Name:"
          inputKey="Name"
          updateState={updateState}
        />
        <InputText
          type="email"
          name="signup-email"
          title="Email:"
          inputKey="Email"
          updateState={updateState}
          placeholder="name@example.com"
        />
        <InputText
          type="password"
          name="signup-password"
          title="Password:"
          inputKey="Password"
          updateState={updateState}
          placeholder="at least 6 characters"
        />
        <InputText
          type="text"
          name="role"
          title="Role:"
          inputKey="Role"
          updateState={updateState}
        />
        <Button
          type="submit"
          name="signup-btn"
          title="Sign Up"
          onClick={userSignUp}
        />
      </>
    );
  }
}
