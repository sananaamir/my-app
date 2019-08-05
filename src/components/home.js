import React, { Component } from 'react';
import AboutMe from './about-me';
import ContactMe from './contact-me';

class Home extends Component {
    render() {
        return (
            <div>
                <AboutMe />
                <ContactMe />
            </div>
        )
    }
}

export default Home;