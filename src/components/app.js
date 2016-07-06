import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';


export default class App extends Component {

  	render() {
    	return (
    		<div>
      			<h2>Awesome Movie Application</h2>
      			<SearchBar />
      			{this.props.children}
      		</div>
    	);
  	}
}
