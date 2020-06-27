import React from 'react';

function Switcher(props) {
    return (
        <div className="switcher">

            <input type="checkbox" onChange={props.check} checked={props.isChecked} />
        </div>
    );
}

export default Switcher;