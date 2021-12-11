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
            <h3 className="Table-title">Authors Table</h3>
            <div className="Table-status"></div>

            {data.data.map((item, key) => {
                return (
                    <Accordion expanded={expanded === item} onChange={handleChange(item)} style={{border: 'none'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            {/* <Typography sx={{ width: '100%', flexShrink: 0 }}> */}
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
                            {/* </Typography> */}
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
            

            
        </div>
    );
};

export default Table;
