import React, { useContext } from 'react';
import { Score } from './Score';

import { GlobalContext } from '../context/GlobalState';

export const ScoreList = () => {
  const { scores } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {scores.map(score => (<Score key={score.id} score={score} />))}
      </ul>
    </>
  )
}
