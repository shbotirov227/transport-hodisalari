import React, { useState, useEffect } from "react";
import axios from "../../utils/api";
import TableContent from "../../components/TableContent/TableContent";

import "./Table.scss";

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

    let responseData = data.data;

    console.log(responseData);

    return (
        <div className="Table">
            <h3 className="Table-title">Authors Table</h3>
            <div className="Table-status"></div>

            {responseData.map((item, key) => {
                return (
                    <TableContent
                        key={item.id}
                        regionName={item.district.name_uz}
                        districtName={item.region.name_uz}
                        accidentType={item.accident_type.name_uz}
                        accidentDate={item.date_accident}
                    />
                );
            })}
        </div>
    );
};

export default Table;
