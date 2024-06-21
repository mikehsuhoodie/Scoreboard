export default (state, action) => {
  switch(action.type) {
    case 'DELETE_SCORE':
      return {
        ...state,
        scores: state.scores.filter(score => score.id !== action.payload)
      }
    case 'ADD_SCORE':
      return {
        ...state,
        scores: [action.payload, ...state.scores]
      }
    default:
      return state;
  }
}