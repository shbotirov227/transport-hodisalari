import React from "react";

import "./SidebarBtn.scss";

const SidebarBtn = ({ title, icon, active }) => {
    return (
        <div className={`SidebarBtn ${active ? "active" : ""}`}>
            <div className="SidebarBtn-icon">{icon}</div>
            <h4 className="SidebarBtn-title">{title}</h4>
        </div>
    );
};

export default SidebarBtn;
