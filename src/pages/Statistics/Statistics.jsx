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
        axios
            .get("/open_data/")
            .then((res) => {
                res.data.results.map((el) => {
                    let data = {
                        name: el.district.name_uz,
                        value: 12,
                    };
                    arr.push(data);
                });
                let filteredData = arr.filter( 
                    (v, i, a) => {
                        console.log();
                        return (
                            a.findIndex(
                                (t) => t.place === v.place && t.name === v.name
                            ) === i
                        );
                    }
                );
                
                setState(filteredData);
                console.log(state)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // console.log(arr);

    // const findDups = (arr) => {
    //     const dups = [];
    //     let index = '';
    //     for (let i = 0; i < arr.length; i++) {
    //         // index = Math.abs(arr[i]) - 1;

    //         if (arr[index] < 0) {
    //             dups.push(index + 1);
    //         } else {
    //             arr[index] *= -1;
    //         }
    //     }
    //     return dups;
    // };

    return (
        <div className="content">
            <PieChart width={800} height={600}>
                <Pie
                    data={state}
                    dataKey="value"
                    outerRadius={150}
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
                <Tooltip />
            </PieChart>

            <div>{}</div>
        </div>
    );
};

export default Statistics;
