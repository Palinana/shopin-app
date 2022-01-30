import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div class="navbar-container">
                <div class="navbar-brand">
                    <a href="index.html">
                        <img src="img/logo.svg" alt="SHOPIN" />
                    </a>
                </div>

                <div class="navbar-nav-left">
                    Search
                </div>

                <ul class="navbar-nav-right">
                    <li>
                        <button class="btn btn-dark-outline">
                            <NavLink to='/'>
                            Sign in
                            </NavLink>
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-dark">
                            <NavLink to='/'>
                                Join now
                            </NavLink>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
