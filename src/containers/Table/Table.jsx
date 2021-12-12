import React, { useState, useEffect } from "react";
// import { Accordion, AccordionItem, AccordionItemPanel } from "react-accessible-accordion";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import axios from "../../utils/api";
import TableContent from "../../components/TableContent/TableContent";

import "./Table.scss";

const Table = () => {




    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };





    const [data, setData] = useState({
        isFetched: false,
        data: [],
        error: null,
    });

    useEffect(() => {
        axios
            .get("/open_data/")
            .then((res) => {
                // console.log(result);
                setData({
                    isFetched: true,
                    data: res.data.results,
                    error: false,
                });
            })
            .catch((err) => {
                setData({
                    isFetched: true,
                    data: [],
                    error: err,
                });
            });
    }, [setData]);

    return (
        <div className="Table">
            <h3 className="Table-title">Table</h3>
            <div className="Table-status"></div>

            {data.data.map((item, key) => {
                return (
                    <Accordion
                        expanded={expanded === item}
                        onChange={handleChange(item)}
                        style={{ border: "none" }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            <TableContent
                                key={item.id}
                                regionName={item.district.name_uz}
                                districtName={item.region.name_uz}
                                accidentType={item.accident_type.name_uz}
                                accidentDate={item.date_accident}
                                vehicleBrand={item.vehicles[0].vehicle_brand.name_uz}
                                vehicleModel={item.vehicles[0].vehicle_model.name_uz}
                                vehicleColor={item.vehicles[0].vehicle_color.name_uz}
                                roadPart={item.road_part.name_uz}
                                btn="Ko'proq"
                            />
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div style={{ display: 'flex',}}>
                                    <div style={{ marginRight: '50px' }}>
                                        <h5>Yo'l holati: {item.road_condition.name_uz}</h5>
                                        <h5>Havo holati: {item.weather_condition.name_uz}</h5>
                                        <h5>Yo'l qismi: {item.road_part.name_uz}</h5>
                                        <h5>Yo'l sirti: {item.road_surface.name_uz}</h5>
                                    </div>

                                    <div style={{ marginRight: '50px' }}>
                                        <h5>Buzilgan qoida: {item.participants.map(el => el.violation.map(el => el.name_uz))}</h5>
                                        <h5>Haydovchining yoshi va jinsi: {item.participants[0].age} yosh {item.participants[0].gender_type === 'male' ? 'erkak' : item.participants[0].gender_type === 'female' ?  'ayol' : undefined}</h5>
                                        <h5>Haydovchining holati: {item.participants[0].health_condition === 'healthy' ? "sog'lom" : item.participants[0].health_condition === 'died' ? "o'lgan" : item.participants[0].health_condition === 'injured' ? 'jarohatlangan' : undefined }</h5>
                                        <h5>Hodisa ro'y bergan ko'cha nomi: {item.street_name}</h5>
                                    </div>

                                    <div>
                                        <h5></h5>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
            

            
        </div>
    );
};

export default Table;