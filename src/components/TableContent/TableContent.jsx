import React from "react";
import "./TableContent.scss";

const TableContent = ({ regionName, districtName, accidentType, accidentDate }) => {
    return (
        <div className="TableContent">
            <div>
                <img src="" alt="" />
                <div style={{width: '190px'}}>
                    <h4>{regionName}</h4>
                    <span>{districtName}</span>
                </div>
            </div>
            <div style={{width: '15%'}}>
                <h4>{accidentType}</h4>
                <span>{accidentDate}</span>
            </div>
            <span>Online</span>
            <h4>14/06/21</h4>
            <span>Edit</span>
        </div>
    );
};

export default TableContent;
