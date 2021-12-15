import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";

import "./SignIn.scss";

// function onSibmitClick (e) {
//     e.preventDefault();
// }

const SignIn = () => {
    return (
        <div className="SignIn">
            <Header title="Sign In" />
            <h1>Sign in</h1>
            {/* <form
                onSubmit={(e) => e.preventDefault()}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <h2>Sign In</h2>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <input
                        className="inputElement"
                        type="email"
                        name="email"
                        id=""
                        placeholder="Email"
                    />
                    <input
                        className="inputElement"
                        type="password"
                        name="password"
                        id=""
                        placeholder="Password"
                    />
                    <button className="btnElement">Submit</button>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </form> */}
        </div>
    );
};

export default SignIn;
