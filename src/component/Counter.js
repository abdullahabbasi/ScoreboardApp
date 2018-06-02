import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
	return (<div className="counter-section">
					 <button className="counter increment" onClick={ (event) => props.onChangeScore( props.index, 1) }> + </button>
					 <span className="score"> {props.score} </span>
					 <button className="counter decrement" onClick={ (e) => props.onChangeScore(props.index, -1) }> - </button>
				 </div>);
}

Counter.propTypes = {
	score: PropTypes.number.isRequired,
	onChangeScore: PropTypes.func.isRequired
}

export default Counter;
