import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../App.css';

export default class AddPlayer extends React.Component {
	constructor (props) {
		super(props);
		this.state = {name: ''};
	}
	onChange (e) {
		console.log(e);
		this.setState({name: e.target.value});
	}
	onSubmit (e) {
		e.preventDefault();
		console.log('submit clicked', this);
		this.props.addPlayer(this.state.name);
		this.setState({name: ''} );
	}
	render () {
		return (<div>
					<form onSubmit={this.onSubmit.bind(this)}>
						<input type="text" value={this.state.name} onChange={this.onChange.bind(this)}/>
						<input type="submit" value="Add Player"/>
					</form>
			</div>);
	}
}
