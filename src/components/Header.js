// import React from 'react'
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title = "Task Tracker" }) => {
    const handleClick = () => {
        console.log("Click with handleClick from Header");
    };

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="purple" text="Show Add Task Bar" handleClick={handleClick} />
        </header>
    );
};

// Header.defaultsProps = {
//     title: "Task Tracker", 
// };

// Header.propsTypes = {
//     title: PropTypes.string.isRequired,
// };

export default Header;
