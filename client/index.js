import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router, hashHistory} from 'react-router';
import SongList from './components/songList';
import App from './components/App';
import SongCreate from './components/SongCreate';
const client = new ApolloClient({});

const Root = () => <ApolloProvider client={client}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SongList}/>
            <Route path="songs/new" component={SongCreate}></Route>
        </Route>
    </Router>
</ApolloProvider>;
ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
