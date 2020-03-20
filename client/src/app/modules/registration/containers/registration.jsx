import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { registerUser } from '../actions.js';
import Component from '../components/registration.jsx';

const mapStateToProps = state => {
	return Object.assign({}, state.auth, {
		api: state.registration
	});
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		registerUser
	}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);