import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const email = event.target.email.value;
    const password = event.target.password.value;

    // validate

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?.*[0-9].*[0-9])/.test(password)) {
      setError("please add at least two numbers");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    // Create user in firebase

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset("");
        setSuccess("User has created account successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    // setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    // console.log(event.target.value);
  };
  return (
    <div>
      <h2>Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          required
          id="email"
          placeholder="Enter your email"
        />
        <br />

        <input
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          required
          id="password"
          placeholder="Your password"
        />
        <br />
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
