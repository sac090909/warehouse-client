import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/GLogo.svg";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [user1, loading1, error1] = useAuthState(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  if (user1) {
    navigate("/");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto d-block my-5 border p-5 rounded-4 shadow-sm bg-body "
      >
        <h4 className="text-center text-secondary">Sign In</h4>

        <div className="mb-3">
          <input
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            className="form-control"
            placeholder="email"
            required
          />
        </div>

        <div className="mb-3">
          <input
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary w-100">
          Submit
        </button>
      </form>
      <div className="mx-auto d-block text-center border w-50 rounded shadow-sm">
        <div className="mb-2 p-3">
          {" "}
          <button className="btn w-100 border">
            Sign in with <img src={logo} alt="" />
            oogle
          </button>
        </div>
        <p>
          New User ?
          <Link to="/signup">
            <button className="btn btn-secondary rounded ms-2"> Sign Up</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;