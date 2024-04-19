import Navbar from "./components/Navbar";
import HousingCategory from "./components/HousingCategory";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <HousingCategory/>
            <h1>hello world</h1>
        </React.Fragment>
    )
}

export default App;