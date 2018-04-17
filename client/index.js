import './style/style.css';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router, hashHistory} from 'react-router';
import SongList from './components/songList';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';


const client = new ApolloClient({
    dataIdFromObject: o => o.id
});

const Root = () => <ApolloProvider client={client}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={SongList}/>
            <Route path="songs/new" component={SongCreate}></Route>
            <Route path="songs/:id" component={SongDetail}></Route>
        </Route>
    </Router>
</ApolloProvider>;
ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
