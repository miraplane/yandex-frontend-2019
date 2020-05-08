import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import AdventureItem from '../adventureItem';
import styles from './adventures.module.css';
import LoadEllipsis from "../load";

class Adventures extends React.Component {
    static getInitialProps({req, query}) {
        const fetchUrl = req ? req.params.fetchUrl : query.fetchUrl;
        const hasMore = req ? req.params.hasMore : query.hasMore || false;

        return {fetchUrl, hasMore};
    }

    constructor(props) {
        super(props);
        this.state = {
            hasMore: this.props.hasMore,
            adventures: [],
            error: false
        };
    }

    componentDidMount() {
        this.fetchAdventures();
    }

    componentDidUpdate(prevProps) {
        if (this.props.fetchUrl !== prevProps.fetchUrl) {
            this.setState({
                hasMore: this.props.hasMore,
                adventures: [],
                error: false
            });
            this.fetchAdventures();
        }
    }

   load = (url) => fetch(url).then(response => response.json());

    fetchAdventures = () => {
        this.load(`${this.props.fetchUrl}?offset=${this.state.adventures.length}`)
            .then(adventures => {
                if (adventures.length !== 0) {
                    const data = this.state.adventures.concat(adventures);
                    this.setState({adventures: data});
                } else {
                    this.setState({hasMore: false});
                }
            })
            .catch(error => {
                this.setState({hasMore: false, error: true});
            });
    };

    render() {
        const {hasMore, adventures, error} = this.state;

        return (
            <ul className={styles["adventure"]}>
                <InfiniteScroll
                    dataLength={adventures.length}
                    next={this.fetchAdventures}
                    hasMore={hasMore}
                    loader={<LoadEllipsis/>}
                >
                {adventures.map(adventure =>
                    <li className={styles["adventure-item"]} key={adventure.id}>
                        <AdventureItem adventure={adventure}/>
                    </li>
                )}
                </InfiniteScroll>
                {error && (
                    <div className={styles["loading-error"]}>
                        Не удалось загрузить приключения. Пожалуйста, повтрите попытку позже
                    </div>
                )}
            </ul>
        );
    }
}

export default Adventures;
