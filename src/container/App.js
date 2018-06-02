import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import '../App.css';
import Header from '../component/Header.js';
import Counter from '../component/Counter.js';
import Player from '../component/Player.js';
import AddPlayer from '../component/AddPlayer.js';
import Timer from '../component/Timer.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PlayersActions from '../actions/player'

class App extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
	}
	constructor (props) {
		super(props);
		this.state = {players: this.props.players}
	}

	render() {
		const {dispatch, players} = this.props;
		const addPlayer = bindActionCreators(PlayersActions.addPlayer,dispatch);
		const removePlayerr = bindActionCreators(PlayersActions.removePlayer,dispatch);
		const updatePlayer = bindActionCreators(PlayersActions.updatePlayer,dispatch);

		return (<div className="application">
							<Header title={this.props.title} players={this.state.players} />
							<Timer />
							<div className="players">
							{	players.map(
									function (value, index) {
										return ( <Player name={value.name}
											index = {index}
										key={index} score={value.score}
										removePlayer = {removePlayerr}
										onChangeScore={updatePlayer} />);})}
							</div>
							<AddPlayer addPlayer={addPlayer}/>
						</div>);
	}
}

const mapStateToProps = state => { console.log('state change'); return ({players: state.players});}

export default connect(mapStateToProps)(App);
