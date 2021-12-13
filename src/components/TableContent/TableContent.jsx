import React from "react";
import "./TableContent.scss";


const TableContent = ({
    regionName,
    districtName,
    accidentType,
    accidentDate,
    vehicleModel,
    vehicleBrand,
    vehicleColor,
    roadPart,
    btn
}) => {
    return (
        // <div className="TableContent">
            <div className="TableContent">
                {/* {items.map((item) => ( */}
                {/* <AccordionItem>
                    <AccordionItemHeading></AccordionItemHeading>
                    <AccordionItemPanel>Hello</AccordionItemPanel>
                    <AccordionItemButton>Btn</AccordionItemButton>
                </AccordionItem> */}
                {/* ))} */}
            <div>
                <div style={{ width: "190px" }}>
                    <h4 style={{ marginBottom: "10px" }}>{regionName}</h4>
                    <span>{districtName}</span>
                </div>
            </div>
            <div style={{ width: "190px" }}>
                <h4 style={{ marginBottom: "10px" }}>{accidentType}</h4>
                <span>{accidentDate}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "150px"}}>
                <h4 style={{ marginBottom: "10px" }}>
                    {vehicleBrand} {vehicleModel}
                </h4>
                <span>Ranggi: {vehicleColor}</span>
            </div>
            <h4 style={{ width: "200px" }}>{roadPart}</h4>
            </div>
        // </div>
    );
};

export default TableContent;
