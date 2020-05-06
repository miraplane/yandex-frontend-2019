import Link from 'next/link';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Hashtags from '../hashtags';
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

    fetchAdventures = () => {
        fetch(`${this.props.fetchUrl}?offset=${this.state.adventures.length}`)
            .then(response => response.json())
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
                {adventures.map(adventure => {
                    const linkAs = `/scene/start?id=${adventure.id}`;
                    const linkHref = {
                        pathname: '/scene',
                        query: {command: 'start', id: adventure.id}
                    };

                    return (
                        <li className={styles["adventure-item"]}>
                            <Link as={linkAs} href={linkHref}>
                                <a className={styles["adventure-item-img"]}>
                                    <img src={adventure.img}/>
                                </a>
                            </Link>
                            <Link as={linkAs} href={linkHref}>
                                <a className={styles["adventure-item-title"]}>
                                    {adventure.title}
                                </a>
                            </Link>
                            <span className={styles["adventure-item-content"]}>
                            {adventure.content}
                        </span>
                            <Hashtags hashtags={adventure.hashtags}/>
                        </li>
                    );
                })}
                </InfiniteScroll>
                {(() => {
                    if (error) {
                        const message = 'Не удалось загрузить приключения. Пожалуйста, повтрите попытку позже';
                        return (
                            <div className={styles["loading-error"]}>
                                {message}
                            </div>
                        );
                    }
                })()}
            </ul>
        );
    }
}

export default Adventures;
