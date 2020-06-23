import React from 'react';

function KnowladgeItem(props) {



    return (
        <div className="knowladge-item">

            <div className={"knowladge-item__icon "}>

                <img src={require(`../img/icons/${props.name}.png`)} alt="item" />

            </div>
        </div>
    );
}

export default KnowladgeItem;