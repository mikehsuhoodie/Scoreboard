import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  scores: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteScore(id) {
    dispatch({
      type: 'DELETE_SCORE',
      payload: id
    });
  }

  function addScore(score) {
    dispatch({
      type: 'ADD_SCORE',
      payload: score
    });
  }

  return (<GlobalContext.Provider value={{
    scores: state.scores,
    deleteScore,
    addScore
  }}>
    {children}
  </GlobalContext.Provider>);
}