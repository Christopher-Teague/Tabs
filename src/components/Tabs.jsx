import React from 'react';

const Tabs = (props) => {

    const {tabs} = props;

    console.log(props.currentMessage)

    const onClickHandler = (e, value) => {
        // alert("passing index: "+value);
        console.log("Returning: " + value)
        props.currentMessage(parseInt(value));
        console.log("Returning: " + value +" Successful")
    }

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