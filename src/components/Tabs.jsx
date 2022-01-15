import React from 'react';

const Tabs = (props) => {

    const {tabs} = props;

    console.log(props)

    const onClickHandler = (e, value) => {
        alert("passing index: "+value);
        // setMsg(value);
    }

    return (
        <div className="d-inline-flex flex-wrap mt-5">

            {
                tabs.map((tab, idx) => {
                    return <button key={idx} className="btn btn-lg btn-outline-dark"
                    onClick={ (e) => onClickHandler(e, idx) }>{tab.name}</button>

                })

            }

        </div>
    )

}

export default Tabs;