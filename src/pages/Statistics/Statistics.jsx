import React, { useState, useEffect } from "react";
import { Tooltip, PieChart, Pie, Cell } from "recharts";
import axios from "../../utils/api";
import "./Statistics.scss";

const COLORS = [
    "#455A64",
    "#4B6C81",
    "#517E9E",
    "#5891BC",
    "#5EA3D9",
    "#64B5F6",
];

let renderLabel = function (entry) {
    return entry.name;
};

const Statistics = () => {
    const [state, setState] = useState([]);
    const arr = [];

    useEffect(() => {
        axios.get("/open_data/")
            .then((res) => {
                res.data.results.map((el) => {
                    let data = { name: el.district.name_uz, value: el.district.id };
                    arr.push(data);
                });
                let filteredData = arr.filter((v, i, a) => (a.findIndex((t) => t.place === v.place && t.name === v.name) === i));
                setState(filteredData);
            })
            .catch(err => err);
        }, []);

    return (
        <div className="Statistics">
            <div className="content">
                <PieChart width={700} height={600}>
                    <Pie
                        data={state}
                        dataKey="value"
                        outerRadius={180}
                        fill="#4fd1c0"
                        isAnimationActive={true}
                        label={renderLabel}
                        cx="50%"
                        cy="50%"
                    >
                        {state.map((item, index) => {
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />;
                        })}
                    </Pie>
                    {/* <Tooltip /> */}
                </PieChart>

                <div>
                    {
                        state.map(item => {
                            return <h3 className="Statistics-name">{item.name}</h3>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Statistics;
