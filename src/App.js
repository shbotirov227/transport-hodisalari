import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Sidebar from "./containers/Sidebar/Sidebar";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import SignIn from "./pages/SignIn/SignIn";
import Statistics from "./pages/Statistics/Statistics";
import SignUp from "./pages/SignUp/SignUp";

import "./assets/main.scss";

function App() {
    return (
        <div className="App container">
            <React.Fragment>
                <Router>
                    <Sidebar />

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/map" element={<Map />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/statistics" element={<Statistics />} />
                    </Routes>
                </Router>
            </React.Fragment>
        </div>
    );
}

export default App;
// https://api-dtp.yhxbb.uz/api/egov/open_data
