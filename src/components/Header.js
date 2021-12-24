// import React from 'react'
import PropTypes from "prop-types";

const Header = ({ title = "Task Tracker" }) => {
    return (
        <header>
            <h1>{title}</h1>
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
