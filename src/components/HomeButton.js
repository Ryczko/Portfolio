import React from 'react';
import { Link } from 'react-scroll';

function HomeButton(props) {
    return (

        <div className="home-btn">
            <Link
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
        </div >

    );
}

export default HomeButton;