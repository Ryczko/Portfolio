import React from 'react';
import SocialItem from './SocialItem'

function Socials(props) {
    return (
        <div className="socials">
            <SocialItem icon="facebook" time="300" link="https://www.facebook.com/konrad.ryczko.3" />
            <SocialItem icon="github" time="600" link="https://github.com/Ryczko" />
            <SocialItem icon="linkedin" time="900" link="https://www.linkedin.com/in/konrad-ryczko-2298b7188/" />
        </div>
    );
}

export default Socials;