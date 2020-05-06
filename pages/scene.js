import React, { Component } from 'react';

import Header from '../components/header';
import Scene from '../components/scene';
import LoadEllipsis from "../components/load";

class ScenePage extends Component {
    static getInitialProps({req, query}) {
        const command = req ? req.params.command : query.command;
        const id = req ? req.query.id : query.id;

        return {command, id};
    }

    constructor(props) {
        super(props);
        this.state = {
            scene: null,
            loading: true
        }
    }

    componentDidMount() {
        this.loadScene();
    }

    componentDidUpdate(prevProps) {
        if (this.props.command !== prevProps.command ||
            this.props.id !== prevProps.id ) {
            this.loadScene();
        }
    }

    getUrlFetch = () => {
        switch (this.props.command) {
            case 'start':
                return `/api/adventures/start/${this.props.id}`;
            case 'next':
                return `/api/scene/${this.props.id}`;
            case 'repeat':
                return '/api/start-scene';
            default:
                return;
        }
    };

    loadScene = () => {
        const url = this.getUrlFetch();

        fetch(url)
            .then(response => response.json())
            .then(scene => {
                this.setState({scene: scene, loading: false})
            });
    };

    render() {
        const {scene, loading} = this.state;

        if (loading){
            return <LoadEllipsis/>;
        }

        return (
            <React.Fragment>
                <Header/>
                <Scene scene={scene}/>
            </React.Fragment>
        );
    }
}

export default ScenePage;
