import React, {Component} from 'react';
// A helper to put together a query into a react component
import {graphql} from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {

  render (){
    console.log(this.props);
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    ) 
  }
}


export default graphql(fetchSong,{
  options: (props) => {return { variables:{id: props.params.id}}
}})(SongDetail);
 

