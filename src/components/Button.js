// import React from 'react'

const Button = ({ color, text, handleClick}) => {
    // const handleClick = () => {
    //     console.log("Click with handleClick");
    // };
    return (
        <div>
            <button className="btn" style= {{ backgroundColor: color }} onClick= {handleClick}>
                {text}
                {/* {() => console.log("Click")}>
                {" "} */}
                Show Add Task Bar
            </button>            
        </div>
    );
};

export default Button
