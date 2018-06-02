import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../App.css';

const Stats = (props) => {
	console.log('props stats  123', props)
	const totalCount = props.players.length;
	const totalScore = props.players.reduce(function(total, player) { return total += player.score}, 0);

	return (<div>
			<div style={{display: 'flex'}}>
				<div style={{flex: 1}}>Players</div>
				<div style={{flex: 1}}>{totalCount}</div>
			</div>
			<div style={{display: 'flex'}}>
				<div style={{flex: 1}}>Score</div>
				<div style={{flex: 1}}>{totalScore}</div>
			</div>
		</div>);
}

export default Stats;
