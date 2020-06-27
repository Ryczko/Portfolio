import React from 'react';
import waveFot from '../img/wave-footer.svg'

function Fotter(props) {
    return (
        <footer className="footer">
            <img src={waveFot} alt="" />
            <p>© Copyright 2020 - Konrad Ryczko</p>
        </footer>
    );
}

export default Fotter;