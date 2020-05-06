import React, { Component } from 'react';

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
                <Adventures fetchUrl={'/api/adventures'} hasMore={true}/>
            </React.Fragment>
        );
    }
}

export default IndexPage;
