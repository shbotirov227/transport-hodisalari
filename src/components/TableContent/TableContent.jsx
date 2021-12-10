import React from "react";
import "./TableContent.scss";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";


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
            <div style={{ width: "15%" }}>
                <h4 style={{ marginBottom: "10px" }}>{accidentType}</h4>
                <span>{accidentDate}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 style={{ marginBottom: "10px" }}>
                    {vehicleBrand} {vehicleModel}
                </h4>
                <span>Ranggi: {vehicleColor}</span>
            </div>
            <h4 style={{ width: "100px" }}>{roadPart}</h4>
            <AccordionItemButton>{btn}</AccordionItemButton>
            </div>
        // </div>
    );
};

export default TableContent;
