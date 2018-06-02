import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../App.css';

export default class Timer extends React.Component {
	constructor (props) {
		super(props);
		this.state = {time: 0, running: false};
	}
	startTick () {
		console.log('startTick', this.state);
		this.setState({running: true});
		let self = this;
		this.intervalHandler = setInterval(function() {
				self.state.time++;
				let newTime = self.state.time;
				console.log('triggered');
				self.setState( {time: newTime})}, 1000);
	}
	stopTick () {
		if (this.state.running) {
			clearInterval(this.intervalHandler);
			this.setState({running: false});
		}

		console.log('stopTick');
	}
	resetTick () {
		console.log('reset');
	}
	render() {
		var displayBtn  = this.state.running ? <button onClick={this.stopTick.bind(this)}>Stop</button> : <button onClick={this.startTick.bind(this)}>Start</button>
		return (<div>
			<div>{this.state.time}</div>
			{displayBtn}
			<button onClick={this.resetTick}>Reset</button>

			</div>);
	}
}
