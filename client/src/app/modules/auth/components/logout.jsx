import React, { Component } from 'react';

export default class Container extends Component {

	componentWillMount() {
		this.props.actions.logoutUser();
	}

	render() {
		return null;
	}

}