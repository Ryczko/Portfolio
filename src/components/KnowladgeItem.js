import React from 'react';
import Counter from 'react-countup'
import { useState } from 'react'




function KnowladgeItem(props) {

    const [style, setStyle] = useState({
        top: `100%`
    })


    setTimeout(() => {

        setStyle({ height: `${props.level}%` })


    }, 0);


    return (
        <div className="knowladge-item">

            <div className={"knowladge-item__icon " + props.name}>
                <div className="knowladge-item__icon-bg" style={style}>


                </div>
                <img src={require(`../img/icons/${props.name}.png`)} alt="item" />
                <div className="knowladge-item__power" >

                    <Counter useEasing={false} start={0} delay={0} duration={3} end={props.level} suffix="%" />
                </div>

            </div>
        </div>
    );
}

export default KnowladgeItem;