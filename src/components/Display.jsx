import React from "react";

const Display = (props) => {
    // console.log("**** props.message ***** " + props.message)

    ///// Not Working \\\\\
    //     const { msg } = props;
    // console.log(msg)
    
    ///// returns one div displaying current message \\\\\
    return (
        <div className="mt-5">
            {/* {JSON.stringify(props.message)} */}
            <h3>{props.message}</h3>
        </div>
    )
}

export default Display;