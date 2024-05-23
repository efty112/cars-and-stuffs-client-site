import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li>
            <NavLink
                to="/"
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "white",
                        backgroundColor: "transparent",
                        fontSize: "20px"
                    };
                }}
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/addProduct"
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "white",
                        backgroundColor: "transparent",
                        fontSize: "20px"
                    };
                }}
            >
                Add Product
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/myCart"
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "white",
                        backgroundColor: "transparent",
                        fontSize: "20px"
                    };
                }}
            >
                My Cart
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/logIn"
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "white",
                        backgroundColor: "transparent",
                        fontSize: "20px"
                    };
                }}
            >
                Login
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/aboutUs"
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "white",
                        backgroundColor: "transparent",
                        fontSize: "20px"
                    };
                }}
            >
                About Us
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/contactUs"
                style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "white",
                        backgroundColor: "transparent",
                        fontSize: "20px"
                    };
                }}
            >
                Contact Us
            </NavLink>
        </li>
    </>
    return (
        <div>
            <div className="navbar absolute text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to='/'><p className="px-5 text-4xl font-bold">Cars And Stuffs</p></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/signUp'>
                        <button className="btn-wide bg-red-600 text-white text-xl p-3 rounded-lg">SignUp</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;