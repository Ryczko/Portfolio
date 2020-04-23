import React from 'react';
import Background from '../components/Background';
import HomeButton from '../components/HomeButton';
import Switcher from '../components/Switcher';


function Home(props) {
    return (
        <div className="home" id="home">
            <Background />

            <div className="home__content">
                <Switcher check={props.check} />
                <h1><span>Front-end</span> Developer</h1>
                <h3>Konrad Ryczko</h3>

                <HomeButton content={props.content.homeButton} />
            </div>
        </div>
    );
}

export default Home;