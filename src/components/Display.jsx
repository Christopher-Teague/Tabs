import React from "react";

const Display = (props) => {
console.log(props)

    const { msg } = props;
// console.log(msg.message)
    return (
        <div>
           {/* <h1>{msg}</h1> */}
        </div>
    )
}

export default Display;