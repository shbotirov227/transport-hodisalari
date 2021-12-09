import React from "react";
import { Link } from "react-router-dom";
import {
    BellIcon,
    SettingIcon,
    UserIcon,
    SearchIcon,
} from "../../assets/icons/icons";

import "./Header.scss";

const Header = ({ title }) => {
    return (
        <div className="Header">
            <h3 className="Header-title">{title}</h3>
            <div className="Header-search">
                <span className="search-icon">
                    <SearchIcon />
                </span>
                <input
                    className="Header-input"
                    type="text"
                    placeholder="Type here..."
                />

                <Link className="Header-btn" to="/signin">
                    <UserIcon />
                    Sign in
                </Link>

                <Link className="Header-btn" to="/signup">
                    <UserIcon />
                    Sign up
                </Link>

                <Link className="Header-btn" to="/settings">
                    <SettingIcon />
                </Link>

                <Link className="Header-btn" to="/">
                    <BellIcon />
                </Link>
            </div>
        </div>
    );
};

export default Header;
