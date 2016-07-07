import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import DevTools from '../containers/dev_tools'



export default class App extends Component {

  	render() {
    	return (
    		<div>
      			<h2>Awesome Movie Application</h2>
      			<SearchBar />
      			{this.props.children}
      			<DevTools />
      		</div>
    	);
  	}
}
