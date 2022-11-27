import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="md:w-6/12 mx-auto">
      <div>
        <h3 className="text-3xl text-center">Sign Up</h3>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default Registration;
