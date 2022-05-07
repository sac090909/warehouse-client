import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/GLogo.svg";
import alternative from "../../images/alternative.png";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [signInWithaGoogle, user2, loading2, error2] =
    useSignInWithGoogle(auth);
  const [user1, loading1, error1] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Sent");
    } else {
      toast("Email is empty! Please provide ...");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
    console.log(error, error1);
  };
  if (loading1) {
    return <Loading></Loading>;
  }
  let signInErrorElement;
  if (error || error2) {
    signInErrorElement = (
      <p className="text-danger text-center">
        {" "}
        {error?.message} {error2?.message}
      </p>
    );
  }
  if (user1) {
    // navigate("/");
    navigate(from, { replace: true });
  }
  return (
    <div className="w-50 mx-auto d-block my-5 border p-5 rounded-4 shadow-sm bg-body ">
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      {/* <img
        style={{ width: "50px" }}
        className="image-fluid"
        src={alternative}
        alt=""
      /> */}
      <p className="text-center my-3">
        Forget password ? Click
        <button
          className="btn-link border-0 rounded text-decoration-none"
          onClick={resetPassword}
        >
          {" "}
          Reset Password
        </button>
      </p>
      <p className="text-center">
        New User ? Please click
        <Link className="ms-2 text-decoration-none" to="/signup">
          Sign Up
        </Link>
      </p>

      <p className="text-center my-3 text-secondary">OR</p>
      <div>
        <div className="p-3">
          <button
            onClick={() => signInWithaGoogle()}
            className="btn w-100 border"
          >
            Sign in with <img src={logo} alt="" />
            oogle
          </button>
        </div>
        {signInErrorElement}
      </div>
    </div>
  );
};

export default SignIn;
