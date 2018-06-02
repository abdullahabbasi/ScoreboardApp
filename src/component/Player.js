import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter.js';

const Player = (props) => {
	return (			<div className="player">
									<a onClick={() => props.removePlayer(props.index)}>X</a>
									<div className="player-name">{props.name}</div>
									<Counter score={props.score} onChangeScore={props.onChangeScore} index={props.index}/>
								</div>);
}

Player.propTypes =  {
	name: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
	onChangeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
}

export default Player;
