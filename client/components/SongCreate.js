import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {

    constructor (props) {

        super(props);
        this.state = {'title': ''};
        this.updateValue = this.updateValue.bind(this);
        this.submit = this.submit.bind(this);

    }

    submit (event) {

        event.preventDefault();
        this.props.mutate({variables: {title: this.state.title},
        refetchQueries: [{query}]
        })
        .then(()=> hashHistory.push('/'));
    }
    updateValue(event){
        this.setState({'title': event.target.value}) 
    }
    render () {

        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create a new song</h3>
                <form onSubmit={this.submit}>
                    <label>Song Title:</label>
                    <input
                        onChange={this.updateValue}
                        value={this.state.title}
                    />
                </form>
            </div>
        );

    }
}
const mutation = gql`
mutation AddSong($title: String){
  addSong(title: $title){
  title
  }
}`;

export default graphql(mutation)(SongCreate);
