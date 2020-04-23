import React from 'react';

import { Link } from 'react-scroll'

const Header = (props) => {

    const handleClick = () => {
        const menu = document.querySelector('.top__nav ul')
        menu.classList.toggle('active')
    }




    return (
        <header className="top">
            <nav className="top__nav">
                <div className="icon-menu" onClick={handleClick}></div>
                <ul>
                    <li>
                        <Link activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={700}
                            isDynamic={true}
                            onClick={handleClick}
                        >
                            {props.content.nav.element1}

                        </Link>

                    </li>
                    <li>
                        <Link activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            onClick={handleClick}
                            duration={700}

                        >
                            {props.content.nav.element2}

                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                            to="knowladge"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={700}
                            onClick={handleClick}
                            offset={-80}
                        >
                            {props.content.nav.element3}

                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={700}
                            onClick={handleClick}
                        >
                            {props.content.nav.element4}

                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={700}
                            onClick={handleClick}
                        >
                            {props.content.nav.element5}

                        </Link>
                    </li>

                </ul>

            </nav>
        </header >
    );
}

export default Header;