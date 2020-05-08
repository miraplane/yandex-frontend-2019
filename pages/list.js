import React, { Component } from 'react';

import routes from '../src/routes/routes';
import Header from '../components/header';
import Adventures from '../components/adventures';

class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Adventures fetchUrl={routes.API_ADVENTURES} hasMore={true}/>
            </React.Fragment>
        );
    }
}

export default IndexPage;
