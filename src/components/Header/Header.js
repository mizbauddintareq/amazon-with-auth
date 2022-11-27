import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div className=" bg-slate-900">
      <div className="navbar text-white mx-auto lg:w-10/12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52"
            >
              <li>
                <Link to="/orders">Order</Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Order Review</a>
              </li>
              <li>
                <Link to="/inventory">Manage Inventory</Link>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/orders">Order</Link>
            </li>
            <li tabIndex={0}>
              <a>Order Review</a>
            </li>
            <li>
              <Link to="/inventory">Manage Inventory</Link>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
