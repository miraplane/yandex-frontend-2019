import React, { Component } from 'react';

import Header from '../components/header';
import SelectHashtag from '../components/selectHashtag';
import Adventures from '../components/adventures';
import LoadEllipsis from "../components/load";

class ListByName extends Component {
    static getInitialProps({req, query}) {
        const link = req ? req.params.link : query.link;

        return {link};
    }

    constructor(props) {
        super(props);
        this.state = {
            hashtag: null,
            loading: true
        };
    }

    componentDidMount() {
        this.loadHashtag();
    }

    componentDidUpdate(prevProps) {
        if (this.props.link !== prevProps.link) {
            this.loadHashtag();
        }
    }

    loadHashtag = () => {
        fetch(`/api/hashtag/${this.props.link}`)
            .then(response => response.json())
            .then(hashtag => {
                this.setState({hashtag: hashtag, loading: false});
            });
    };

    render() {
        const {hashtag, loading} = this.state;

        if (loading){
            return <LoadEllipsis/>
        }


        return (
            <React.Fragment>
                <Header/>
                <SelectHashtag hashtag={hashtag}/>
                <Adventures fetchUrl={`/api/adventures/${hashtag.link}`}/>
            </React.Fragment>
        );
    }
}

export default ListByName;
