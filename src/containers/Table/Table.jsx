import React, { useState, useEffect } from "react";
import axios from "../../utils/api";
import TableContent from "../../components/TableContent/TableContent";

import "./Table.scss";
import { Accordion, AccordionItem, AccordionItemPanel } from "react-accessible-accordion";

const Table = () => {
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
                    <div>
                        {/* <Accordion allowZeroExpanded> */}
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
                        {/* </Accordion> */}
                    </div>
                );
            })}
        </div>
    );
};

export default Table;
