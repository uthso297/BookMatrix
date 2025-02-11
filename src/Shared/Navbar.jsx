import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handeLogout = () => {
        signOutUser();
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully Log Out",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const links = (
        user ?
            <>
                <NavLink to="/" className="text-white hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </NavLink>
                <NavLink to="/allBooks" className="text-white hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                    All Books
                </NavLink>
                <NavLink to="/addBook" className="text-white hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                    Add Books
                </NavLink>
                <NavLink to="/borrowed" className="text-white hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                    Borrowed Books
                </NavLink>
            </>
            :
            <>
                <NavLink to="/" className="text-white hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </NavLink>
                <NavLink to="/allBooks" className="text-white hover:text-indigo-500 px-3 py-2 rounded-md text-sm font-medium">
                    All Books
                </NavLink>

            </>
    );

    const buttons = (
        user ?

            <>

                <div className="flex items-center justify-center gap-5">
                    <div className="relative group">
                        <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt={user?.displayName} />
                        <div className="absolute left-0 top-full mt-2 w-max p-2 text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                            {user?.displayName}
                        </div>
                    </div>
                    <button
                        onClick={handeLogout}
                        className="inline-block px-3 py-2 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                    >
                        Log Out
                    </button>
                </div>

            </>


            :

            <>
                <Link to="/login">
                    <button className="inline-block px-3 py-2 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base">
                        Login
                    </button>
                </Link>
                <Link to="/register">
                    <button className="inline-block px-3 py-2 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base">
                        Register
                    </button>
                </Link>
            </>
    );

    return (
        <div className="navbar bg-[#18150e] shadow-md fixed z-10 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a href="/" className="text-lg lg:text-4xl text-white">BookMatrix</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {
                    links
                }
            </div>
            <div className="navbar-end flex gap-3">
                {
                    buttons
                }
            </div>
        </div>
    );
};

export default Navbar;


