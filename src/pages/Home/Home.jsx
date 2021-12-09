import React from "react";
import Header from "../../containers/Header/Header";
import Table from "../../containers/Table/Table";

import "./Home.scss";

const Home = () => {
    return (
        <div className="Home">
            <Header title="Tables" />
            <Table />
        </div>
    );
};

export default Home;
