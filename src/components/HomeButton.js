import React from 'react';
import { Link } from 'react-scroll';

function HomeButton(props) {
    return (


        <Link className="home-btn"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={700}
            offset={-80}
            isDynamic={true}>
            {props.content}
            <span></span><span></span><span></span><span></span>
        </Link>


    );
}

export default HomeButton;