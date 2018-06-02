import * as PlayerActionTypes from "../actionTypes/players";

const initialState = {'players': [{name: 'Abdullah Abbasi', score: 50},{name:'ABD', score: 23}]};

export default function playerReducer  (state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      console.log('new player added', state);
      return {players: [...state.players, {'name': action.name, 'score':0}]};
    case PlayerActionTypes.DELETE_PLAYER:
      return {players: [...state.players.slice(0, action.index), ...state.players.slice(action.index + 1)]}
    case PlayerActionTypes.UPDATE_SCORE:
      console.log('update score ', action);

      return {players: state.players.map(function(value, index) {
        if (index === action.index) {
          return {...value, score: value.score + action.score};
        } else{
          return value;
        }

      })};
    default:
      return state;
  }
}
