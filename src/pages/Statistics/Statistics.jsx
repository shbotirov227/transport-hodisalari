import React, { PureComponent, useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import axios from "../../utils/api";

import Header from "../../containers/Header/Header";

import "./Statistics.scss";

// const dataCity = [
//     { name: "Jizzax", value: 400 },
//     { name: "Toshkent", value: 1 },
//     { name: "Qashqadaryo", value: 10000 },
//     { name: "Farg'ona", value: 1000 },
//     { name: "Andijon", value: 100 },
//     { name: "Shahrisabz", value: 1300 },
// ];

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
        
        let arr = [
            {name: null},
            {value: null}
        ]
        data.data.map(item => {
            arr.name = item.district.name;
            arr.value = item.region.name_uz
            // arr.push(item.district.name_uz);
            return item
        });
        console.log(arr);

    return (
        <div className="Statistics">
            <Header title="Statistics" />
            <div className="content">
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                    }}
                >
                    {/* <ul className="colors values">
                        <li className="">
                            <span className="color"></span>
                            <span className="value">Jizzax</span>
                        </li>

                        <li className="">
                            <span className="color"></span>
                            <span className="value">Toshkent</span>
                        </li>

                        <li className="">
                            <span className="color"></span>
                            <span className="value">Qashqadaryo</span>
                        </li>

                        <li className="">
                            <span className="color"></span>
                            <span className="value">Farg'ona</span>
                        </li>

                        <li className="">
                            <span className="color"></span>
                            <span className="value">Andijon</span>
                        </li>

                        <li className="">
                            <span className="color"></span>
                            <span className="value">Shahrisabz</span>
                        </li>
                    </ul> */}
                </div>

                <PieChart width={600} height={500}>
                    <Pie
                        data={arr}
                        dataKey="value"
                        outerRadius={150}
                        fill="#4fd1c0"
                        isAnimationActive={true}
                        label={renderLabel}
                        cx="50%"
                        cy="50%"
                    >
                        {/* {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))} */}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};
export default Statistics;
