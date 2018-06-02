import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats.js';

const Header =  (props) => {
	return (<div className="header">
						<Stats players= {props.players} />
					</div>);
}
export default Header;
