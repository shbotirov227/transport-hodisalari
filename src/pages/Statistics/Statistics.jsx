import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import axios from "../../utils/api";
import Header from "../../containers/Header/Header";

import "./Statistics.scss";

// const data = [
//     { name: "Jizzax", value: 400 },
//     { name: "Toshkent", value: 1 },
//     { name: "Qashqadaryo", value: 10000 },
//     { name: "Farg'ona", value: 1000 },
//     { name: "Andijon", value: 100 },
//     { name: "Shahrisabz", value: 1300 },
// ];


// const results = (data) => {
//     Object.keys(data).reduce((result, key) => {
//         (!~result.indexOf(data[key].name)) &&
//             result.push(data[key].name);
//         return result
//     }, [])
// }


let renderLabel = function (entry) {
    return entry.name;
};

const COLORS = [
    "#455A64",
    "#4B6C81",
    "#517E9E",
    "#5891BC",
    "#5EA3D9",
    "#64B5F6",
];

const Statistics = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        axios.get("/open_data/")
            .then((res) => {
                res.data.results.map((el, index) => {
                    data.push({ name: el.district.name_uz, value: null });
                    // setData(getAllData);
                });
            })
            .catch((err) => {
                return err;
            });
    }, [data]);

    return (
        <div className="Statistics">
            <Header title="Statistika" />
            <div className="content">
                <PieChart width={600} height={500}>
                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={150}
                        fill="#4fd1c0"
                        isAnimationActive={true}
                        label={renderLabel}
                        cx="50%"
                        cy="50%"
                    >
                        {data.map((entry, index) => {
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />;
                        })}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};
export default Statistics;