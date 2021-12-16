import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import axios from "../../utils/api";
import Header from "../../containers/Header/Header";

// import "./Statistics.scss";

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

const Statistic = () => {

    const [ obj, setObj ] = useState([]);
    let arr = []

    useEffect(() => {
        axios.get("/open_data/").then((res) => {
            res.data.results.map((el) => {
                setObj({ name: el.district.name_uz, value: el.district.id });
                // setObj(birnima)
                // console.log(obj);
            });
        });
    }, []);

    console.log(obj);

    return (
        <div className="Statistics">
            <Header title="Statistika" />

            <div className="content">
                <PieChart width={600} height={600}>
                    <Pie
                        data={obj}
                        dataKey="value"
                        outerRadius={150}
                        fill="#4fd1c0"
                        isAnimationActive={true}
                        label={renderLabel}
                        cx="50%"
                        cy="50%"
                    >

                        {obj.map((item, index) => {
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

export default Statistic;
