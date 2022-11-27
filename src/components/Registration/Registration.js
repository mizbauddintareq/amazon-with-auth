import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Registration = () => {
  const [error, setError] = useState(null);

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Password didn't match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 char at least");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        setError(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="md:w-6/12 mx-auto">
      <div>
        <h3 className="text-3xl text-center">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs mx-auto ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirm"
              placeholder="Re type your password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs mx-auto my-4">
            <button className="btn bg-orange-400 hover:bg-orange-400 border-0 font-semibold ">
              Sign Up
            </button>
          </div>
          <div className="form-control w-full max-w-xs  mx-auto">
            <label className="label">
              <small>
                Already have an account{" "}
                <Link to="/Login" className="text-orange-400 underline">
                  Login
                </Link>
              </small>
            </label>
          </div>
          {error && (
            <div className="alert alert-error shadow-lg form-control w-full max-w-xs  mx-auto">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Registration;
