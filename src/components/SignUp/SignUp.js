import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import logo from "../../images/GLogo.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [user1, loading1, error1] = useAuthState(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
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
        <h4 className="text-center text-secondary">Sign Up</h4>

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
        <p className="mt-5 text-center">
          Already have an account ?
          <Link to="/signin">
            <button className="btn btn-secondary rounded ms-2"> Sign In</button>
          </Link>
        </p>
      </form>
      {/* <div className="mx-auto d-block text-center border w-50 rounded shadow-sm">
        <p>
          Already have an account ?
          <Link to="/signin">
            <button className="btn btn-secondary rounded ms-2"> Sign In</button>
          </Link>
        </p>
      </div> */}
    </div>
  );
};

export default SignUp;
