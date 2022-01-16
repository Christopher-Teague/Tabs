import React from 'react';

const Tabs = (props) => {

    ///// deconstruct tabs props as tabs \\\\\
    const {tabs} = props;

    // console.log(props.currentMessage)

    ///// upon clicking a tab, returns the index of the tab object \\\\\
    const onClickHandler = (e, idx) => {
        // alert("passing index: "+idx);
        // console.log("Returning: " + idx)
        props.currentMessage(parseInt(idx));
        // console.log("Returning: " + idx +" Successful")
    }

    ///// iterates over the tabs array and returns a button to display for each tab \\\\\
    ///// when clicked, button returns the index of the tab object to the onClickHandler \\\\\
    return (
        <div className="d-inline-flex flex-wrap mt-5">

            {
                tabs.map((tab, idx) => {
                    return <button key={idx} className="m-2 btn btn-lg btn-outline-success"
                    onClick={ (e) => onClickHandler(e, idx) }>{tab.name}</button>

                })

            }

        </div>
    )

}

export default Tabs;