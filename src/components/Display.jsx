import React from "react";

const Display = (props) => {
    console.log("**** props.message ***** " + props.message)

    ///// Not Working \\\\\
    //     const { msg } = props;
    // console.log(msg)

    return (
        <div className="mt-5">
            {/* {JSON.stringify(props.message)} */}
            <h3>{props.message}</h3>
        </div>
    )
}

export default Display;