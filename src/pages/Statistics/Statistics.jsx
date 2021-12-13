import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import axios from "../../utils/api";

import Header from "../../containers/Header/Header";

import "./Statistics.scss";

const dataCity = [
    { name: "Jizzax", value: 400 },
    { name: "Toshkent", value: 1 },
    { name: "Qashqadaryo", value: 10000 },
    { name: "Farg'ona", value: 1000 },
    { name: "Andijon", value: 100 },
    { name: "Shahrisabz", value: 1300 },
];

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
        axios.get("/open_data/")
            .then((res) => {
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
        console.log(data);
        
        // let arr = [];
 
        // let nmadir = arr.map(arrItem => {
        //     return arrItem;
        // })
        // data.data.map(item => {
        //     nmadir = item
        // });

        // console.log(nmadir)

        // let arr = [];
        // data.data.map( (item) => {
        //     arr.push(item.district.name_uz)
        // })
        // console.log(arr);
        // arr.filter((element) => {
        //     console.log(element); 
        // })


    return (
        <div className="Statistics">
            <Header title="Statistics" />
            <div className="content">
                <PieChart width={600} height={500}>
                    <Pie
                        data={dataCity}
                        dataKey="value"
                        outerRadius={150}
                        fill="#4fd1c0"
                        isAnimationActive={true}
                        label={renderLabel}
                        cx="50%"
                        cy="50%"
                    >
                        {dataCity.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};
export default Statistics;
