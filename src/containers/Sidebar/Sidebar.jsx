import React from "react";
import { Link } from "react-router-dom";

import SidebarBtn from "../../components/SidebarBtn/SidebarBtn";
import {
    HomeIcon,
    Logo,
    SettingBtnIcon,
    SignInIcon,
    StatisticsIcon,
    MapIcon,
} from "../../assets/icons/icons";

import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <Link to="/" className="Sidebar-title">
                <Logo fill="#718096" className="Logo" />
                <h4>OCHIQ MA'LUMOTLAR PORTALI</h4>
            </Link>

            <Link to="/">
                <SidebarBtn title="Home" icon={<HomeIcon />} />
            </Link>

            <Link to="/map">
                <SidebarBtn title="Map" icon={<MapIcon />} />
            </Link>
            <Link to="/settings">
                <SidebarBtn title="Settings" icon={<SettingBtnIcon />} />
            </Link>
            <Link to="/signin">
                <SidebarBtn title="Sign In" icon={<SignInIcon />} />
            </Link>

            <Link to="/statistics">
                <SidebarBtn title="Statistics" icon={<StatisticsIcon />} />
            </Link>
        </div>
    );
};

export default Sidebar;
