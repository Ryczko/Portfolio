import React from 'react';

function KnowladgeOther(props) {

    const style = {
        backgroundImage: `url(${require('../img/icons/' + props.name)})`,
        color: 'red'
    }
    return (
        <div className="knowladge__others-item" style={style}>

        </div>
    );
}

export default KnowladgeOther;