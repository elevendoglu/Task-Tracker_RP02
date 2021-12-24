// import React from 'react'

const Button = ({handleClick}) => {
    // const handleClick = () => {
    //     console.log("Click with handleClick");
    // };
    return (
        <div>
            <button className="btn" onClick= {handleClick}>
                {/* {() => console.log("Click")}>
                {" "} */}
                Show Add Task Bar
            </button>            
        </div>
    );
};

export default Button
