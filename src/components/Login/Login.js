import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Login = () => {
  const { signInUser, googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="md:w-6/12 mx-auto">
      <div>
        <h3 className="text-3xl text-center">Login</h3>
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
          <div className="form-control w-full max-w-xs mx-auto my-4">
            <button className="btn bg-orange-400 hover:bg-orange-400 border-0 font-semibold ">
              Login
            </button>
          </div>
          <div className="form-control w-full max-w-xs  mx-auto">
            <label className="label">
              <small>
                New To Ema-Jhon{" "}
                <Link to="/registration" className="text-orange-400 underline">
                  Create an account
                </Link>
              </small>
            </label>
          </div>

          <div className="form-control w-full max-w-xs mx-auto my-4">
            <button
              onClick={handleGoogleLogin}
              className="btn  bg-white text-black hover:bg-white"
            >
              <img
                className="h-6"
                src="https://i.ibb.co/ZmqLNsY/images.png"
                alt=""
              />
              <span className="ml-2 font-semibold">Continue with google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
