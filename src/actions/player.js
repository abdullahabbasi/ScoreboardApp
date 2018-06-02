import * as PlayerActionTypes from "../actionTypes/players";

export const addPlayer = (name) => {
  console.log('add player invoked ', name);
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name
  };
};

export const removePlayer = (index) => {
  return {
    type: PlayerActionTypes.DELETE_PLAYER,
    index
  };
};

export const updatePlayer = (index, score) => {
  return {
    type: PlayerActionTypes.UPDATE_SCORE,
    index,
    score
  };
};
